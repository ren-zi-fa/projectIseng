import React, { useState } from "react";
import Counter from "../Fragments/Counter";

export default function CobaSaja() {
  const [item, setItem] = useState([
    {
      name: "renzi",
      umur: 21,
      kelas: "if-7",
    },
    {
      name: "renzi",
      umur: 21,
      kelas: "if-2",
    },
    {
      name: "renzi",
      umur: 231,
      kelas: "if-7",
    },
    {
      name: "ontant",
      umur: 221,
      kelas: "if-7",
    },
    {
      name: "re34nzi",
      umur: 21,
      kelas: "ewif-7",
    },
    {
      name: "re34nzi",
      umur: 21,
      kelas: "ewif-7",
    },
  ]);

  return (
    <div className="bg-slate-200 min-h-screen  ">
      <div className="grid grid-cols-3 place-content-center items-center gap-4 p-2">
        {...item.map((index) => (
          <div className=" bg-blue border max-w-lg w-1/2 lg:w-full text-white font-semibold px-4 py-4 border-slate-200 shadow-lg bg-indigo-600 rounded-md">
            <li>{index.name}</li>
            <li>{index.umur}</li>
            <li>{index.kelas}</li>
          </div>
        ))}
      </div>
      <div className="mt-5  ">
        <Counter/>
      </div>
    </div>
  );
}
