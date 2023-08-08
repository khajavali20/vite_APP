import { useForm } from "react-hook-form"
import { DevTool} from "@hookform/devtools";

let renderCount = 0;
type formValues = {
  username: string;
  email: string;
  channel: string;
};
export default function YouTubeForm() {
  const image = {
    backgroundImage: `url('/src/assets/bgImage.png')`,
 };
 
  const form = useForm<formValues>();
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;
  const onSubmit = (data: formValues) => {
    console.log("Form submitted",data);
  }

  renderCount++;
  return (
    <div className="min-h-screen flex items-center justify-center  rounded-lg" style={image}>
      <div className="max-w-3xl mx-auto p-10 border-4 border-solid rounded-lg border-green-400  space-y-6 bg-[#3de2b1ee]">
        <h1 className="text-rose-500 text-center text-xl">YouTubeForm ({renderCount/2})</h1>
      <div className=" p-5 bg-blue-500 ">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[20]">
        <label htmlFor='username' className="text-amber-400 font:bold">Username</label>
        <input type="text"  {...register("username", { required: "Username is required "})} id='username' className="border-2 rounded border-orange-600 outline-none w-full"/>
        <p className="text-red-700 text-sm text-left">{errors.username?.message}</p>
        </div>
        <div className="mb-[20]"> 
        <label htmlFor='email' className="text-amber-400 font:bold">E-mail</label>
        <input type="email"  {...register("email", { pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email format"
        }})} id="email" className="border-2 rounded border-orange-600 outline-none w-full"/>
        <p className="text-red-700 text-sm text-left">{errors.email?.message}</p>
        
        </div>
        <div className="mb-[20]" >
        <label htmlFor='channel' className="text-amber-400 font:bold">Channel</label>
        <input type="text" {...register("channel",{required: {
          value: true,
          message: "Channel name is required"
        }})} id="channel" className="border-2 rounded border-orange-600 outline-none w-full" />
        <p className="text-red-700 text-sm text-left">{errors.channel?.message}</p>
        </div>
       <div className="text-center p-5 "> 
        <button className="bg-lime-400 px-10 py-2 rounded">Submit</button>
        </div>
      </form>
      <DevTool control={control} />
      </div>
      </div>
    </div>
  )
}
