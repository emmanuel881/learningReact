import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlog] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  //lets fetch data from a json server
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        //returns a js object
        return res.json();
      })
      .then((data) => {
        setBlog(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} handleDelete={handleDelete} title="Blogs" />
        //outputs blog only if has been fully loaded to prevent mapping a null value
      )}
    </div>
  );
};

export default Home;
