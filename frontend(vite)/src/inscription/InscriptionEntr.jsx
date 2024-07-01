import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

function InscriptionEntr() {
  const nav = useNavigate();
  const initialvalues = {
    nom: "",
    prenom: "",
    role: "entrepreneur",
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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        background: "url(images/renc1.jpg)",
      }}
    >
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-full max-w-lg bg-opacity-90 p-8 rounded-lg shadow-2xl space-y-6 animate__animated animate__fadeIn">
          <div className="text-center mb-5">
            <h1 className="text-xl md:text-4xl font-bold p-5 shadow-md w-auto text-white bg-gradient-to-r from-black to-gray-800 rounded-lg animate-pulse">
              {" Inscription d'entrepreneur"}
            </h1>
          </div>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nom</span>
              </label>
              <Field
                type="text"
                name="nom"
                className="input input-bordered w-full"
                placeholder="Entrer votre nom"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="nom"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Prénom</span>
              </label>
              <Field
                type="text"
                name="prenom"
                className="input input-bordered w-full"
                placeholder="Votre prénom"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="prenom"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <Field
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="daisy@site.com"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="email"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Téléphone</span>
              </label>
              <Field
                type="tel"
                name="tel"
                className="input input-bordered w-full"
                placeholder="+24300000000"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="tel"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mot de passe</span>
              </label>
              <Field
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Votre mot de passe"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="password"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirmer le mot de passe</span>
              </label>
              <Field
                type="password"
                name="cpassword"
                className="input input-bordered w-full"
                placeholder="Réécrire le mot de passe"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="cpassword"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <Field
                name="description"
                className="textarea textarea-bordered w-full h-32"
                placeholder="Faites une brève description de vous (vos activités...)"
              />
              <ErrorMessage
                className="text-sm text-red-700"
                name="description"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    className="radio radio-primary"
                    name="genre"
                    value="masculin"
                  />
                  <span className="ml-2">Homme</span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    className="radio radio-primary"
                    name="genre"
                    value="feminin"
                  />
                  <span className="ml-2">Femme</span>
                </label>
              </div>
              <ErrorMessage
                className="text-sm text-red-700"
                name="genre"
                component="p"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vous êtes</span>
              </label>
              <Field
                as="select"
                name="situation"
                className="select select-primary w-full"
              >
                <option value="" disabled selected>
                  Choisir une option
                </option>
                <option value="Travailleur">Travailleur</option>
                <option value="Etudiant">Étudiant</option>
                <option value="Eleve">Élève</option>
                <option value="Chomeur">Chômeur</option>
              </Field>
              <ErrorMessage
                className="text-sm text-red-700"
                name="situation"
                component="p"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <Link
                className="ml-4 link link-hover text-primary"
                to="/connexion"
              >
                Connexion
              </Link>
            </div>
          </div>
          <Field
            type="submit"
            className="btn btn-success w-full"
            value="Soumettre"
          />
          <Toaster position="top-center" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
}

export default InscriptionEntr;
