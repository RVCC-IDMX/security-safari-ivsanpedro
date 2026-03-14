// Configuration for the poll application
// VULNERABILITY: Hardcoded API key
export default {
  apiKey: import.meta.env.VITE_API_KEY,
  endpoint: import.meta.env.VITE_API_ENDPOINT
};