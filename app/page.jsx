"use client"
import Todo from "@/components/Todo";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Home() {
const [formData,setFormData] = useState({
  title:"",
  description:"",
});

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form,[name]:value}));
    console.log(formData)
     
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //api code
      const response = await axios.post('/api',formData)
      toast.success(response.data.msg)
    } catch (error) {
      toast.error("Error")
    }
  }


  return (
    <>
      <ToastContainer theme="dark"/>
      <form onSubmit={onSubmitHandler} action="" className="flex flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input 
          value={formData.title}
          onChange={onChangeHandler}
          type="text" 
          name="title" 
          placeholder="Enter title" 
          className="px-3 py-2 border-2 border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" 
        />
        <textarea 
          value={formData.description}
          onChange={onChangeHandler}
          name="description" 
          placeholder="Enter description" 
          className="px-3 py-2 border-2 border-gray-300 rounded w-full focus:outline-none focus:border-blue-500" 
        ></textarea>
        <button 
          type="submit" 
          className="bg-orange-600 py-3 px-11 text-white rounded hover:bg-orange-700"
        >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-12 w-[60%] mx-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}