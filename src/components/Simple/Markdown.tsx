import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
    className?: string;
    style?: React.CSSProperties;
    markdownText: string;
}

const Markdown: FC<MarkdownProps> = ({ className, style, markdownText }) => {
    return (
        <div className={className} style={style}>
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
