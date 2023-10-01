import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import Results from "./pages/Results";

interface Future {
  home: string;
  partner: string;
  job: string;
  salary: string;
  car: string;
  location: string;
}

function App() {
  const [future, setFuture] = useState({
    home: "",
    partner: "",
    job: "",
    salary: "",
    car: "",
    location: "",
  });
  // const [isReady, setIsReady] = useState(false);

  const getFuture = (selectedFuture: Future) => {
    setFuture(selectedFuture);
    // setIsReady(true);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/play", element: <Play /> },
        { path: "/quiz", element: <Quiz getFuture={getFuture} /> },
        {
          path: "/results",
          element: <Results future={future} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
