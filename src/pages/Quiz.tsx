function Quiz() {
  return (
    <>
      <div className="title">
        <h1>MASH 1/5</h1>
      </div>
      <div className="card-body">
        <div>
          <h2>Your Partner</h2>
          <p>Enter 3 names of people you would like to be your life partner.</p>
        </div>
        <form>
          <input type="text"></input>
          <input type="text"></input>
          <input type="text"></input>
          <button>Next</button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
