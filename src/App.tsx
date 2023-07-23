import NoteItem from "./components/NoteItem";

const App = () => {
  return(
    <div className="max-w-3xl  mx-auto space-y-6">
    <div className=" space-y-6  bg-lime-400 shadow-md rounded p-5">
      <h1 className="font-semibold text-2xl text-blue-500  text-center">Note Application</h1>
      <div>
      <input className="w-full border-b-2 border-orange-500 outline-none " placeholder="Title" type="text" />
      </div>
      <div>
      <textarea className="w-full border-b-2 border-orange-500 outline-none resize-none h-36" placeholder=" Description"></textarea>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 text-white t px-5 py-2">Submit</button>
      </div>
    </div>

    <NoteItem title="My First re-usable Component" />
    <NoteItem title="My second re-usable Component" />
    </div>
  );
};

export default App;