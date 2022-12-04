import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Index from './index/Index'
import Auth from './auth/Auth'
import Patients from './patients/Patients'
import MedFile from './medFile/MedFile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index/>}/>
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/patients" element={<Patients/>}/>
      <Route path="/med-file" element={<MedFile/>}/>
    </>
  )
)

const Routes = () =>
  <RouterProvider router={router}/>

export default Routes