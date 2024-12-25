// import { NavLink } from "react-router-dom"

// export const Layout = () => {
//     return (
//         <div className="min-h-screen flex flex-col">
//             {/* Navbar */}
//             <nav className="bg-gray-800 text-white shadow-lg">
//                 <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//                     <div className="text-xl font-bold">Users</div>
//                     <div className="space-x-4">
//                         <NavLink
//                             to="/"
//                             className="text-gray-300 hover:text-white transition-colors">
//                             BookList
//                         </NavLink>
//                         <NavLink
//                             end
//                             to="/add"
//                             className="text-gray-300 hover:text-white transition-colors">
//                             Add Book
//                         </NavLink>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }






import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-blue-800 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Branding */}
          <div className="text-2xl font-semibold tracking-wide">
            <span className="text-yellow-400">Book</span>List
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
            >
              BookList
            </NavLink>
            <NavLink
              end
              to="/add-book"
              className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
            >
              Add Book
            </NavLink>
            <NavLink
              end
              to="/add-author"
              className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
            >
              Add Author
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="p2">
        <Outlet/>
      </div>
    </div>
  );
};