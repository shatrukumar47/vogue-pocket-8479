const jwt = require("jsonwebtoken")
const blacklistModel = require("../models/blacklist")
const authMiddle = async (req, res, next) => {

    try {

        const { authorization } = req.headers;

        const token = authorization?.split(" ")[1] || null;

        if (token) {

            let existingToken = await blacklistModel.find({ blacklist: { $in: token } });

            if (existingToken.length > 0) {

                res.status(400).send({ error: "Please login again" })
            }

            jwt.verify(token, "pravin", (err, decoded) => {

                if (decoded) {

                    req.userid = decoded.user_id;
                    req.username = decoded.username;
                    next();
                }
                else {

                    res.send({ "error": "Something went wrong" })
                }
            })
        }
        else {

            res.status(400).send("Please login first")

        }

    } catch (error) {

        res.status(400).send({error})

    }




}

module.exports = authMiddle;