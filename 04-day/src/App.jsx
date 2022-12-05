import { useState, useEffect } from "react";
import { AiFillGift, AiFillCloseCircle } from "react-icons/ai";

function App() {
  const [gifts, setGifts] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const addGift = (e) => {
    e.preventDefault();
    setGifts([...gifts, { name: input, id: gifts.length }]);
    setInput("");
  };

  const deleteGift = (id) => {
    console.log(id);
    const newGifts = gifts.filter((gift) => gift.id !== id);
    console.log(newGifts);
    setGifts(newGifts);
  };

  return (
    <div className="w-full h-screen bg-christmas bg-cover flex justify-center items-center">
      <div className="text-white flex flex-col gap-3 justify-center items-center">
        <h1 className="uppercase text-5xl font-bold">regalos que deseo</h1>
        <div className="flex gap-3">
          <input
            className="bg-transparent border-2 border-gray-200 rounded focus:outline-0"
            type="text"
            value={input}
            onChange={(e) => handleChange(e)}
          />
          <button
            className="bg-slate-800/50 px-5 py-2 rounded"
            onClick={(e) => addGift(e)}
          >
            Agregar
          </button>
        </div>
        <div className="p-5 divide-y-2 bg-slate-800/25 rounded w-6/12">
          {gifts.map((gift, i) => (
            <div
              key={i}
              className="flex items-center text-xl py-3  justify-between"
            >
              <div className="flex justify-center items-center gap-3">
                <AiFillGift />
                <span>{gift.name}</span>
              </div>
              <AiFillCloseCircle
                onClick={() => deleteGift(gift.id)}
                className="fill-red-400 w-6 h-6 hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
