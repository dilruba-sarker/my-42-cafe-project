import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookMarks,handleMarkAsRed}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <h5 className="text-4xl">Blogs {blogs.length}</h5>
      {blogs.map(blog => 
        <Blog key={blog.id}
        handleMarkAsRed={handleMarkAsRed}
        handleAddToBookMarks={handleAddToBookMarks}
         blog={blog}>
         </Blog>
      )}
    </div>
  );
};
Blogs.propTypes={handleAddToBookMarks: PropTypes.func,
  handleMarkAsRed: PropTypes.func
 }
export default Blogs;
