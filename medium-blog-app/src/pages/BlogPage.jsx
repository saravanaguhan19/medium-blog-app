import Blog from "../components/Blog";

function BlogPage({ blogs }) {
  console.log(blogs);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          content={blog.content}
          name={blog.createdBy}
          time={blog.createAt}
        />
      ))}
    </div>
  );
}

export default BlogPage;
