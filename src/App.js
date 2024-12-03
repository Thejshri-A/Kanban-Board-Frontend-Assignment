import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard";


const App = () => {
  const [data, setData] = useState({ tickets: [], users: [] });
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  // Fetch data from the mock API
  useEffect(() => {
    fetch("/mock-api/tickets.json") // Replace this with your actual API endpoint
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="dropdown">
          <label>Grouping</label>
          <select
            value={grouping}
            onChange={(e) => setGrouping(e.target.value)}
          >
            <option value="status">Status</option>
            <option value="userId">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown">
          <label>Ordering</label>
          <select
            value={ordering}
            onChange={(e) => setOrdering(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </header>
      <KanbanBoard
        tickets={data.tickets}
        users={data.users}
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
};

export default App;
