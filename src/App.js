import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage"
import Registration from "./pages/Registration"
import Inbox from "./pages/Inbox"
import ArtisanDashboard from "./pages/ArtisanDashboard"
import Appointment from "./pages/Appointment"
import UserDashboard from "./pages/UserDashboard"
import Search from "./pages/Search";





const router = createBrowserRouter([
  { path: "/", element: <Homepage/> },
  { path: "/login", element: <LoginPage/> },
  { path: "/register", element: <Registration/> },
  { path: "/search", element: <Search/> },
  { path: "/inbox", element: <Inbox/> },
  { path: "/artisan-dashboard", element: <ArtisanDashboard/> },
  { path: "/appointment", element: <Appointment/> },
  { path: "/user-dashboard", element: <UserDashboard/> },
 
 
  
]);

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
