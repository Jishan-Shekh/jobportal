const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD
    ? "https://jobportal-luit.onrender.com/api/v1"
    : "http://localhost:8000/api/v1")
).replace(/\/+$/, "");

export const USER_API_END_POINT = `${API_BASE_URL}/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/company`;