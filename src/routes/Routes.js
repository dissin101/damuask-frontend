import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Index from './index/Index'
import Auth from './auth/Auth'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </>
  )
)

const Routes = () =>
  <RouterProvider router={router}/>

export default Routes