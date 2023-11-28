import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./OrgCard.scss";

interface OrgCardProps {
    title: string;
    description?: string;
    selected?: boolean;
    onClick?: () => void;
}

const OrgCard: FC<OrgCardProps> = ({ title, description, selected, onClick }) => {
    return (
        <div className="card-og" onClick={onClick}>

            {/* add class selected if selected */}
            <div className={`card-content` + (selected ? " selected" : "")}>
                <div className="card-body">
                    <p className="title" >{title}</p>
                </div>
            </div>
        </div>
    );
};

export default OrgCard;
