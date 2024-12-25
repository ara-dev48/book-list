import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IAuthor } from "../helpers/types";
import { addNewAuthor } from "../helpers/api";

export const AddAuthor = () => {
  const { register, handleSubmit, formState: {errors}} = useForm()
  const navigate = useNavigate()
  const handleAdd: SubmitHandler<IAuthor> = data => {
    addNewAuthor(data)
      .then(() => navigate('/'))
  }
  return <>
    <form onSubmit={handleSubmit(handleAdd)} className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add Author</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          First Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter first name"
          {...register('name', { required: 'Please Fill the Name' })}
        />
        {errors.name && <p className="text-red-400">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="surname"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Enter last name"
          {...register('surname', { required: 'Please Fill the Surname' })}
          />
          {errors.surname && <p className="text-red-400">{errors.surname.message}</p>}
      </div>
      <div className="mt-6">
        <button
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
        >
          Add Author
        </button>
      </div>
    </form>
  </>
}