import { Link } from "react-router-dom";

function Results() {
  return (
    <>
      <div className="title">
        <h1>Play MASH</h1>
      </div>
      <div className="card-body">
        <div>
          <h2>Your Future</h2>
          <p>
            You will live in Austin, Texas with your partner, Bad Bunny. You
            will live in a house, drive a minivan, and spend your days working
            as a television show host with an annual salary of $5,000.
          </p>
        </div>
        <div>
          <Link to="/">
            <button>Play Again</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Results;
