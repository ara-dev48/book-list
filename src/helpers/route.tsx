import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { BookList } from "../pages/book-list";
import { AddBook } from "../pages/add-book";
import { BookDetails } from "../pages/book-details";
import { AddAuthor } from "../pages/add-author";

export const paths = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {path: '' ,element: <BookList />},
            {path: 'book/details/:id', element: <BookDetails />},
            {path: 'add-author', element: <AddAuthor />},
            {path: 'add-book', element: <AddBook />},
        ]
    }
])