import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="mb-6">
        <div className="text-center text-2xl font-bold">
            <h3>My <span className="text-orange-500 font-bold">Blogs</span></h3>
        </div>
        <div className=" mt-8 flex flex-wrap  justify-between">
      
            {
                blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog}></Blog>
                ))
            }
        </div>
    </div>

  );
};

export default Blogs;
