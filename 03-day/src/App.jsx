import db from "./db.json";
import { AiFillGift } from "react-icons/ai";
import { useEffect, useState } from "react";

function App() {
  const [gifts, setGifts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setGifts(db.gifts);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setGifts([...gifts, input]);
    setInput("");
  };

  return (
    <div className="w-full h-screen bg-christmas bg-cover flex items-center justify-center">
      <div className="text-white flex flex-col gap-5 items-center">
        <h1 className="uppercase font-bold text-5xl">regalos que deseo</h1>
        <div className="flex gap-3">
          <input
            type="text"
            className="w-4/6 bg-transparent border-gray-300 border-2 rounded focus:outline-0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-slate-800/50 rounded hover:bg-slate-800"
            onClick={(e) => handleChange(e)}
          >
            Agregar
          </button>
        </div>
        <div className="p-5 divide-y-2 bg-slate-800/25 rounded w-6/12">
          {gifts.map((gift, i) => (
            <div key={i} className="flex items-center text-xl py-3 gap-3">
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
