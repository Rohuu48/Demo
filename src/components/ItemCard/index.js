import React from "react";

function ItemCard(props) {
  console.log("itemcard");
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Rs. {props.price}</p>
    </div>
  );
}

export default ItemCard;
