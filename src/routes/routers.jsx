import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";

import GoAntd from "../commpents/goAntd";
import Startpage from "../pages/start";
import GoAxios from "../commpents/goAxios";
import GoEchart from "../commpents/goEchart";
import GoThree from "../commpents/goThree";
//import goEchart from "../commpents/goEchart"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Startpage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/and-design",
        element: <GoAntd/>
      },
      {
        path: "/axios",
        element: <GoAxios />
      },
      {
        path: "/echart",
        element: <GoEchart />
      },
      {
        path: "/three",
        element: <GoThree />
      }
    ]
  }
]);

export default router