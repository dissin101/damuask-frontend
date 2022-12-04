import React from 'react'
import Container from 'react-bootstrap/Container'
import {Navbar as BootstrapNavbar} from 'react-bootstrap'

const Navbar = ({user}) => {
  return (
    <BootstrapNavbar bg="light">
      <Container>
        <BootstrapNavbar.Brand>DamuAsk</BootstrapNavbar.Brand>
        <BootstrapNavbar.Text>
          <div>
            <span>ИИН:</span>{' '}
            <span className={'text-black'}>{user.username}</span>
          </div>
          <div>
            <span>ФИО:</span>{' '}
            <span className={'text-black'}>{user.fio}</span>
          </div>
        </BootstrapNavbar.Text>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar