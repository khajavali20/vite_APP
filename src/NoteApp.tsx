import NoteItem from "./components/NoteItem";
import {useState, ChangeEventHandler } from "react";
import axios from "axios";

const NoteApp = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
      const [values, setValues] = useState({
        name: "",
        description: ""
       })
       const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({target}) => {
         const { name, value } = target;
         setValues({...values, [name]: value})
       }

  return(
    <div className="max-w-3xl  mx-auto space-y-6">
    <form  onSubmit = { async (evt) => {
      evt.preventDefault();
     const res  = await axios.post('http://localhost:3000/products/create',{
        name: values.name,
        description: values.description
      })

      console.log(res);
    }} className=" space-y-6  bg-lime-400 shadow-md rounded p-5">
      <h1 className="font-semibold text-2xl text-blue-500  text-center">Note Application</h1>
      <div>
        
      <input onChange= { handleChange }  
         value = {values.name}
         name="name"
      className="w-full border-b-2 border-orange-500 outline-none " placeholder="Title" type="text" />
      </div>
      <div>
      <textarea 
      onChange= { handleChange}
      value= {values.description}
      name="description"
      className="w-full border-b-2 border-orange-500 outline-none resize-none h-36" placeholder=" Description"></textarea>
      </div>
      <div className="text-center">
        <button 
        className="bg-blue-500 text-white t px-5 py-2">Submit</button>
      </div>
    </form>

    <NoteItem title="My First re-usable Component" />
    <NoteItem title="My second re-usable Component" />
    </div>
  );
};

export default NoteApp;