import React from "react";

const UserProducts = (props) => {
  const { data } = props;
  return <div>{data.title}</div>;
};

export default UserProducts;
