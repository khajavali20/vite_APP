import {FC,  } from "react";
import Button from "./Button";

interface Props{
    title: string;
    onEditClick(): void;
}

const NoteItem: FC<Props> = ({ title, onEditClick }) => {
    return ( 
<div className="bg-blue-400 shadow-md rounded p-5">
    <p className="font-semibold text-gray-700 text-lg mb-4"> {title }</p>
  <div className="space-x-4 text-center">
    <Button title="View" type= "regular" onClick={ () => {
        console.log("khajavali clicked");
    }}/>
    <Button onClick={onEditClick} title="Edit" type= "normal" />
    <Button title="Delete" type= "danger" />
  </div>
</div>
    );
};
export default NoteItem; 