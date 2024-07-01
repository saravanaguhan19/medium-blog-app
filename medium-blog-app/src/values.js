const blogs = [
  {
    id:1,
    title: "ejddjdjjdjd",
    content: "djdjdjd",
    createdBy: "Saravana",
    createAt: "15 min ago.",
    comments: [{}],
  },
  {
    id:2,
    title: "dndjdjd",
    content: "jdjdjjd",
    createdBy: "Saravana",
    createAt: "15 min ago.",
    comments: [{}],
  },
];

const blog = {
  title: "blog to push",
  content: "content of the blog to push",
  createdBy: "Saravana",
  createAt: "15 min ago.",
  comments: [{}],
};

blogs.push(blog);

console.log(blogs);
