import React from 'react'
import { ThemeProvider } from 'react-bootstrap'
import Navbar from './components/Navbar'

const MainLayout = ({ children }) => {
  
  /* TODO plug for auth state */
  const isAuth = true
  
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