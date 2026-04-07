import React, { createContext, useContext, useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [updates, setUpdates] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchLatestAIUpdates = async (prompt) => {
    setLoading(true);

    try {
      const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY
      });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Give latest AI updates: ${prompt}`,
      });

      setUpdates(response.text);
    } catch (error) {
      console.error('Gemini request failed:', error);
      const message =
        error?.message ||
        error?.statusText ||
        'Error fetching data. Check your Gemini API key and model access.';
      setUpdates(`Error fetching data: ${message}`);
    }

    setLoading(false);
  };

  return (
    <ChatContext.Provider value={{ updates, loading, fetchLatestAIUpdates }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  return useContext(ChatContext);
};
