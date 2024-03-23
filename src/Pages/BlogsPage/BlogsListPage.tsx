import React from "react";
import { blogs } from "../../PagesData/BlogsPageData";
import Card from "../../components/Simple/Card";
import Banner from "../../components/Simple/Banner";
import Head from "../../components/Simple/Head";

function getBlogUrl(blogPath: string): string {
    return blogPath.split("/BlogsPage/")[1].replace(/\.(md|json)/, "");
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
            <Head
                title="Blogs and Interviews"
                description="Read blogs and interviews regarding the ongoing conflict and previous incidents in Palestine."
                keywords="Palestine, Palestinian, Palestinian people, Palestinian blogs, Palestinian interviews, Palestinian conflict, Palestinian conflict blogs, Palestinian conflict interviews"
                image=""
                url=""
            />
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
                        type={blog.type}
                        link={`/blogs/${blog.type}s/${getBlogUrl(
                            blog.blogPath
                        )}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogsListPage;
