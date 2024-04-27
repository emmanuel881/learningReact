import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //lets fetch data from a json server
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        //returns a js object
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} title="Blogs" />
        //outputs blog only if has been fully loaded to prevent mapping a null value
      )}
    </div>
  );
};

export default Home;
