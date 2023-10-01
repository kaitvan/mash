import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="title">
        <h1>Play MASH</h1>
      </div>
      <div className="card-body">
        <div>
          <p>
            Discover your future in this fun, fortune-telling game beloved by
            millennials everywhere.
          </p>
          <p>Ready to play?</p>
        </div>
        <div>
          <Link to="/play">
            <button className="button-alt">How to Play</button>
          </Link>
          <Link to="/quiz">
            <button>Start Game</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
