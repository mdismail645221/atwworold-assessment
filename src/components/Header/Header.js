import { Button } from 'bootstrap';
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/Header.css';
import { FaSistrix } from "react-icons/fa";
import Login from '../../Pages/Login/Login';
import { useState } from 'react';

function Header() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <section>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">ATG.WORLD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='justify-content-evenly flex-grow-1' id="basic-navbar-nav">
                        <div className='navSearchBar'>
                            <div className='navIconInput'>
                                <FaSistrix size={20} />
                                <input className='w-full' type="text" placeholder='Search your favourie group in ATG' />
                            </div>
                        </div>
                        <Nav className='menu'>
                            <NavDropdown className='fs-6' title={<><p className='d-inline'>Create Account <span className='text-primary'>It's free</span></p></>} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => setModalShow(true)}>
                                    Login
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </section>


    );


}

export default Header;