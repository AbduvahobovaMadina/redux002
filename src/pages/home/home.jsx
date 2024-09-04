import { useFetch } from "../../companents/hooks/useFetch";
import Blogs from "../../companents/blogs/Blogs";

const Home = () => {
  const { data } = useFetch("/blogs", {}, []);

  return (
    <div>
      <Blogs data={data?.payload} />
    </div>
  );
};

export default Home;
