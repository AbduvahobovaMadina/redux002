import { useFetch } from "../../companents/hooks/useFetch";
import Blogs from "../../companents/blogs/blogs";
import { useEffect } from "react";
import axios from "../../api/index";
import { useDispatch } from "react-redux";

const Home = () => {
  const { data } = useFetch("/blogs", {}, []);
  const dispatch = useDispatch()
  useEffect(()=>{
    axios
      .get("/admin/profile")
      .then(res=> {
        // console.log(res.data.payload);
        dispatch({type: "SET_PROFILE", payload:res.data.payload})
      })
  },[])
  return (
    <div>
      <Blogs data={data?.payload} />
    </div>
  );
};

export default Home;
