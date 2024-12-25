import { useEffect, useState } from "react"
import { IBook } from "../helpers/types"
import { deleteBookById, getAllBooks } from "../helpers/api"
import { Link } from "react-router-dom"
import { Delete } from './delete'
export const BookList = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const [open, setOpen] = useState(false)
    const [bookToDelete, setBookToDelete] = useState<IBook | null>(null)
    // const fetchBooks = async () => {
    //     const response = await getAllBooks();
    //     setBooks(response);
    // };
    // useEffect(() => {
    //     fetchBooks();
    // }, []);
    useEffect(() => {
        getAllBooks()
            .then(response => setBooks(response))
    }, [])
    const handleDelete = (id: string) => {
        deleteBookById(id)
            .then(() => setBooks(books.filter(book => book.id != id)))
        setOpen(false);
        setBookToDelete(null);
    };
    return <>
        {open && <Delete onClose={() => setOpen(false)} onConfirm={() => handleDelete(bookToDelete)} />}
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Book List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
                    >
                        <div className="mb-4 flex justify-center items-center w-20 h-20 bg-transparent text-white font-extrabold text-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-20 h-20 text-blue-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 3.75H6.75c-.966 0-1.75.784-1.75 1.75v13c0 .966.784 1.75 1.75 1.75h9.75m0-16.5v16.5m0-16.5H19c.966 0 1.75.784 1.75 1.75v13c0 .966-.784 1.75-1.75 1.75h-2.5m0-16.5v16.5"
                                />
                            </svg>

                        </div>
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
                            <p className="text-gray-700">Pages: {book.pages}</p>
                            <p className="text-gray-700">By {book.author}</p>
                        </div>

                        <div className="flex space-x-4 mb-4">
                            <Link
                                to={'/book/details/' + book.id}
                                className="text-blue-500 hover:underline font-medium"
                            >
                                Details
                            </Link>
                        </div>
                        <button
                            className="rounded-lg py-2 px-4 bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors duration-200"
                            onClick={() => {
                                setBookToDelete(book.id)
                                setOpen(true)
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </>
}