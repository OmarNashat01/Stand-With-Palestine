import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../../PagesData/BlogsPageData";
import GradientHero from "../../components/Simple/GradientHero";
import { Interview } from "../../types/Interview";
import InterviewSection from "../../components/InterviewSection/InterviewSection";
import Markdown from "../../components/Simple/Markdown";

const InterviewPage: React.FC = () => {
    const [interview, setInterview] = useState<Interview | null>(null);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const selectedInterview = blogs.find(
            (interview) => interview.blogPath === `/BlogsPage/${id}.json`
        );

        if (selectedInterview !== undefined) {
            setTitle(selectedInterview.name);
            setSubTitle(selectedInterview.subTitle);
            fetch(selectedInterview.blogPath)
                .then((res) => res.json())
                .then((text) => setInterview(text as Interview));
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
            className="interview-page"
        >
            <GradientHero
                title={title}
                subTitle1={subTitle}
                subTitle2={""}
                bloody={false}
                circular={true}
                fontSize={"2.7rem"}
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
