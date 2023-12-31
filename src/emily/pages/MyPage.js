import React, { useEffect } from "react";
import Board from "../components/Board/board";
import test from "../test";
// Book Mark 에 쓰일 데이터
import getMyBookmark from "../service/getMyBookmark";
// MY Posts 에 쓰일 데이터
import getMyPosts from "../service/getMyPosts";

const MyPage = () => {
  return (
    <div>
      <div style={{ fontSize: "50px", fontWeight: "bold", margin: "30px" }}>
        My Page
      </div>
      <Board title="Book Mark" info={test}></Board>
      <Board title="My Posts" info={test}></Board>
    </div>
  );
};

export default MyPage;
