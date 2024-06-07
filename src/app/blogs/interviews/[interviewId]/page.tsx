import React from "react";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next'
import { blogs, Blog } from "@/PagesData/BlogsPageData";
import GradientHero from "@/components/Simple/GradientHero";
import { Interview } from "@/types/Interview";
import InterviewSection from "@/components/InterviewSection/InterviewSection";
import Markdown from "@/components/Simple/Markdown";
import { getBlog } from "@/app/blogs/utils";



export async function generateStaticParams() {
    const getBlogId = (blog: Blog) => blog.blogPath.split("/BlogsPage/")[1].replace(/\.(md|json)/, "");
    const paths = blogs.filter((blog) => blog.type === "interview" && blog.showBlog).map((blog) => ({
        interviewId: getBlogId(blog),
    }));

    return paths;
}



interface interviewProps {
    params: {
        interviewId: string;
    }
}

export async function generateMetadata(
    { params }: interviewProps,
    parent: ResolvingMetadata
): Promise<Metadata> {

    let blogData = getBlog(`/BlogsPage/${params.interviewId}`);
    if (!blogData) {
        return notFound();
    }
    const { blog, content } = blogData;
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    const interview = content as Interview;
    const ytVideoIdRE = /\/embed\/([a-zA-Z0-9_-]+)\?/;
    const ytVideoId = interview.summary.match(ytVideoIdRE)?.[1];
    const videoImage = ytVideoId ? `https://img.youtube.com/vi/${ytVideoId}/0.jpg` : null;
    const images = videoImage ? [videoImage, ...previousImages] : previousImages;
    return {
        title: blog.name,
        openGraph: {
            type: 'article',
            images: images,
        },
    }
}



const InterviewPage: React.FC<interviewProps> = ({ params }: interviewProps) => {
    let blogData = getBlog(`/BlogsPage/${params.interviewId}`);
    if (!blogData) {
        notFound();
    }
    const { blog: interview, content } = blogData;
    const interviewData = content as Interview;

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
            className="interview-page"
        >
            <GradientHero
                title={interview.name}
                subTitle1={interview.subTitle}
                subTitle2={""}
                bloody={false}
                circular={true}
                fontSize={"2.7rem"}
                blog={true}
            />
            <Markdown
                className="markdown-container"
                markdownText={interviewData?.summary || ""}
            />
            <div>
                {interviewData?.sections.map((section, sectionIndex) => (
                    <InterviewSection
                        section={section}
                        key={`interview-section-${sectionIndex}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default InterviewPage;
