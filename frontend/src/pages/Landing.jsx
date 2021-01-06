import React, { useState } from 'react';
import '../styles/Landing.css';
import Modal from 'react-modal';
import Register from '../components/Register';
import Login from '../components/Login';

export default function Landing() {
  const [modalRegisterIsOpen, setRegisterIsOpen] = useState(false);
  const [modalLoginIsOpen, setLoginIsOpen] = useState(false);

  function openModalRegister() {
    setRegisterIsOpen(true);
  }

  function openModalLogin() {
    setLoginIsOpen(true);
  }

  function closeModals() {
    setRegisterIsOpen(false);
    setLoginIsOpen(false);
  }


  return (
    <div className="container-wrapper">
      
      <div className="container">
        <button className="registerButton" onClick={openModalRegister}>
          <h2>Criar conta</h2>
        </button>

        <button className="loginButton" onClick={openModalLogin}>
          <h2>Entrar</h2>
        </button>

        <Modal className="modal" isOpen={modalRegisterIsOpen}>
          <div className="modal-container-register">
            <Register />
            <button className="close-modal-button" onClick={closeModals}>
              x
            </button>
          </div>
        </Modal>

        <Modal className="modal" isOpen={modalLoginIsOpen}>
          <div className="modal-container-login">
            <Login />
            <button className="close-modal-button" onClick={closeModals}>
              x
            </button>
          </div>
        </Modal>
     
      </div>
    </div>
  )
}
