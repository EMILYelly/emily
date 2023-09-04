import React from "react";
import Card from "../Card/card";
import "./board.css";

const Board = ({ test, title }) => {
  // const data = [...props.info];
  return (
    <div>
      <div className="board-container">
        <div className="board-title">{title}</div>
        {test.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
