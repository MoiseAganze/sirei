import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

function ConnexionAdmin(props) {
  const nav = useNavigate();
  const initialvalues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("adresse email invalide")
      .required("l'adresse email est requis"),
    password: Yup.string().required("mot de passe requis"),
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
        className="w-auto min-h-screen flex justify-center"
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="w-auto md:w-1/2 p-5 m-2 flex flex-col gap-3 border border-spacing-2">
          <div class="text-center mb-5">
            <h1 class="text-4xl font-bold p-5 shadow-md w-auto">
              Connexion d'Admin
            </h1>
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

          <div className="flex justify-between">
            <div className="flex flex-col">
              <Link
                className="ml-4 btn-link"
                to="/nbv442^cxz/inscription/aDmiN"
              >
                inscription
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

export default ConnexionAdmin;
