import React from "react";
import { blogs } from "../../PagesData/BlogsPageData";
import Card from "../../components/Simple/Card";
import Banner from "../../components/Simple/Banner";

const BlogsListPage: React.FC = () => {
  const visibleBlogs = blogs.filter((blog) => blog.showBlog);
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#141414",
      }}
    >
      <Banner
        title="Read Blogs and Interviews Regarding the Ongoing Conflict"
        styleObj={{ color: "white" }}
      />
      <div
        style={{
          marginTop: "2rem",
          paddingTop: "2rem",
          paddingBottom: "3rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {Object.values(visibleBlogs).map((blog) => (
          <Card
            key={`blog-${blog.blogPath}`}
            imagePath={blog.imagePath}
            title={blog.name}
            summary={blog.summary}
            //@ts-ignore
            link={`/blogs/${(blog.blogPath).match(/\/BlogsPage\/(.*).md/)[1]}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsListPage;
