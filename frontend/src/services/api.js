import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-student-backend-tsm5.onrender.com/api",
});

export default api;