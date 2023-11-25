import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./Markdown.scss";

interface MarkdownProps {
    markdownText: string;
}

const Markdown: FC<MarkdownProps> = ({ markdownText }) => {
    return (
        <div className="markdown-container">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
            >
                {markdownText}
            </ReactMarkdown>
        </div>
    );
};

export default Markdown;
