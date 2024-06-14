import React from "react";
import { blogs, Blog } from "@/PagesData/BlogsPageData";
import Markdown from "@/components/Simple/Markdown";
import GradientHero from "@/components/Simple/GradientHero";
import { notFound } from "next/navigation";
import { getBlog } from "@/app/blogs/utils";
import { Metadata, ResolvingMetadata } from "next";


export async function generateStaticParams() {
    const getBlogId = (blog: Blog) => blog.blogPath.split("/BlogsPage/")[1].replace(/\.(md|json)/, "");
    const paths = blogs.filter((blog) => blog.type === "article").map((blog) => ({
        articleId: getBlogId(blog),
    }));
    return paths;
}


interface articleProps {
    params: {
        articleId: string;
    }
}


export async function generateMetadata(
    { params }: articleProps,
    parent: ResolvingMetadata
): Promise<Metadata> {

    let blogData = getBlog(`/BlogsPage/${params.articleId}`);
    if (!blogData) {
        return notFound();
    }
    const { blog, content } = blogData;
    return {
        title: blog.name,
        openGraph: {
            type: 'article',
        },
    }
}



const BlogPage: React.FC<articleProps> = async ({ params }: articleProps) => {

    let blogData = getBlog(`/BlogsPage/${params.articleId}`);
    if (!blogData) {
        notFound();
    }
    const { blog: article, content } = blogData;

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
                title={article.name}
                subTitle1={article.subTitle}
                subTitle2={""}
                bloody={false}
                circular={true}
                fontSize={"2.7rem"}
                blog={true}
            />
            <Markdown className="markdown-container" markdownText={content as string} />
        </div>
    );
};

export default BlogPage;
