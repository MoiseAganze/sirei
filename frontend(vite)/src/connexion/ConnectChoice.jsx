import React from "react";
import { Link } from "react-router-dom";

function ConnectChoice(props) {
  return (
    <div className="flex justify-between py-5 items-center gap-10  flex-col md:items-start md:gap-0 md:flex-row md:px-40">
      <div className="card glass w-96 ">
        <figure>
          <img src="images/entr2.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vous êtes entrepreneur ?</h2>
          <p>
            Créez un compte, partagez vos projets et rencontrez des
            investisseurs
          </p>
          <div className="card-actions justify-end">
            <Link to="/inscription/entrepreneur" className="btn btn-primary">
              inscription/connexion
            </Link>
          </div>
        </div>
      </div>
      <div className="divider md:divider-horizontal">OU</div>
      <div className="card glass w-96">
        <figure>
          <img src="images/inves1.jpg" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vous êtes investisseur ?</h2>
          <p>
            Créez un compte, Decouvrez des projets prometteurs et investissez
            dans des entrepreneurs
          </p>
          <div className="card-actions justify-end">
            <Link to="/inscription/investisseur" className="btn btn-primary">
              inscription/connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectChoice;
