import React from "react";
import ShopTable from "./ShopTable";
import "./shopInfo.css";

export default function ShopInfo(props) {
  return (
    <div className="info">
      <div className="infoItem">
        <span className="infoTitle">Overall</span>
      </div>
      <div className="tableShop">
        <ShopTable rows = {props.rows} />
      </div>
    </div>
  );
}
