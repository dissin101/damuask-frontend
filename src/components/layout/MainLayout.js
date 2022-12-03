import React from 'react'
import { ThemeProvider } from 'react-bootstrap'
import Navbar from './components/Navbar'

const MainLayout = ({children}) => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Navbar />
      {children}
    </ThemeProvider>
  )
}

export default MainLayout