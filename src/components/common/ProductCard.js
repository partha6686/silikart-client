import React from "react";
import "../../Css/ProductCard.css";
import _ from "lodash";
import { capitalize } from "lodash";

const ProductCard = (props) => {
  const { title, description, price, productImg } = props.data;
  console.log(productImg);
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
        <div className="send_mail btn btn-outline-success">
          <span>Mail</span>
        </div>
        <div className="price btn btn-success">
          <span>₹ {price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
