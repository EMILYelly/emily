// test.js를 대신해서 "book mark" 데이터를 가져오는 axios
//user_id 변수 import 해서 넣으시면 됩니다!

import React from "react";
import getApiAdress from "./getApiAdress";
import axios from "axios";

const useGetMyBookmark = () => {
  const adress = getApiAdress();
  return async () => {
    const axiosResult = await axios({
      method: "get",
      url: `${adress}/${user_id}/bookmark`,
    });
    const bookMarks = axiosResult.data;
    return bookMarks;
  };
};

export default useGetMyBookmark;
