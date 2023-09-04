import React, { useEffect } from "react";
import Board from "../components/Board/board";
import test from "../test";
import useLogic from "../use-logic";
// Book Mark 에 쓰일 데이터
import getMyBookmark from "../service/getMyBookmark";
// MY Posts 에 쓰일 데이터
import getMyPosts from "../service/getMyPosts";

const MyPage = () => {
  const logic = useLogic();
  if (logic.isPostLoading) {
    return <h2>포스트 데이터를 불러오는데 실패했습니다.</h2>;
  }
  if (logic.isBookMarkInfoLoading) {
    return <h2>북마크 데이터를 불러오는데 실패했습니다.</h2>;
  }
  return (
    <div>
      <div style={{ fontSize: "50px", fontWeight: "bold", margin: "30px" }}>
        {logic.name}
      </div>
      <Board title="Book Mark" info={test}></Board>
      <Board title="My Posts" info={test}></Board>
    </div>
  );
};

export default MyPage;
