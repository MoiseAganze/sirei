import React from "react";
import { Link } from "react-router-dom";

function Connexion(props) {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Connexion</h1>
          <p className="py-6">
            Vous êtes déjà inscrit en tant qu'entrepreneur,investisseur ou admin
            ? Veuillez vous connecter
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">adresse email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">mot de passe</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div className="w-full flex justify-between">
                <label className="label">
                  <Link
                    to="/connect"
                    className="label-text-alt link link-hover"
                  >
                    créer un compte
                  </Link>
                </label>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    mot de passe oublié ?
                  </a>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Connexion</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
