import React from "react";
import { Link } from "react-router-dom";

function ConnexionInv(props) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="sm:w-screen md:w-1/2 p-5 m-2 flex flex-col gap-3 border border-spacing-2">
        <div class="text-center mb-5">
          <h1 class="text-4xl font-bold p-5 shadow-md w-auto">
            Connexion d'investisseur
          </h1>
        </div>

        <label className="input input-bordered flex items-center gap-2">
          Email:
          <input type="email" className="grow" placeholder="daisy@site.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Mot de passe:
          <input
            type="password"
            className="grow"
            placeholder="votre mot de passe"
          />
        </label>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Link className="ml-4 btn-link" to="/inscription/investisseur">
              inscription
            </Link>
            <Link
              className="ml-4 btn-link link-success"
              to="/connexion/entrepreneur"
            >
              vous êtes entrepreneur ?
            </Link>
          </div>

          <Link className="ml-4 btn-link" to="#">
            mot de passe oublié ?
          </Link>
        </div>
        <input
          type="submit"
          className="btn btn-success w-60 ml-auto"
          value="Soumettre"
        />
      </div>
    </div>
  );
}

export default ConnexionInv;
