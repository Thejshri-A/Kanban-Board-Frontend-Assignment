import React from "react";
import "./TicketCard.css";

const TicketCard = ({ ticket, getUserName }) => {
  const priorityMap = ["No Priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>{ticket.tag.join(", ")}</p>
      <div className="ticket-footer">
        <span className={`priority-${ticket.priority}`}>
          {priorityMap[ticket.priority]}
        </span>
        <span>{getUserName(ticket.userId)}</span>
      </div>
    </div>
  );
};

export default TicketCard;
