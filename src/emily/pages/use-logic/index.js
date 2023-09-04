import { useState, useEffect } from "react";
import useGetMyBookmark from "../../service/getMyBookmark";
import useGetMyPosts from "../../service/getMyPosts";

const useLogic = () => {
  const getMyBookmark = useGetMyBookmark();
  const getMyPosts = useGetMyPosts();

  const [postsInfo, setPostsInfo] = useState([]);
  const [bookMarkInfo, setBookMarkInfo] = useState([]);

  const init = async () => {
    const bookmark = await getMyBookmark();
  };
  // useEffect(async()=>{
  //   const bookmark= await myBookmark ();
  //   const posts= await myPosts();
  //   await setPostsInfo(bookmark)
  //   await setBookMarkInfo(bookMarkInfo)

  // },
  // [])
  // 위 데이터가 잘 가져와 지면 test 대신 postsInfo 와 bookMarkInfo 사용
  return {};
};

export default useLogic;
