import React from "react";
import { Link } from "react-router-dom";

function InscriptionInv(props) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="sm:w-screen md:w-1/2 p-5 m-2 flex flex-col gap-3 border border-spacing-2">
        <div class="text-center mb-5">
          <h1 class="text-4xl font-bold p-5 shadow-md w-auto">
            Inscription d'investisseur
          </h1>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          Name:
          <input
            type="text"
            name="name"
            className="grow"
            placeholder="Entrer votre nom"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Prenom:
          <input
            type="text"
            name="firstname"
            className="grow"
            placeholder="Votre prenom"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Role:
          <input
            type="text"
            name="profile"
            className="grow"
            value={"entrepreneur"}
          />
        </label>

        <div>
          <label
            for="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Genre
          </label>
          <div className="mt-2 flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="gender"
                value="m"
              />
              <span className="ml-2">Homme</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-pink-600"
                name="gender"
                value="f"
              />
              <span className="ml-2">Femme</span>
            </label>
          </div>
        </div>
        <div>
          <label for="situation" className="block text-sm font-semibold">
            Vous etes{" "}
          </label>
          <select
            name="situation"
            className="select select-primary w-full max-w-xs"
          >
            <option value="" disabled selected>
              Choisir une option
            </option>
            <option value="Travailleur">Travailleur</option>
            <option value="Etudiant">Etudiant</option>
            <option value="Eleve">Eleve</option>
            <option value="Chomeur">Chomeur</option>
          </select>
        </div>
        <label className="input input-bordered flex items-center gap-2">
          Email:
          <input type="email" className="grow" placeholder="daisy@site.com" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Tel:
          <input type="email" className="grow" placeholder="+24300000000" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Mot de passe:
          <input
            type="password"
            className="grow"
            placeholder="votre mot de passe"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Confirmer:
          <input
            type="password"
            className="grow"
            placeholder="réecrire le mot de passe"
          />
        </label>
        <textarea
          name="profile"
          className="grow  w-full h-32 p-4 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="parlez des domaines dans lequels vous travaillez"
        />
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Link className="ml-4 btn-link" to="/connexion/investisseur">
              connexion
            </Link>
            <Link
              className="ml-4 btn-link link-success"
              to="/connexion/entrepreneur"
            >
              vous êtes entrepreneur ?
            </Link>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-success w-60 ml-auto"
          value="Soumettre"
        />
        {/* <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <span className="badge badge-info">Optional</span>
      </label> */}
      </div>
    </div>
  );
}

export default InscriptionInv;
