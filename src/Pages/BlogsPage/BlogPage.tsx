import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./BlogsPageData";
import Markdown from "../../components/Simple/Markdown";

const BlogPage: React.FC = () => {
    const [blog, setBlog] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const selectedBlog = blogs[id];
        fetch(selectedBlog.blogPath)
            .then((res) => res.text())
            .then((text) => setBlog(text));
    }, []);

    return (
        <div
            style={{
                flex: 1,
                borderTopLeftRadius: "4rem",
                borderTopRightRadius: "4rem",
                backgroundColor: "#1d1d1d",
            }}
        >
            <Markdown markdownText={blog || ""} />
        </div>
    );
};

export default BlogPage;
