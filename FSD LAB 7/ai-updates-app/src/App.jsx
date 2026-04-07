import React, { useState } from 'react';
import { useChat } from './context/ChatContext';

export default function App() {
  const [query, setQuery] = useState("");
  const { updates, fetchLatestAIUpdates } = useChat();

  const handleSearch = (e) => {
    e.preventDefault();
    fetchLatestAIUpdates(query);
  };

  return (
    <div>
      <h1>AI Tools Tracker</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter your query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <p>{updates}</p>
    </div>
  );
}
