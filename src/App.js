import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import "./components/Header.css";
import { Cooking } from "./pages/Cooking";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Recipes",
    element: <Recipes />,
  },
  {
    path: "/Cooking/:id",
    element: <Cooking />,
  },
]);

function App() {
  return (
    <div className="App bg">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
