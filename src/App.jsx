import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Citys from "./pages/Citys"
import Details from "./pages/Details"
import StandarLayout from './layaut/StandarLayaut'
import DetailsLayout from './layaut/DetailsLayout'
import Login from "./components/LogIn"
import PrivateRoute from './components/PrivateRoutes'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/signInSlice'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <StandarLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/citys", element: <Citys /> },
    ]
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <DetailsLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "", element: <Details /> }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedAuth = localStorage.getItem('authState');
    if (savedAuth) {
      try {
        const parsed = JSON.parse(savedAuth);
        if (parsed.token && parsed.user) {
          dispatch(setCredentials(parsed));
        }
      } catch (error) {

      }
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
