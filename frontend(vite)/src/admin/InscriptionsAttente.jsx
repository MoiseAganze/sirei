import React from "react";

function InscriptionsAttente(props) {
  return (
    <div className="w-full flex flex-col items-center mt-10 px-4 ">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure className="relative">
          <img
            className="blur-sm"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
          <div className="avatar absolute  top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="mask mask-squircle w-24 ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <p className="text-2xl font-bold text-white text-center bg-black m-1 px-3 rounded-2xl">
              Moïse Aganze
            </p>
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            Entrepreneur/investisseur
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3">
              <span className="font-semibold">Nom : </span>
              <p>Aganze</p>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold">Prénom : </span>
              <p>Moïse</p>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold">Email : </span>
              <p>aganzeder@gmail.com</p>
            </li>

            <li className="m-3 p-3 rounded-xl border border-spacing-1 shadow-xl">
              <span className="font-semibold">Description : </span>
              <p className="ml-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit nam, laboriosam quod recusandae quidem molestiae
                adipisci voluptatibus ex labore nostrum!
              </p>
            </li>
          </ul>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Approuver</button>
            <button className="btn btn-error">Refuser</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InscriptionsAttente;
