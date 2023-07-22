const First = () => {
    return (
        <div className ="w-[350px] h-96 mx-auto my-[10%] bg-green-300 rounded shadow-xl pt-4">
            <h1 className="font-semibold text-2xl text-blue-500 text-center"> Note Application</h1>
            <form className="mx-10 py-5 my-4">
            <div className="">
                <label className="font-lora text-xl text-blue-600 mb-2 block pl-3">Username</label>
                <input className="border rounded-2xl w-full py-2 px-3 shadow focus:outline-none focus:shadow-outline leading-tight" placeholder="Phone" type ="tel"></input>
            </div>
            <div className="pt-4">
                <label className="font-lora text-xl text-blue-600 block mb-2 pl-3">Password</label>
                <input className="border rounded-2xl w-full py-2 px-3 shadow focus:outline-none focus:shadow-outline leading-tight" placeholder="*******" type="password" ></input>
            </div>
            <div className="pt-4">
                <button className="bg-amber-500 border  focus:shadow-outline-none focus:shadow-outline hover:bg-sky-700 text-white rounded-2xl px-5 py-2 text-md font-bold w-full mt-3" type="button">Submit</button>
            </div>
            <div className="text-center pt-2">
            <a className="text-center text-blue-500 text-sm hover:text-blue-800 " href="#">Forgot Password?</a>
            <p className="text-center text-gray-500 text-sm">
            &copy;2020 Optic Third Eye. All rights reserved.</p>
            </div>
            </form>
        </div>
    )
}
export default First;