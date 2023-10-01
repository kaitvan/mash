import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Quiz from "./pages/Quiz";
import Error from "./pages/Error";
import Results from "./pages/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/play", element: <Play /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/results", element: <Results /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
