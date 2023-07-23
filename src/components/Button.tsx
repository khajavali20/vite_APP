import { FC } from "react";

interface Props {
    title?: string;
    type?: "danger" | "normal" | "regular";
    onClick?():  void;
}
const Button: FC<Props> = ({title, type, onClick}) => {
    let color = "";

    switch( type ) {
        case 'danger': color = "bg-red-500"
        break;
        case 'normal': color = "bg-gray-700"
        break;
        case 'regular': color = "bg-rose-500"
        break;
    }
    return (
        <button onClick= {onClick } className={ color + " text-white py-2 px-6 rounded-xl"}>{ title }</button> 
    );
};
export default Button;