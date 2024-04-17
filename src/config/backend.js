import axios from "axios";

export const API = axios.create({
  baseURL:"https://api-frases-motivacionais-server-1-0-0.onrender.com/api/frases"
})