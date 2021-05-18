import React from 'react'
import { Nav, Navbar as BootstrapNavbar } from 'react-bootstrap'
import NavbarLink from './NavbarLink'

const Navbar = () => (
    <BootstrapNavbar bg="dark" variant="dark">
        <Nav className="mr-auto">
            <NavbarLink text='Projects' url='/projects'/>
        </Nav>
    </BootstrapNavbar>
)

export default Navbar