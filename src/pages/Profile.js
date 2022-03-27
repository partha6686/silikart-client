import React, { useEffect, useState } from "react";
import "../Css/Profile.css";
import UserProduct from "../components/common/UserProduct";

const Profile = () => {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const url = "http://localhost:3300/api/products/user";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200) {
      setProducts((old) => [...old,json]);
      console.log(products);
    }
  };
  const fetchUser = async () => {
    const url = "http://localhost:3300/api/auth/info";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    if (response.status === 200) {
      setUser(json);
    }
  };
  useEffect(() => {
    fetchUser();
    fetchProducts();
  }, []);
  return (
    <>
      <div className="dy">
        <div>
          <div className="main-box">
            <div className="big-circle">
              <div className="small-circle"></div>
            </div>
            <h2 className="heading-name">{user && user.name}</h2>
            <br />
            <h3 className="heading-work">{user && user.college}</h3>
            <br />
            <p className="info"></p>
          </div>
        </div>
      </div>
      <div>
        <div>
          {products &&
            products.map((data) => {
              <UserProduct data={data} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Profile;
