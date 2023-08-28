import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Heading, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";


const SingleProducts = () => {
  const toast = useToast();
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productReducer.data);

  useEffect(() => {
    const newdata = product?.find((el) => el._id === id);
    setData(newdata);
  }, []);

  let finalPrice = data?.price;
  let saveprice = data?.price_cut - data?.price;

  const handleCart = () => {
    toast({
      title: " Added To Cart ",
      description: "Successfully Add To Cart",
      status: "success",
      position: "top",
      duration: 5000,
      isClosable: true,
    });
    let cartdata = {
      ...data,
      quantity: count,
    };

    const CartData = JSON.parse(localStorage.getItem("cartdata")) || [];
    CartData.push(cartdata);
    localStorage.setItem("cartdata", JSON.stringify(CartData));
  };

  return (
    <div>
      <DIV>
        <div className="left">
          <div className="first">
            <h5 className="top-left">-{data?.offer}%</h5>
            <img src={data?.image} alt="" />
          </div>
          <div className="middle">
            <p className="fit">FitQuest</p>
            <p>{data?.name}</p>
            <div className="star">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
              <span>{data?.rating} Reviews</span>
            </div>
            <div className="dabba">
              <p>:gift: Free Nutrabay Shaker</p>
              <p>
                :gift: Free Dr. Vaidya Plant Protein with prepaid cart value
                {">"}₹12,000
              </p>
              <p>
                :gift: Free Nutrabay Stringer with prepaid cart value {">"}{" "}
                ₹8,000
              </p>
              <p>
                Get The Man Company exclusive discount voucher with every
                purchase. T&C
              </p>
            </div>
            <div className="maingray">
              <div className="gray">
                <h6>:package: Sold & Fulfilled By</h6>
                <p>Nutrabay.com - ✓ Brand Authorized</p>
              </div>
              <div className="gray">
                <h6>:zap: Free & Fast Delivery</h6>
                <p>Shipped within 1 day. Free shipping on orders above ₹350.</p>
              </div>
              <div className="gray">
                <h6>:shield: Genuine Products</h6>
                <p>
                  All our products are far from expiry, and procured directly
                  from the brand or authorized importers of the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="brand">
            <Text fontWeight="bold" fontSize="30px">
              {data?.brand}
            </Text>
          </div>

          <br />
          <div className="mrp">
            <p>MRP : </p>
            <Text opacity={".5"} as="del" fontSize={"xl"}>
              ₹ {data?.price + 100}
            </Text>
          </div>
          <div className="mrp">
            <p>selling Price : </p>
            <Text color={"red.600"} as={"b"} fontSize={"xl"}>
              ₹{finalPrice}
            </Text>
          </div>
          <div className="cutmrp">
            <p>You Save: </p>
            <Text color={"red.600"}>₹({20}%)</Text>
          </div>
          <Text className="opacity">Inclusive of all taxes </Text>
          <br />
          <Text className="stock">In Stock</Text>
          <div className="add">
            <div className="count">
              <button
                className="countButton"
                disabled={count <= 1}
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </button>
              <button className="countButton">{count}</button>
              <button
                className="countButton"
                disabled={count >= 10}
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="main">
              <button className="cartIconButton" onClick={handleCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </DIV>
    </div>
  );
};
export default SingleProducts;

