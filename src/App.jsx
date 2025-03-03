import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import Citys from "./pages/Citys"

import StandarLayout from './layaut/StandarLayaut'

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
        }
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
