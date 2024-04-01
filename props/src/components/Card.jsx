import React from "react";

const Card = ({ name, img, para, eaduction ,cardFun}) => {
  console.log({name, img, para, eaduction});
  return (
    <div className="">
      <h1
        onClick={() => cardFun(name)}
        className="text-2xl bg-green-500 p-3 rounded cursor-pointer animate-pulse"
      >
        A card for phote{" "}
      </h1>
      <figure className="relative w-full bg-gray-300 p-10 flex">
        <img width={400} src={img} alt="logo" />
        <h1 className="text-4xl text-slate-400 font-bold mx-4">Card</h1>
        <p className="flex font-md text-justify text-xl flex-col translate-y-32 text-ce">
          {para}
          <span className="text-red-400 ml-10 font-thin">{name}</span>
          <span className="ml-10 text-gray-500">{eaduction}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;