const DIV = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  height: 100%;
  /* border: 1px solid red; */
  font-weight: 400;
  padding: 10px;
  justify-content: space-between;
  margin-top: 8%;
  .left {
    /* border: 1px solid blue; */
    width: 60%;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 3px;
  }
  .middle {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    text-align: start;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 3px;
  }
  .fit {
    font-size: 20px;
  }
  .right {
    /* border: 1px solid black; */
    width: 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 20px;
    padding-bottom: 20px;
    height: 60%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .first {
    display: flex;
    /* border: 1px solid gray;  */
    position: relative;
  }
  .first img {
    width: 100%;
    height: 500px;
  }
  .top-left {
    position: absolute;
    top: 8px;
    left: 0px;
    /* border: none; */
    border-radius: 60%;
    padding: 5px;
    color: #fff;
    background-color: #515151;
  }
  .fit {
    font-size: 23px;
    opacity: 0.5;
    color: #e41e00;
  }
  .fa-sharp,
  .fa-solid {
    color: #f49f00;
  }
  .mainbox {
    gap: 10px;
  }
  .box {
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 12px;
  }
  .dabba p {
    border: 1px solid gray;
    margin-top: 10px;
    padding: 12px;
  }
  .maingray {
    border: 1px solid #ece9e9;
    margin-top: 10px;
    background-color: #f5f2f2;
  }
  .gray {
    padding: 12px;
    margin-top: 5px;
  }
  .gray h6 {
    font-weight: bold;
  }
  .weightBox {
    font-size: 14px;
  }
  .weight {
    font-size: 15px;
    /* font-weight: bold; */
    opacity: 0.7;
    display: flex;
  }
  .buttom button {
    margin-right: 15px;
    border-radius: 5px;
    border: 1px solid orange;
    margin-top: 15px;
    padding: 3px 5px;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #faf9f9;
  }
  .buttom button:hover {
    background-color: #ff7b00;
  }
  .mrp {
    display: flex;
    gap: 10px;
  }
  .cutmrp {
    display: flex;
    gap: 10px;
  }
  .opacity {
    opacity: 0.5;
  }
  .stock {
    font-size: 20px;
    font-weight: bold;
    color: #277927;
  }
  .count {
    gap: 5px;
    display: flex;
    justify-content: space-around;
  }
  .count .countButton {
    /* border: 1px solid red; */
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    background-color: #f3f1f1;
    border-radius: 4px;
    margin-top: 10px;
    margin-left: 5px;
    font-weight: bold;
    padding: 2px 9px;
  }
  .count button:hover {
    background-color: #ff4c00;
  }
  .count .cartbutton {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #f3f1f1;
    padding: 6px 60px;
    border-radius: 4px;
    background-color: #ff4c00;
    color: white;
    font-weight: bolder;
    margin-left: 15px;
  }
  .count .cartbutton:hover {
    background-color: #ff4400;
  }
  .add {
    display: flex;
    justify-content: space-around;
  }
  .cartIconButton {
    border: none;
    background: #ff4c00;
    color: #f2f2f2;
    padding: 6px 60px;
    font-size: 18px;
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
    transition: all 500ms ease;
    overflow: hidden;
  }
  .cartIconButton:before {
    font-family: FontAwesome;
    content: "\f217";
    position: absolute;
    top: 11px;
    left: -30px;
    transition: all 200ms ease;
  }
  .cartIconButton:hover:before {
    left: 7px;
  }
  .cartIconButton:hover {
    box-shadow: 1px 3px 8px #000;
  }
  @media only screen and (min-width: 601px) and (max-width: 800px) {
    margin-top: 15%;
    display: flex;
    flex-direction: column;
    .first img {
      width: 100%;
      height: 300px;
    }
    .left {
      width: 100%;
    }
    .first {
      width: 80%;
    }
    .right {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 20px;
      padding-bottom: 20px;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .maingray {
      content-visibility: hidden;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 600px) {
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    .first img {
      width: auto;
      height: 150px;
    }
    .left {
      /* flex-direction: column; */
      width: 100%;
    }
    .first {
      width: 60%;
    }
    .right {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 20px;
      padding-bottom: 20px;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .maingray {
      content-visibility: hidden;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    margin-top: 30%;
    display: flex;
    flex-direction: column;
    .first img {
      width: auto;
      height: auto;
    }
    .left {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .first {
      width: 100%;
      justify-content: center;
    }
    .right {
      border: 1px solid red;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: start;
      padding-left: 20px;
      padding-bottom: 20px;
      height: 60%;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .maingray {
      content-visibility: hidden;
    }
    .cartIconButton {
      padding: 5px 40px;
      margin-top: 7px;
    }
  }
`;
