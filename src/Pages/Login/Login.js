import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../Login/Login.css';
import { BsFacebook, BsGoogle }  from 'react-icons/bs';
import RgLogo from '../../assets/images/LoginLogo.png'
import Register from '../Register/Register';

function Login (props) {
    // console.log(props)
    const [modalShow, setModalShow] = useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div>
                <p className='text-success text-center py-2'>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
            
            <Modal.Header closeButton>
                <div className='w-100 d-flex justify-content-between align-items-center'>
                    <h3>Sign In</h3>
                    <p className='m-0' style={{ color: '#3D3D3D' }}>Don’t have an account yet?  <span style={{ cursor: 'pointer', color: '#2F6CE5' }} onClick={() => setModalShow(true)}>Create new for free!</span></p>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='formContainer col-md-6'>
                        <form action="">
                            
                            <div>
                                <input className='w-100 py-2' type="email" placeholder='email' />
                            </div>
                            <div>
                                <input className='w-100 py-2' type="password" name="password" placeholder='password' />
                            </div>
                        </form>

                        {/* facebook btn */}
                        <div className='googleBtn'>
                            <span><BsFacebook size={25} className="text-primary me-2" /> Sign Up with Facebook</span>
                        </div>
                        {/* google btn */}
                        <div className='facebookBtn'>
                            <span><BsGoogle size={25} className="me-2"  /> Sign Up with Facebook</span>
                        </div>
                    </div>
                    {/* REG LOGO AREA */}
                    <div className='col-md-6'>
                        <img className='img-fluid' src={RgLogo} alt="rg logo" />
                        <p style={{fontSize: '12px'}}>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>
            </Modal.Body>

            <Register
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Modal>
    );
}

export default Login;