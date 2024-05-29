import React from "react";

function Intro(props) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-neutral-content">
            Bienvenue à vous !
          </h1>
          <p className="mb-5 text-neutral-content">
            Bienvenue sur notre plateforme, le point de rencontre idéal entre
            entrepreneurs ambitieux et investisseurs visionnaires.
          </p>

          {/* Modal */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn border-spacing-2 border-purple-50"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            En savoir plus
          </button>
          <dialog
            id="my_modal_5"
            className=" modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                {" "}
                Notre site a pour mission de faciliter les échanges et les
                partenariats entre ceux qui portent des projets innovants et
                ceux qui cherchent à soutenir des initiatives prometteuses. Que
                vous soyez un entrepreneur en quête de financement pour
                concrétiser vos idées ou un investisseur à la recherche de
                nouvelles opportunités, notre plateforme vous offre les outils
                et les ressources nécessaires pour établir des connexions
                fructueuses. Rejoignez notre communauté dès aujourd'hui et
                donnez vie à vos projets grâce à des collaborations stratégiques
                et mutuellement bénéfiques.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">fermer</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Intro;
