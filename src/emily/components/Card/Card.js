import React from "react";
import "./card.css";
const Card = ({ id, title, content, image }) => {
  return (
    <div>
      <div className="container">
        <div className="id">{id}</div>
        <div className="box">
          <div className="box-title">{title}</div>
          <div className="box-content">{content}</div>
          <div className="box-img">
            <img src={image} alt="이미지 url"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
