import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import InscriptionEntr from "./inscription/InscriptionEntr";
import ConnexionEntr from "./connexion/ConnexionEntr";
import InscriptionInv from "./inscription/InscriptionInv";
import ConnexionInv from "./connexion/ConnexionInv";
import Publier from "./publier/Publier";
import ConnectChoice from "./connexion/ConnectChoice";
import InscriptionAdmin from "./admin/InscriptionAdmin";
import ConnexionAdmin from "./admin/ConnexionAdmin";
import PageAdmin from "./admin/PageAdmin";
import InscriptionsAttente from "./admin/InscriptionsAttente";
import ProjetsAttente from "./admin/ProjetsAttente";
import Footer from "./composantsApp/Footer";

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
    path: "/connexion/entrepreneur",
    element: <ConnexionEntr />,
  },
  {
    path: "/connexion/investisseur",
    element: <ConnexionInv />,
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
    path: "/nbv442^cxz/connexion/aDmiN",
    element: <ConnexionAdmin />,
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
