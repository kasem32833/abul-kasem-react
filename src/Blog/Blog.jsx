
import PropTypes from 'prop-types'
const Blog = ({ blog }) => {
  const {  title, author, date, summary,  } = blog;

  return (
    <div className="w-1/2  border rounded-xl p-8">
      <h2 className="text-2xl">{title}</h2>
      <p>{summary}</p>
      <p>{author}</p>
      <p>{date}</p>
     <button className="border rounded-full  px-4 py-2 bg-orange-500 text-white font-bold mt-6">Read More</button>
    </div>
  );
};

 Blog.propTypes = {
    blog: PropTypes.object
 }
export default Blog;
