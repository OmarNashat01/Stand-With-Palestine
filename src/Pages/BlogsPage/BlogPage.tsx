import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../../PagesData/BlogsPageData";
import Markdown from "../../components/Simple/Markdown";
import GradientHero from "../../components/Simple/GradientHero";

const BlogPage: React.FC = () => {
    const [blog, setBlog] = useState("");
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const selectedBlog = blogs.find(
            (blog) => blog.blogPath === `/BlogsPage/${id}.md`
        );

        if (selectedBlog !== undefined) {
            setTitle(selectedBlog.name);
            setSubTitle(selectedBlog.subTitle);
            fetch(selectedBlog.blogPath)
                .then((res) => res.text())
                .then((text) => setBlog(text));
        } else {
            navigate("/404");
        }
    }, [id, navigate]);

    return (
        <div
            style={{
                flex: 1,
                borderTopLeftRadius: "4rem",
                borderTopRightRadius: "4rem",
                backgroundColor: "#1d1d1d",
                maxWidth: "85%",
                margin: "auto",
            }}
            className="blog-page"
        >
            <GradientHero
                title={title}
                subTitle1={subTitle}
                subTitle2={""}
                bloody={false}
                circular={true}
                fontSize={"2.7rem"}
                blog={true}
            />
            <Markdown className="markdown-container" markdownText={blog} />
        </div>
    );
};

export default BlogPage;
