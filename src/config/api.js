const API_CONFIG = {
  baseURL: import.meta.env.PROD
    ? "https://back-end-tuna.onrender.com"
    : "http://localhost:8000",
};

export default API_CONFIG;
