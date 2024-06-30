import React, { useState } from "react";

function Publier(props) {
  const [srcim, setsrcim] = useState("");
  const handlechangeimg = (e) => {
    const lienimg = URL.createObjectURL(e.target.files[0]);
    setsrcim(lienimg);
  };
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="sm:w-screen md:w-1/2 p-5 m-2 flex flex-col gap-3 border border-spacing-2">
        <div class="text-center mb-5">
          <h1 class="text-4xl font-bold p-5 shadow-md w-auto">
            Publication de projet
          </h1>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          Nom du projet:
          <input
            type="text"
            className="grow"
            placeholder="ex:Creation d'une start-up de..."
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Domaine du projet:
          <input
            type="text"
            className="grow"
            placeholder="ex:informatique..."
          />
        </label>
        <div className="">
          <p className="text-sm text-center">
            **fichier du projet(word,pdf,powerpoint)**
          </p>
          <label className="input  flex flex-col items-center gap-2">
            <input type="file" className="grow file-input file-input-success" />
          </label>
        </div>
        <div className="">
          <p className="text-sm text-center">
            **image du projet(pas obligatoire)**
          </p>
          <label className="input  flex flex-col items-center gap-2">
            <input
              type="file"
              accept="image/*"
              className="grow file-input file-input-success"
              onChange={handlechangeimg}
            />
          </label>
          <div className="w-full flex justify-center items-center">
            <img src={srcim} className="w-1/2 rounded-3xl my-3" alt="" />
          </div>
        </div>
        <textarea
          name="profile"
          className="grow  w-full h-32 p-4 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Expliquez brièvement votre projet"
        />

        <input
          type="submit"
          className="btn btn-warning btn-outline w-60 ml-auto"
          value="Publier"
        />
      </div>
    </div>
  );
}

export default Publier;
