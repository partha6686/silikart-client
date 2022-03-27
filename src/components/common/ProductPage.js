import React, { useEffect, useState } from "react";
import { useHistory, useParams, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import "../../Css/ProductCard.css";
const ProductPage = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const host = "http://localhost:3300";
  const fetchProducts = async () => {
    const url = `${host}/api/products/category/${category}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // console.log(localStorage.getItem('token'));
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }
    fetchProducts();
  }, [category]);
  return (
    <div className="product_card_container">
      {data.map((note) => (
        <ProductCard key={note._id} data={note} />
      ))}
    </div>
  );
};

export default ProductPage;
