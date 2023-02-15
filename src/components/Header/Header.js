import { Button } from 'bootstrap';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/Header.css'

function Header() {
    return (
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home">ATG.WORLD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-evenly flex-grow-1' id="basic-navbar-nav">
                    <div className='navSearchBar'>
                        <input className='w-full' type="text" placeholder='Search your favourie group in ATG' />
                    </div>
                    <Nav className='menu'>
                        <NavDropdown className='fs-6' title={<><p className='d-inline'>Create Account <span>It's free</span></p></>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">
                               Login
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;