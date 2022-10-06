import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} fallbackElement={<div>Ami Load Hocchi....</div>}/>
    </div>
  );
}

export default App;
