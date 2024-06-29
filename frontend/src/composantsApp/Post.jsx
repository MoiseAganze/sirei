import React from "react";

function Post(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl items-center pt-4">
      <div className="flex gap-3 w-full pl-4 pb-2 mb-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="../../../images/nar.jpg"
            />
          </div>
        </div>
        <div className="flex items-center">
          <p className="font-semibold border-t border-b py-1">Moise Aganze</p>
        </div>
        <div className="flex items-center ml-auto mr-8">
          <p className="">il y a 5 min</p>
        </div>
      </div>
      <figure className="w-2/3 ">
        <img
          src="../../../images/nar.jpg"
          className="w-full rounded-t-3xl"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Projet YYYY
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <ul>
          <li className="m-3 p-3 rounded-xl border border-spacing-1 shadow-xl">
            <span className="font-semibold">Description : </span>
            <p className="ml-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
              nam, laboriosam quod recusandae quidem molestiae adipisci
              voluptatibus ex labore nostrum!
            </p>
          </li>
        </ul>
        <div className="card-actions justify-end">
          <div className="badge badge-outline py-1 cursor-pointer">
            <img src="../../../images/star.svg" alt="" />
          </div>
          <div className="badge badge-outline py-1 cursor-pointer">
            <img
              src="../../../images/comment.svg"
              alt=""
              onClick={props.showcomment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
