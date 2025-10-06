import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/notes";

export const getNotes = () => axios.get(API_URL);
export const createNote = (data) => axios.post(API_URL, data);
export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);
