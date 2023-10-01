import { Link } from "react-router-dom";

function Play() {
  return (
    <>
      <div className="title">
        <h1>Play MASH</h1>
      </div>
      <div className="card-body">
        <div>
          <p>
            This game is all about picking which of several futures you will
            have.
          </p>
          <p>
            The game always starts with MASH, which is short for mansion,
            apartment, shack, and house. Then, you'll choose values for other
            categories like your partner, job, salary, car, and location. We'll
            randomly select a value for each category and voila! Every question
            you've ever had about your future will be answered.
          </p>
        </div>
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Play;
