import React, { useEffect, useState } from "react";
import "../../Css/ProductCard.css";
import _ from "lodash";
import { capitalize } from "lodash";

const ProductCard = (props) => {
  const host = "http://localhost:3300";
  const [us, setUs] = useState({});
  const { title, description, price, productImg, user } = props.data;
  const fetchUser = async () => {
    const url = `${host}/api/auth/info/${user}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // console.log(localStorage.getItem('token'));
    const json = await response.json();
    setUs({ json });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(us);
  const url = `http://localhost:3300/${productImg}`;
  return (
    <div className="product_card">
      <div className="product_card_head">
        <div className="logo_img">
          <img src={url} alt="productImg" height={250} width={350} />
        </div>
      </div>
      <div className="product_card_body">
        <div className="branding">
          <h4>
            <b>{_.capitalize(title)}</b>
          </h4>
          <p className="para">{_.capitalize(description)}</p>
        </div>
        <a
          href={us.json && `mailto:${us.json.email}`}
          className="send_mail btn btn-outline-success"
        >
          <span>Mail</span>
        </a>
        <div className="price btn btn-success">
          <span>₹ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
