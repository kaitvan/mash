import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="card">
      <div className="title">
        <h1>404</h1>
      </div>
      <div className="card-body">
        <div>
          <h2>Error</h2>
          <p>This page isn't available.</p>
        </div>
        <div>
          <button onClick={goBackHandler}>Take Me Back</button>
        </div>
      </div>
    </div>
  );
}

export default Error;
