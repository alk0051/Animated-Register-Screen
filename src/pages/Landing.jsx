import React, { useState } from 'react'
import '../styles/pages/Landing.css'
import Modal from 'react-modal'
import Register from '../components/Register'


export default function Landing() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <button className="registerButton" onClick={openModal}>
        <h2>Fazer Cadastro</h2>
      </button>

      <Modal isOpen={modalIsOpen}>
        <Register />
      </Modal>

    </div>
  )
}
