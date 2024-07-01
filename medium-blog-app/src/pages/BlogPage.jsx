import Blog from "../components/Blog";

function BlogPage({ti}) {
  return (
    <div>
      Blog Page
      <Blog
        title={"this is the title"}
        content={"this is the content of the blog"}
        name={"saravana"}
        time={"15min ago"}
      />
      <Blog
        title={"this is second blog "}
        content={"this is content of second blog"}
      />
      <Blog
        title={"this is the title"}
        content={"this is the content of the blog"}
      />
      <Blog
        title={"this is second blog "}
        content={"this is content of second blog"}
      />
    </div>
  );
}

export default BlogPage;
