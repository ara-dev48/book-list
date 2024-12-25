export interface IBook{
    id:string
    title: string
    pages: number
    price: number
    author:string
}
export interface InputBook{
    title: string
    pages: number
    imgURL: string
}
export interface IAuthor{
    id:string
    name:string
    surname:string
}
export type InputAuthor = Omit<IAuthor, 'id'>