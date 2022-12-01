import db from "./db.json";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-green-400 to-green-900 text-white">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold uppercase">regalos</h1>
        <div className="flex flex-col text-white items-center divide-y-2">
          {db.gifts.map((gift, i) => (
            <span className="p-3" key={i}>
              {gift}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
