import db from "./db.json";
import { AiFillGift } from "react-icons/ai";

function App() {
  return (
    <div className="w-full h-screen bg-christmas bg-cover flex justify-center items-center">
      <div className="text-white flex flex-col justify-center items-center">
        <h1 className="uppercase text-5xl font-bold ">regalos que deseo..</h1>
        <div className="divide-y mt-8 bg-slate-800/25 p-5 rounded w-6/12">
          {db.gifts.map((gift, i) => (
            <div key={i} className="flex  items-center py-3 gap-3 text-xl">
              <AiFillGift />
              <span>{gift}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
