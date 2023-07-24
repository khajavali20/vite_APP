import axios from "axios";
import { ChangeEventHandler, useState } from "react";

const Upload = () => {
    const [file, setFile] = useState({
        profilePic: null,
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({target}) => {
      const { name, value } = target;
      setFile({...file, [name]: value[0] });
    };

    const handleSubmit: ChangeEventHandler<HTMLFormElement> = async (evt) => {
    evt.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePic", evt.target.value);

      const res = await axios.post('http://localhost:3000/products/upload', formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
    return (
<div className="max-w-3xl mx-auto"> 
    <form 
        onSubmit={ handleSubmit }
    className="
     bg-[#443bcaee] shadow-md rounded p-5 space-y-6">
        <h1 className="font-bold text-2xl text-white text-center "> Upload Component</h1>
        
        <div className="text-center">
        <label className="font-semibold text-white text-xl ">Upload Image </label>
        </div>
        <div className="h-36 flex items-center justify-center">
            {file.profilePic && (
        <img className="h-28 w-28  object-cover rounded-full bg-white" src={ URL.createObjectURL(file.profilePic) }  alt="photo" />
           )}
        </div>
        <div className="text-center">
        <input 
        onChange = { handleChange}
        name="profilePic"
         className="file:rounded-full file:px-10 file:py-3 file:border-2 file:bg-[#3df8e8ee] pl-32 hover:file:bg-amber-500 " type="file" />
        </div>
        <div className="text-center"> 
        <button className=" text-white px-5 py-2 bg-rose-600 rounded-md hover:bg-black">Submit</button>
        </div>
    </form>
</div>
    );
};

export default Upload;