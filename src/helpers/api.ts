import axios from "axios";
import { IAuthor, IBook, InputAuthor } from "./types";

const Axios = axios.create({
    baseURL:'http://localhost:4000'
})
export const getAllBooks = async():Promise<IBook[]> => {
    const response = await Axios.get('/books')
    return response.data
}
export const getBookById = async(id:string):Promise<IBook> => {
    const response = await Axios.get('/books/' + id)
    return response.data
}
export const deleteBookById = async(id:string):Promise<IBook> => {
    const response = await Axios.delete('/books/' + id)
    return response.data
}
export const addNewBook = async(data:IBook):Promise<IBook> => {
    const response = await Axios.post('/books/', data)
    return response.data
}
export const addNewAuthor = async(data:InputAuthor):Promise<IAuthor> => {
    const response = await Axios.post('/authors/', data)
    return response.data
}
export const getAllAuthors = async():Promise<IAuthor[]> => {
    const response = await Axios.get('/authors/')
    return response.data
}