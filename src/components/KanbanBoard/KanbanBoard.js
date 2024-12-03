import React from "react";
import TicketCard from "./TicketCard";
import "./KanbanBoard.css";

const KanbanBoard = ({ tickets, users, grouping, ordering }) => {
  // Group tickets dynamically
  const groupTickets = (tickets, key) => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const groupKey = ticket[key];
      if (!grouped[groupKey]) grouped[groupKey] = [];
      grouped[groupKey].push(ticket);
    });
    return grouped;
  };

  const groupedTickets = groupTickets(tickets, grouping);

  // Sort tickets within groups
  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (ordering === "priority") return b.priority - a.priority;
      if (ordering === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  };

  // Find user name from userId
  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : "Unknown User";
  };

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([group, items]) => (
        <div key={group} className="kanban-column">
          <h3>{group}</h3>
          {sortTickets(items).map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              getUserName={getUserName}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
