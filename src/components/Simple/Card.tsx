import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

interface CardProps {
    imagePath: string;
    title: string;
    summary: string;
    link: string;
}

const Card: FC<CardProps> = ({ imagePath, title, summary, link }) => {
    return (
        <Link to={link}>
            <div className="card-og">
                <div className="card-img">
                    <img src={imagePath} alt={title} />
                </div>
                <div className="card-content">
                    <div className="card-body">
                        <p className="title">{title}</p>
                        <p className="summary">{summary}...</p>
                    </div>
                    <div className="card-footer">
                        <Link to={link}>Learn more &gt;</Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
