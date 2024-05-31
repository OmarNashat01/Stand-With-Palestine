import React, { FC } from "react";
import "./InterviewSection.scss";
import Markdown from "../Simple/Markdown";

interface InterviewSectionProps {
    section: {
        summary: string;
        conversation: {
            interviewer?: string;
            interviewee?: string;
            text: string;
        }[];
    };
}

const InterviewSection: FC<InterviewSectionProps> = ({ section }) => {
    return (
        <div className="interview-section">
            <div className="section-header">
                <Markdown
                    className="markdown-container"
                    style={{ padding: 0, textAlign: 'center' }}
                    markdownText={section.summary}
                />
            </div>
            <div className="section-conversation">
                {section.conversation.map((message, messageIndex) => (
                    <div
                        className={`message ${message.interviewer ? "right" : "left"
                            }`}
                        key={`section-${Math.floor(
                            Math.random() * 100000
                        ).toString()}-message-${messageIndex}`}
                    >
                        <Markdown
                            className="message-markdown-container"
                            markdownText={message.text}
                        />
                        <p className="speaker">
                            {message.interviewee || message.interviewer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InterviewSection;
