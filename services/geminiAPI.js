// geminiAPI.js
import axios from 'axios';

// Create an Axios instance for Gemini API (finance management AI)
const geminiAPI = axios.create({
  baseURL: 'https://gemini-api-endpoint.com/',  // Replace with the actual Gemini API URL.
  headers: {
    'Authorization': `Bearer AIzaSyBpTB-_QnfeVJfXUWh9YwHTAAUKvhOG-vg`, // Your AI API key
    'Content-Type': 'application/json',
  },
});

// Example of a function that sends salary, goal data, and other parameters to Gemini
export const getFinancialInsights = async (goalAmount, salary, goalDuration) => {
  try {
    const response = await geminiAPI.post('/finance-management', {
      goalAmount,
      salary,
      duration: goalDuration,
    });
    return response.data;  // Assuming Gemini API returns relevant financial insights or feasibility
  } catch (error) {
    console.error('Error fetching financial insights:', error);
    return null;
  }
};
