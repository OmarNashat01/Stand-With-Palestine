import React from "react";
import "./IntentCard.scss";
import { FaQuoteRight } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";


interface IntentCardProps {
    quote: string;
    note: string;
    author: string;
    role: string;
    date: string;
    link: string;
    img?: string;
  }
  
export  const IntentCard: React.FC<IntentCardProps> = ({
    quote,
    note,
    author,
    role,
    date,
    link,
    img = "",
  }) => {
    function formatQuote(quote: string) {
      // Use regular expression to find text within square brackets
      const regex = /\[(.*?)\]/g;
  
      // Replace the matched text with HTML structure
      const formattedText = quote.replace(
        regex,
        '<span style="color: #ed2f2f">$1</span>'
      );
      return formattedText;
    }
  
    function formatDateString(inputDate: string) {
      const parts = inputDate.split("/");
  
      // Create a new Date object using the parsed parts
      const dateObject = new Date(
        parseInt(parts[2]),
        parseInt(parts[1]) - 1,
        parseInt(parts[0])
      );
  
      // Format the date to "DD Mon. YYYY"
      const formattedDate = `${dateObject.getDate()} ${getMonthAbbreviation(
        dateObject.getMonth()
      )}. ${dateObject.getFullYear()}`;
  
      return formattedDate;
    }
  
    function getMonthAbbreviation(monthIndex: number) {
      const monthsAbbreviations = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return monthsAbbreviations[monthIndex];
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="testimonial">
          <div className="testimonial-body">
            <p dangerouslySetInnerHTML={{ __html: formatQuote(quote) }} />
            {note!==undefined && <p className="note" >{note}</p>}
            <FaQuoteRight className="fas fa-quote-right" />
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="testimonial-footer">
              <div className="main-footer-wrapper">
                {img !== "" && (
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="user"
                  />
                )}
                <div className="bottom-group">
                  <h3>{author}</h3>
                  <h4>{role}</h4>
                </div>
              </div>
              <h5 className="bottom-group"> {formatDateString(date)} </h5>
              <TbExternalLink className="link" />
            </div>
          </a>
        </div>
      </div>
    );
  };
  
  