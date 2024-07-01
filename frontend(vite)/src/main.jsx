import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import InscriptionEntr from "./inscription/InscriptionEntr";
import InscriptionInv from "./inscription/InscriptionInv";
import Publier from "./publier/Publier";
import ConnectChoice from "./connexion/ConnectChoice";
import InscriptionAdmin from "./admin/InscriptionAdmin";
import PageAdmin from "./admin/PageAdmin";
import InscriptionsAttente from "./admin/InscriptionsAttente";
import ProjetsAttente from "./admin/ProjetsAttente";
import Footer from "./composantsApp/Footer";
import Connexion from "./connexion/Connexion";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/acceuil" />,
  },
  {
    path: "/acceuil",
    element: <App />,
  },
  {
    path: "/connexion",
    element: <Connexion />,
  },

  {
    path: "/inscription/entrepreneur",
    element: <InscriptionEntr />,
  },
  {
    path: "/inscription/investisseur",
    element: <InscriptionInv />,
  },
  {
    path: "/publier",
    element: <Publier />,
  },
  {
    path: "/connect",
    element: <ConnectChoice />,
  },
  {
    path: "/nbv442^cxz/inscription/aDmiN",
    element: <InscriptionAdmin />,
  },

  {
    path: "/nbv442^cxz/page/aDmiN",
    element: <PageAdmin />,
    children: [
      {
        path: "/nbv442^cxz/page/aDmiN/inscriptions",
        element: <InscriptionsAttente />,
      },
      {
        path: "/nbv442^cxz/page/aDmiN/projets",
        element: <ProjetsAttente />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
    <Footer />
  </React.StrictMode>
);
