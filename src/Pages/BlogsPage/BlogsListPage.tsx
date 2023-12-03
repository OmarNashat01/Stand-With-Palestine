import React from "react";
import { blogs } from "../../PagesData/BlogsPageData";
import Card from "../../components/Simple/Card";
import Banner from "../../components/Simple/Banner";

function getBlogUrl(blogPath: string): string {
    return blogPath.split("/BlogsPage/")[1].replace(".md", "");
}

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
                {visibleBlogs.map((blog, index) => (
                    <Card
                        key={`blog-${index}`}
                        imagePath={blog.imagePath}
                        title={blog.name}
                        summary={blog.summary}
                        link={`/blogs/${getBlogUrl(blog.blogPath)}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogsListPage;
