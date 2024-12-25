// import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { IBook } from "../helpers/types";
// import { addNewBook } from "../helpers/api";

// export const AddBook = () => {
//   const { register, handleSubmit, formState: {errors}} = useForm()
//   const navigate = useNavigate()
//   const handleAdd: SubmitHandler<IBook> = data => {
//     addNewBook(data)
//       .then(() => navigate('/'))
//   }
//   return <>
//     <form onSubmit={handleSubmit(handleAdd)} className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto mt-20">
//       <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add Book</h2>
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           placeholder="Enter Title"
//           {...register('title', { required: 'Please Fill the Title' })}
//         />
//         {errors.title && <p className="text-red-400">{errors.title.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="pages" className="block text-gray-700 font-medium mb-2">
//           Pages
//         </label>
//         <input
//           type="text"
//           id="pages"
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           placeholder="Pages"
//           {...register('pages', { required: 'Please Fill the Pages Count' })}
//           />
//           {errors.pages && <p className="text-red-400">{errors.pages.message}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="pages" className="block text-gray-700 font-medium mb-2">
//           Image URL
//         </label>
//         <input
//           type="text"
//           id="imgURL"
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//           placeholder="Image URL"
//           {...register('imgURL', { required: 'Please Fill the URL Of the Image' })}
//           />
//           {errors.imgURL && <p className="text-red-400">{errors.imgURL.message}</p>}
//       </div>
//       <div className="mt-6">
//         <button
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
//         >
//           Add Author
//         </button>
//       </div>
//     </form>
//   </>
// }













import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAuthor, IBook } from "../helpers/types";
import { addNewBook, getAllAuthors, getAllBooks } from "../helpers/api";
import { useEffect, useState } from "react";

export const AddBook = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();
  const handleAdd: SubmitHandler<IBook> = async (data) => {
      const existingBooks = await getAllBooks();
      const duplicateBook = existingBooks.find(book => book.title === data.title);
      if (duplicateBook) {
        setError("title", { type: "manual", message: "A book with this title already exists" });
        return;
      }
      await addNewBook(data);
      navigate('/');
    } 
  const [authors, setAuthors] = useState<IAuthor[]>([])
  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await getAllAuthors()
      setAuthors(response);
    }
    fetchAuthors();
  }, []);
  return (
    <form onSubmit={handleSubmit(handleAdd)} className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add Book</h2>
      
      {/* Title Input */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter Title"
          {...register('title', { required: 'Please Fill the Title' })}
        />
        {errors.title && <p className="text-red-400">{errors.title.message}</p>}
      </div>
      
      {/* Pages Input */}
      <div className="mb-4">
        <label htmlFor="pages" className="block text-gray-700 font-medium mb-2">
          Pages
        </label>
        <input
          type="text"
          id="pages"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Pages"
          {...register('pages', { required: 'Please Fill the Pages Count' })}
        />
        {errors.pages && <p className="text-red-400">{errors.pages.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="imgURL" className="block text-gray-700 font-medium mb-2">
          Image URL
        </label>
        <input
          type="text"
          id="imgURL"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Image URL"
          {...register('imgURL', { required: 'Please Fill the URL Of the Image' })}
        />
        {errors.imgURL && <p className="text-red-400">{errors.imgURL.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
          Select Author
        </label>
        <select
          id="author"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          {...register('author', { required: 'Please Select an Author' })}
        >
          <option value="">-- Select an Author --</option>
          {authors.map(author => (
            <option key={author.id} value={`${author.name} ${author.surname}`}>
              {author.name} {author.surname}
            </option>
          ))}
        </select>
        {errors.author && <p className="text-red-400">{errors.author.message}</p>}
      </div>
      
      <div className="mt-6">
        <button
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};