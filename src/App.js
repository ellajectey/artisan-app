import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage"
import Registration from "./pages/Registration"
import ArtisanDashboard from "./pages/ArtisanDashboard"
import UserDashboard from "./pages/UserDashboard"
import Search from "./pages/Search";
import ArtisanDetails from "./pages/ArtisanDetails"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const router = createBrowserRouter([
  { path: "/", element: <Homepage/> },
  { path: "/login", element: <LoginPage/> },
  { path: "/register", element: <Registration/> },
  { path: "/search", element: <Search/> },
  { path: "/artisanDetails/:id", element: <ArtisanDetails/> },
  { path: "/artisan-dashboard", element: <ArtisanDashboard/> },
  { path: "/user-dashboard", element: <UserDashboard/> },
 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  );
}

export default App;
