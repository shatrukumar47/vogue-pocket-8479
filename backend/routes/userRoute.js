const express = require("express");
const user = require("../models/userModel");
const route = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist");

//Logout Functionality
route.get("/logout", async (req, res) => {
  const accesstoken = req.cookies.token.accesstoken || null;

  if (accesstoken) {
    let arr = await blacklistModel.find();

    if (arr.length === 0) {
      await blacklistModel.insertMany({ blacklist: accesstoken });
      res.clearCookie("token");
      res.send({ msg: "User has been logged out" });
    } else {
      await blacklistModel.updateMany(
        {},
        { $push: { blacklist: accesstoken } }
      );

      res.clearCookie("token");
      res.send({ msg: "User has been logged out" });
    }
  } else {
    res.send("Login First");
  }
});

//Login Functionality
route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await user.findOne({ email });

    if (User) {
      const verify = await bcrypt.compare(password, User?.password);

      if (verify) {
        const accesstoken = jwt.sign(
          { user_id: User._id, username: User.username },
          "pravin",
          { expiresIn: "1d" }
        );

        const refreshToken = jwt.sign(
          { user_id: User._id, username: User.username },
          "pravin",
          { expiresIn: "2d" }
        );

        let tokens = { accesstoken, refreshToken };
        res.cookie("token", tokens, {
          httpOnly: true,
        });

        // console.log(req.cookies)

        res.status(200).send({
          msg: "Logged-in Successfully",
          accessToken: accesstoken,
          username: User?.username,
          userid: User?._id,
          user: User,
          isAdmin: User?.isAdmin ? true : false
        });
      } else {
        res.status(200).send({ msg: "Wrong Password !!" });
      }
    } else {
      res.status(200).send({ msg: "User Not Found !!" });
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//Register Functionality
route.post("/register", async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

  try {
    const User = await user.findOne({ email });
    const newpass = await bcrypt.hash(password, 5);
    if (User === null) {
      user.create({
        ...req.body,
        password: newpass,
        confirm_password: newpass,
      });
      res.status(200).send({ msg: "The new user has been registered" });
    } else {
      res.send({ msg: "The user already exist" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

//Refresh Token functionality
route.get("/refreshtoken", async (req, res) => {
  const { authorization } = req.headers;

  const rToken = authorization?.split(" ")[1] || null;

  if (!rToken) {
    res.status(400).send({ error: "Please login again" });
  }

  const { email, password } = req.body;
  const User = await user.findOne({ email });

  jwt.verify(rToken, "pravin", (err, decoded) => {
    if (decoded) {
      const token = jwt.sign(
        { user_id: User._id, username: User.username },
        "pravin",
        { expiresIn: "1d" }
      );

      res.status(200).send({ msg: "Login successfull", token: token });
    } else {
      res.send({ error: "Something went wrong" });
    }
  });
});

module.exports = route;
