
import React, { useState } from "react";

export default function List(props) {
    const { name, price, id, info, category, img } = props.item
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="itemList">
      <div key={id} className="foodItem-container">
        <div className="imgContainer">
          <img src={img} alt="" />
        </div>
        <div className="allDescription">
          <div className="titleBar">
            <p className="titleOfMeal">{name}</p>
            <p className="priceOfMeal">${price}</p>
          </div>
          <hr style={{ marginBottom: "10px" }} />
          <div class>
            <p className="descriptionFood">
              {showInfo ? `${info.substring(0, 70)}...` : info}
            </p>
          </div>
          <button className="toggleBtn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "readmore" : "showless"}
          </button>
        </div>
      </div>
    </div>
  );
}

