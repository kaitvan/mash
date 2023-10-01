import { Link } from "react-router-dom";

interface Props {
  future: {
    home: string;
    partner: string;
    job: string;
    salary: string;
    car: string;
    location: string;
  };
}

function Results({ future }: Props) {
  const results = (
    <>
      <div className="title">
        <h1>Results</h1>
      </div>
      <div className="card-body">
        <div>
          <h2>Your Future</h2>
          <p>
            {`You will live in ${future.location} with your partner, ${future.partner}. You
        will live in a ${future.home}, drive a ${future.car}, and spend your days working
        as a ${future.job} with an annual salary of $${future.salary}.`}
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

  return results;
}

export default Results;
