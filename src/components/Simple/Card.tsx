import React, { FC } from "react";
import Link from "next/link";
import "./Card.scss";

interface CardProps {
    imagePath: string;
    title: string;
    summary: string;
    type: string;
    link: string;
}

const Card: FC<CardProps> = ({ imagePath, title, summary, type, link }) => {
    return (
        <div className="card-og">
            <Link href={link}>
                <div className="card-img">
                    <img src={imagePath} alt={title} />
                </div>
            </Link>
            <div className="card-content">
                <Link href={link}>
                    <div className="card-body">
                        <p className="title">{title}</p>
                        <p className="summary">{summary}...</p>
                    </div>
                </Link>
                <div className="card-footer">
                    <Link href={link}>
                        Learn more &gt;
                        <p className="type">{type}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
