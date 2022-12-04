import {
  createBrowserRouter,
  createRoutesFromElements, Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Index from './index/Index'
import Auth from './auth/Auth'
import Patients from './patients/Patients'
import { useSelector } from 'react-redux'

const Routes = () => {
  
  const isAuth = Boolean(useSelector((state) => state.auth.user))
  
  let router;
  
  if (isAuth){
    router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Index/>}/>
          <Route path="/patients" element={<Patients/>}/>
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
  
  /*const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Index/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/patients" element={<Patients/>}/>
      </>
    )
  )*/
  
  return(
    <RouterProvider router={router}/>
  )
}

export default Routes