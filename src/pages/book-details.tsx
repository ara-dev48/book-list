// import { useParams } from "react-router-dom"
// import { IBook } from "../helpers/types";
// import { getBookById } from "../helpers/api";
// import { useEffect, useState } from "react";

// export const BookDetails = () => {
//     const {id} = useParams()
//     const [book, setBook] = useState<IBook | null>(null);

//     useEffect(() => {
//       const fetchBook = async () => {
//         const response = await getBookById(id)
//         setBook(response);
//       }
//       fetchBook();
//     }, [id]);
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//           {book ? (
//             <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
//               <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Book Details</h2>
//               <div className="space-y-4">
//                 <div>
//                   <span className="text-gray-500 font-medium">Title: {book.title}</span>
//                 </div>
//                 <div>
//                   <span className="text-gray-500 font-medium">Pages: {book.pages}</span>
//                 </div>
//                 <div>
//                   <span className="text-gray-500 font-medium">Author: {book.author}</span>
//                 </div>
//               </div>
//               <div className="mt-6">
//               </div>
//             </div>
//           ) : (
//             <div className="text-center"></div>
//           )}
//         </div>
//       );
// }




import { useNavigate, useParams } from "react-router-dom";
import { IBook } from "../helpers/types";
import { getBookById } from "../helpers/api";
import { useEffect, useState } from "react";

export const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<IBook | null>(null);
  const navigate  = useNavigate()
  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBookById(id);
      setBook(response);
    };
    fetchBook();
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {book ? (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl border-t-4 border-blue-600">
          <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-8">
            Book Details
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-500 font-medium uppercase text-sm tracking-wide">
                Title
              </h3>
              <p className="text-xl font-semibold text-gray-900">{book.title}</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium uppercase text-sm tracking-wide">
                Pages
              </h3>
              <p className="text-xl font-semibold text-gray-900">{book.pages}</p>
            </div>
            <div>
              <h3 className="text-gray-500 font-medium uppercase text-sm tracking-wide">
                Author
              </h3>
              <p className="text-xl font-semibold text-gray-900">{book.author}</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            onClick={() => navigate('/')}>
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading book details...</div>
      )}
    </div>
  );
};
