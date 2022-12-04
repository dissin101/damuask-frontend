import {
  createBrowserRouter,
  createRoutesFromElements, Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Index from './index/Index'
import Auth from './auth/Auth'
import Patients from './patients/Patients'
import MedFile from './medFile/MedFile'

import { useSelector } from 'react-redux'

const Routes = () => {
  
  const isAuth = Boolean(useSelector((state) => state.auth.user))
  
  let router;
  
  if (isAuth){
    router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Patients/>}/>
          <Route path="/med-file" element={<MedFile/>}/>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </>
      )
    )
  } else {
    router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/auth" element={<Auth/>}/>
          <Route
            path="*"
            element={<Navigate to="/auth" replace />}
          />
        </>
      )
    )
  }
  
  return(
    <RouterProvider router={router}/>
  )
}

export default Routes