import React from "react";
import Data from "./Data.json";

function Slider() {
  return (
    <div className="Slider">
      {Data.map((data, i) => {
        return (
          <div className="Slides">
            <Cards data={data} />
          </div>
        );
      })}
    </div>
  );
}

const Cards = ({ data, i }) => {
  return (
    <div key={data.id} className="Cards">
      <div className="cardWrapper">
        <img
          className="cardImg"
          src={require("../images/" + data.img)}
          alt={data.alt}
        />
        <h3 className="cardTitle">{data.title}</h3>
        <span>{data.package}</span>
        <div>
          <b className="cardSavings">{data.savings}</b>
        </div>
        <span>{data.bottle}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h5>retail price (USD): </h5>
          <s>{data.retail_price} </s>
        </div>
        <div>
          <h5>One Time Purchase:</h5>
          <span>
            <b>{data.total_price}</b>
          </span>
          <span>
            <b className="cardSavings"> ({data.savings})</b>
          </span>
        </div>
        <div>{data.shipping}</div>
        <button className="cardBtn">Order Now</button>
      </div>
    </div>
  );
};
export default Slider;
