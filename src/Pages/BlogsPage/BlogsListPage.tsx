import React from "react";
import { blogs } from "../../data/blogs";
import Card from "../../components/Simple/Card";

const BlogsListPage: React.FC = () => {
    return (
        <div
            style={{
                flex: 1,
                borderTopLeftRadius: "4rem",
                borderTopRightRadius: "4rem",
                backgroundColor: "#1d1d1d",
                padding: "5rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "3rem",
                }}
            >
                {Object.values(blogs).map((blog) => (
                    <Card
                        key={`blog-${blog.id}`}
                        imagePath={blog.imagePath}
                        title={blog.name}
                        summary={blog.summary}
                        link={`/blogs/${blog.id}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogsListPage;
