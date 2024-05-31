"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { blogs } from "@/PagesData/BlogsPageData";
import GradientHero from "@/components/Simple/GradientHero";
import { Interview } from "@/types/Interview";
import InterviewSection from "@/components/InterviewSection/InterviewSection";
import Markdown from "@/components/Simple/Markdown";
//@ts-ignore
import yaml from "js-yaml";

const InterviewPage: React.FC = (
    { params }: { params?: { interviewId: string } }
) => {
    const [interview, setInterview] = useState<Interview | null>(null);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");

    const id = params?.interviewId;

    useEffect(() => {
        if (!id) return;

        const selectedInterview = blogs.find(
            (interview) => interview.blogPath === `/BlogsPage/${id}.json`
        );

        if (selectedInterview !== undefined) {
            setTitle(selectedInterview.name);
            setSubTitle(selectedInterview.subTitle);
            fetch(selectedInterview.blogPath)
                .then((res) => res.text())
                .then((yamlText) => {
                    const interviewData = yaml.load(yamlText) as Interview;
                    setInterview(interviewData);
                })
                .catch((error) => {
                    console.error("Error loading YAML:", error);
                    //redirect("/404");
                });
        } else {
            redirect("/404");
        }
    }, [id]);

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
                title={title}
                subTitle1={subTitle}
                subTitle2={""}
                bloody={false}
                circular={true}
                fontSize={"2.7rem"}
                blog={true}
            />
            <Markdown
                className="markdown-container"
                markdownText={interview?.summary || ""}
            />
            <div>
                {interview?.sections.map((section, sectionIndex) => (
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
