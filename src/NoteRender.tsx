import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import NoteItem from "./components/NoteItem";

const NoteRender = () => {
    const [count, setCount] = useState(0);
    const [note, setNote] = useState<{
        title: string;
        description: string; 
}[]>([

    ])

    const [values, setValues]= useState({
        title: "",
        description: ""
    });

    const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({target}) => {
        const { name, value} = target;
        setValues({...values, [name]: value });
    };

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(values);
        setNote([values, ...note])
        setValues({title: "", description: ""})
    };

    useEffect(() => {
        console.log("Hi")
    }, [count])
    return (
       <div className="bg-slate-800 max-w-3xl text-white mx-auto">
        <form onSubmit={handleSubmit}>
            <div>
                <span>{count} </span>
                <button onClick={() => 
                    setCount(count + 1) 
                }
                type="button">Click Me</button>
            </div>
        <div>
        <h1 className="text-green-500 text-center text-xl mt-8 pt-4 ">Note Application</h1>
        </div>
        <div className="p-10">
            <label>Complaint Name: </label>
            <input 
             name="title"
            value={values.title}
            onChange={handleInputChange} 
            className="border-4  outline-none w-60 h-10 ml-5 hover:border-red-400 rounded text-black" type="text" placeholder="Enter Complaint name"></input>
        </div>
        <div className="px-10">
            <label>Message: </label>
            <textarea 
            name="description"
            value={values.description}
            onChange={handleInputChange}
            className="h-15 w-full mt-2 outline-none border-4  rounded hover:border-red-400 text-black" placeholder="Enter your message" ></textarea>
        </div>
        <div className="text-center p-5">
            <button className="bg-blue-500 px-10 py-2 rounded border-2 hover:border-rose-500 hover:bg-stone-700" type="submit">Submit</button>
        </div>
        </form>

        {note.map((notes) => {
            return( <NoteItem 
                onEditClick={ () => {
                    setValues({ 
                    title: notes.title, 
                    description: notes.description || '' })
                }}
                key={notes.title} title={notes.title} />)
        })}
       </div>
    );
}

export default NoteRender;