import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Citys from "./pages/Citys"
import Details from "./pages/Details"
import StandarLayout from './layaut/StandarLayaut'
import DetailsLayout from './layaut/DetailsLayout'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<StandarLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
         {
          path:"/home",
          element:<Home/>
        },
         {
          path:"/citys",
          element:<Citys/>
        },
      ]
    },
    {
      path: "/details/:id",
      element: <DetailsLayout />,
      children: [
        { path: "", element: <Details /> }
      ]
    },
  
  ]
)

function App() {
  return (
    <>
    <RouterProvider router={router}>
      

    </RouterProvider>

    </>
  )
}

export default App
