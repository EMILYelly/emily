import { useState, useEffect } from "react";
import useGetMyBookmark from "../../service/getMyBookmark";
import useGetMyPosts from "../../service/getMyPosts";
const useLogic = () => {
  const getMyBookmark = useGetMyBookmark();
  const getMyPosts = useGetMyPosts();

  const [postsInfo, setPostsInfo] = useState([]);
  const [bookMarkInfo, setBookMarkInfo] = useState([]);
  const [name, setName] = useState("이주연");
  const init = async () => {
    const bookmark = await getMyBookmark();
    const posts = await getMyPosts();
    setPostsInfo(posts);
    setBookMarkInfo(bookmark);
  };

  useEffect(() => {
    init();
  }, []);

  return {
    isPostLoading: !postsInfo,
    isBookMarkInfoLoading: !bookMarkInfo,
    postsInfo,
    bookMarkInfo,
    name,
  };
};

export default useLogic;
