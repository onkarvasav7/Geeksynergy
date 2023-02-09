import React, { useState } from "react";

const Movie = ({ item }) => {
  return (
    <article className="flex w-64 items-start space-x-2 p-2  md:w-[600px] md:space-x-24 md:p-14 md:mx-40">
      <img
        src={item.poster}
        alt={item.title}
        // width="60"
        height="88"
        className="flex rounded-md bg-slate-100 w-[60px] md:w-[200px] "
      />
      <div className="min-w-0  relative  ">
        <h2 className="font-semibold text-slate-900 truncate pr-20 md:text-3xl">
          {item.title}
        </h2>
        <dl className="mt-2 flex flex-col text-sm md:text-lg leading-6 font-medium">
          <div className="flex-none w-full font-normal md:text-xl">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">Genre: {item.genre}</dd>
          </div>
          <div className="flex  w-full font-normal md:text-xl">
            <dt className="sr-only">Director</dt>
            <dd className="text-slate-400">Director: {item.director}</dd>
          </div>
          <div className="flex  w-full font-normal md:text-xl">
            <dt className="sr-only">Starring</dt>
            <dd className="text-slate-400">Starring: {item.stars}</dd>
          </div>
          <div class=" leading-relaxed text-slate-400 md:text-xl">
            Mins | {item.language} | 1 April
          </div>
          <div class="mb-3 leading-relaxed text-slate-400 md:text-xl">
            {item.pageViews} Views | Voted by {item.totalVoted} People
          </div>

          {/* // voted */}
          {/* <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
             <div><button  onClick={handleAdd}>+</button></div>
             <div><button  onClick={handleSub}>-</button></div>
             
            </dt>
            <dd>{item.totalVoted}</dd>
          </div> */}

          <div class="flex w-full ">
            <button class="w-screen text-white bg-indigo-500 border-0  px-1  focus:outline-none hover:bg-indigo-600 rounded text-md md:text-xl md:p-2">
              Watch Trailer
            </button>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default Movie;
