import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

function InscriptionAdmin(props) {
  const nav = useNavigate();
  const initialvalues = {
    nom: "",
    prenom: "",
    role: "admin",
    genre: "",
    situation: "",
    email: "",
    tel: "",
    password: "",
    cpassword: "",
    description: "",
  };
  const validationSchema = Yup.object().shape({
    nom: Yup.string()
      .max(10, "au plus 10 caractères")
      .required("le nom est requis"),
    prenom: Yup.string()
      .max(10, "au plus 10 caractères")
      .required("le prenom est requis"),
    email: Yup.string()
      .email("adresse email invalide")
      .required("l'adresse email est requis"),
    tel: Yup.string()
      .matches(/^\d{10}$/, "le numéro ne doit contenir que 10 chiffres")
      .required("votre numéro de tel"),
    password: Yup.string()
      .min(6, "au moins 6 caractères")
      .required("mot de passe requis"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "bien réécrire le mot de passe")
      .required("confirmez le mot de passe"),
    description: Yup.string()
      .max(500, "au plus 500 caractères")
      .required("champ requis"),
    genre: Yup.string()
      .oneOf(["masculin", "feminin"], "selectionnez un genre!")
      .required("de quel genre êtes-vous ?"),
    situation: Yup.string().required("veuillez choisir une option!"),
  });
  const onSubmit = (data) => {
    console.log(data);
    toast.success("demande d'inscription envoyée !", { duration: 5000 });
    setTimeout(() => {
      nav("/connexion/entrepreneur");
    }, 5000);
  };
  return (
    <div className="w-full h-auto flex justify-center">
      <Formik
        className="w-full min-h-screen flex justify-center"
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-auto md:w-1/2 p-5 m-2 flex flex-col gap-3 border border-spacing-2">
          <div class="text-center mb-5">
            <h1 class="text-4xl font-bold p-5 shadow-md w-auto">
              Inscription d'Admin
            </h1>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            Name:
            <Field
              type="text"
              name="nom"
              className="grow"
              placeholder="Entrer votre nom"
            />
            <ErrorMessage
              className="text-sm text-red-700"
              name="nom"
              component="p"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Prenom:
            <Field
              type="text"
              name="prenom"
              className="grow"
              placeholder="Votre prenom"
            />
            <ErrorMessage
              className="text-sm text-red-700"
              name="prenom"
              component="p"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Role:
            <Field type="text" name="role" className="grow" value={"admin"} />
          </label>

          <div>
            <label
              for="genre"
              className="block text-sm font-medium text-gray-700"
            >
              Genre
            </label>
            <div className="mt-2 flex space-x-4">
              <label className="inline-flex items-center">
                <Field
                  type="radio"
                  className="form-radio text-blue-600"
                  name="genre"
                  value="masculin"
                />

                <span className="ml-2">Homme</span>
              </label>
              <label className="inline-flex items-center">
                <Field
                  type="radio"
                  className="form-radio text-pink-600"
                  name="genre"
                  value="feminin"
                />
                <span className="ml-2">Femme</span>
              </label>
              <ErrorMessage
                className="text-sm text-red-700"
                name="genre"
                component="p"
              />
            </div>
          </div>
          <div>
            <label for="situation" className="block text-sm font-semibold">
              Vous etes{" "}
            </label>
            <Field
              as="select"
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
            </Field>
            <ErrorMessage
              className="text-sm text-red-700"
              name="situation"
              component="p"
            />
          </div>
          <label className="input input-bordered flex items-center gap-2">
            Email:
            <Field
              type="email"
              name="email"
              className="grow"
              placeholder="daisy@site.com"
            />
            <ErrorMessage
              className="text-sm text-red-700"
              name="email"
              component="p"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Tel:
            <Field
              type="tel"
              name="tel"
              className="grow"
              placeholder="+24300000000"
            />
            <ErrorMessage
              className="text-sm text-red-700"
              name="tel"
              component="p"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Mot de passe:
            <Field
              type="password"
              name="password"
              className="grow"
              placeholder="votre mot de passe"
            />
            <ErrorMessage
              className="text-sm text-red-700"
              name="password"
              component="p"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Confirmer:
            <Field
              type="password"
              name="cpassword"
              className="grow"
              placeholder="réecrire le mot de passe"
            />
            <ErrorMessage
              className="text-sm text-red-700"
              name="cpassword"
              component="p"
            />
          </label>
          <Field
            name="description"
            className="textarea grow  w-full h-32 p-4 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="faites une brève description de vous (vos activités...)"
          />
          <ErrorMessage
            className="text-sm text-red-700"
            name="description"
            component="p"
          />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Link className="ml-4 btn-link" to="/nbv442^cxz/connexion/aDmiN">
                connexion
              </Link>
            </div>

            <Link className="ml-4 btn-link" to="#">
              mot de passe oublié ?
            </Link>
          </div>
          <Field
            type="submit"
            id="btns"
            className="btn btn-success w-60 ml-auto"
            value="Soumettre"
          />
          <Toaster position="top-center" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
}

export default InscriptionAdmin;
