import React, { useEffect } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import Navbar from './components/Navbar'
import { getFromLocalStorage } from '../../utils/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserInfoMutation } from '../../store/auth/authService'
import { setUserData } from '../../store/auth/authSlice'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const userId = getFromLocalStorage('token')
  
  const [getInfo, {
    isLoading: isLoadingGetInfo,
    error: errorGetInfo,
    data: getInfoData
  }] = useGetUserInfoMutation()
  
  useEffect(() => {
    if (userId){
      getInfo(userId)
    }
  }, [userId])
  
  useEffect(() => {
    if (getInfoData){
      dispatch(setUserData(getInfoData))
    }
  }, [getInfoData])
  
  const isAuth = Boolean(useSelector((state) => state.auth.user))
  
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      { isAuth &&
        <Navbar />
      }
      {children}
    </ThemeProvider>
  )
}

export default MainLayout