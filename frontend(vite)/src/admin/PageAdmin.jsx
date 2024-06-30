import React, { useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import { Link, Outlet } from "react-router-dom";

function PageAdmin(props) {
  const [activeInscription, setactiveInscription] = useState("tab tab-active");
  const [activePosts, setactivePosts] = useState("tab");
  const handleActiveInscription = () => {
    setactivePosts("tab");
    setactiveInscription("tab tab-active");
  };
  const handleActivePosts = () => {
    setactivePosts("tab tab-active");
    setactiveInscription("tab");
  };
  return (
    <div className="flex flex-col items-center justify-center mb-10 px-4">
      <NavbarAdmin />
      <div className="w-full md:w-1/2 flex">
        <label className="swap swap-flip text-9xl left-0 animate-spin">
          <input type="checkbox" />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
        <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 drop-shadow-lg animate-pulse mt-8">
          Mode Admin
        </h1>
      </div>

      <div role="tablist" className="tabs tabs-boxed my-7">
        <Link
          to="/nbv442^cxz/page/aDmiN/inscriptions"
          role="tab"
          className={activeInscription}
          onClick={handleActiveInscription}
        >
          Inscriptions
        </Link>
        <Link
          to="/nbv442^cxz/page/aDmiN/projets"
          role="tab"
          className={activePosts}
          onClick={handleActivePosts}
        >
          Projets/Posts
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default PageAdmin;
