// import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet} from 'react-router-dom'
import { Theme } from './providers/Theme'
import Modal from './modal/Modal'
import { useState } from 'react'
import ModalForm from './modal/ModalForm'

const MainLayout = () => {
  const [isModalOpen, setModalOpen] = useState (false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Theme>
      <Header openModal={openModal}/>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalForm closeModal={closeModal} /> 
      </Modal>
      <Outlet />
      <Footer/>
    </Theme>
    
  )
}

export default MainLayout
