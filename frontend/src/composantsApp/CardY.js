import React from "react";

function CardY(props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="images/chan.jpeg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Exemple de Post!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>ici seront mis les details du post</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline py-1 cursor-pointer">
            <img src="images/star.svg" alt="" />
          </div>
          <div className="badge badge-outline py-1 cursor-pointer">
            <img src="images/comment.svg" alt="" onClick={props.showcomment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardY;
