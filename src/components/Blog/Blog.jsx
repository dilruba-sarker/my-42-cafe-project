import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleAddToBookMarks,handleMarkAsRed, }) => {
  const { title, cover, reading_time, author,hastag,id,
     author_img, posted_date } = blog;
  // console.log(blog);
  return (
    <div className="space-y-4">
      <img className="w-full mb-8" src={cover}></img>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            className="avatar rounded-full w-8 h-8"
            src={author_img}
            alt=""
          />
          <div>
            <p className="text-xl">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}min read</span>
          <button  onClick={()=>handleAddToBookMarks(blog)} className="ml-2">
           
             <FaBookmark></FaBookmark>
             </button>
        </div>
      </div>
      <h2 className="text-xl">{title}</h2>

      <p>{hastag.map(hastag=><span key={hastag}><a href="">#{hastag}</a></span>)}</p>
       <button onClick={()=>handleMarkAsRed(reading_time,id)}
       className="underline text-blue-800 ">Mark as red</button>
   
    </div>
  );
};
Blog.propTypes = { blog: PropTypes.object,
        handleAddToBookMarks:PropTypes.func,        
        handleMarkAsRed:PropTypes.func 

};
export default Blog;
