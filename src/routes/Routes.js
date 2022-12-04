import {
  createBrowserRouter,
  createRoutesFromElements, Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Auth from './auth/Auth'
import Patients from './patients/Patients'
import MedFile from './medFile/MedFile'

const Routes = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="*"
          element={<Navigate to="/" replace/>}
        />
        <Route path="/" element={<Patients/> }/>
        <Route path="/med-file" element={<MedFile/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </>
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes