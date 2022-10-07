import { ProgressBar } from "react-loader-spinner";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} fallbackElement={<div className='flex justify-center mt-20'>
                        <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor = '#F4442E'
                barColor = '#51E5FF'
                />
        </div>}/>
    </div>
  );
}

export default App;
