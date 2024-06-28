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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
