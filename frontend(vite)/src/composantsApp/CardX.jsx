import React from "react";

function CardX(props) {
  return (
    <div className="card card-side w-1/2 bg-base-100 shadow-xl">
      <figure className="w-1/3">
        <img src="images/chan.jpeg" alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}

export default CardX;
