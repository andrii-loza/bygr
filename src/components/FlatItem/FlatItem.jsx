import React from "react";
import "./FlatItem.css";

const FlatItem = ({ data }) => {
  console.log(data);
  return (
    <div className="flat-item">
      <div className="item-title">Building A - H0102</div>
      <div className="item-info">
        <div style={{width: '9.8%'}}>
          <div className="info-subtitle">Floor</div>
          <div>{data.floor}</div>
          <div className="info-subtitle">Unit type</div>
          <div>{data.type}</div>
          <div className="info-subtitle">Type</div>
          <div>A1</div>
        </div>
        <div style={{width: '9.8%'}}>
          <div className="info-subtitle">Buyer 1</div>
        </div>
        <div style={{width: '15%'}}>
          <div className="info-subtitle">Buyer 2</div>
        </div>
        <div style={{width: '25%'}}>
          <div className="info-subtitle">Last login</div>
        </div>
        <div style={{width: '40%'}}>
          <div className="info-subtitle">Deadlines</div>
          <div>{data.deadlines[0].Status}</div>
          <div>Deadline 2</div>
          <div>Deadline 3</div>
        </div>
      </div>
    </div>
  )
};

export { FlatItem };