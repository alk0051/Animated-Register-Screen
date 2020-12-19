import React, { useState } from 'react';
import '../styles/pages/Landing.css';
import Modal from 'react-modal'


export default function Landing() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <div className="container">
      <button className="registerButton" onclick={() => setModalIsOpen(true)}>
        <h2>Fazer Cadastro</h2>
      </button>

      <Modal isOpen={modalIsOpen}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>


    </div>
  )
}
