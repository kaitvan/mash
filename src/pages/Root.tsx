import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="card">
      <Outlet />
    </div>
  );
}

export default Root;
