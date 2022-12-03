import React from 'react'
import Container from 'react-bootstrap/Container'
import {Navbar as BootstrapNavbar} from 'react-bootstrap'

const Navbar = () => {
  return (
    <BootstrapNavbar bg="light">
      <Container>
        <BootstrapNavbar.Brand>DamuAsk</BootstrapNavbar.Brand>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar