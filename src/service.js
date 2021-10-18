import axios from "axios";

export const getAllQuestions = () => axios.get(`https://opentdb.com/api.php?amount=10&category=9&type=multiple`)

export const getAllUsers = () => axios.get('http://localhost:3005/users')

export const postUser = (username,email,password) => axios.post('http://localhost:3005/users', {username, email,password})
