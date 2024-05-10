import React from "react";

const HomePage = () => {
  return (
    // home
    <div> 
      <div className="flex bg-black h-24 justify-between p-5">
        <h1 className="text-white mt-2 font-bold text-2xl">Kelas Perdif</h1>
        <ul className="flex gap-5 mt-3 mr-10">
          <li>
            <a
              className="text-black bg-white pt-3 pb-3 pr-5 pl-5 rounded-lg hover:bg-black hover:text-white transition duration-450 ease-in-out"
              href=""
            >
              Home
            </a>
          </li>
          <li>
            <a className="text-white pt-3 pb-3 pr-5 pl-5 rounded-lg hover:bg-white hover:text-black transition duration-450 ease-in-out" href="">Mata Kuliah</a>
          </li>
          <li>
            <a className="text-white pt-3 pb-3 pr-5 pl-5 rounded-lg hover:bg-white hover:text-black transition duration-450 ease-in-out" href="">Tugas</a>
          </li>
          <li>
            <a className="text-white pt-3 pb-3 pr-5 pl-5 rounded-lg hover:bg-white hover:text-black transition duration-450 ease-in-out" href="">Ujian</a>
          </li>
        </ul>
      </div>
      <div className="h-96 mt-16 w-full bg-blue-500">
        <h1>fauzan</h1>
      </div>
    </div>
  );
};

export default HomePage;
