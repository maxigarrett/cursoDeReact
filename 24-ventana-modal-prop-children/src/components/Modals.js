// las prop children poedes meter contenido adentro ademas del que ya trae por defecto.
import {React} from 'react';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';
import { ContactForm } from './ContactForm';
export const Modals=()=>{
    //----------------------------IMPORTANTE---------------------------------------
    //podemos llamar a las variables como querramos pero hacen referencia a el posicionamiento a como
    //las retornamos osea isOpenModal1 hace referencia a openModal de useModal.js y openModal1 avisibleModal
    //solo funciona en useModal lo retornamos como array. si lo hacemos como obj no funciona este referenciado
    const [isOpenModal1,openModal1,closeModal1]=useModal(false)
    const [isOpenModal2,openModal2,closeModal2]=useModal(false)
    const [isOpenModalForm,openModalForm,closeModalForm]=useModal(false)
    return(
        <section>
            <header>
                <h1>Modals y Props children</h1>
            </header>
            <button onClick={openModal1}>Modal 1</button>
            <Modal closeModal={closeModal1} isOpen={isOpenModal1}>
                <h3>Modal 1</h3>
                <p>este es el contenido de mi modal 1</p>
                <img src='https://placeimg.com/300/300/animals' alt='animals'/>
            </Modal>
            <button onClick={openModal2}>Modal 2</button>
            <Modal closeModal={closeModal2} isOpen={isOpenModal2}>
                <h3>Modal 1</h3>
                <p>este es el contenido de mi modal 1</p>
                <img src='https://placeimg.com/300/300/person' alt='person'/>
            </Modal>
            <button onClick={openModalForm}>Modal form</button>
            <Modal closeModal={closeModalForm} isOpen={isOpenModalForm}>
                <ContactForm/>
            </Modal>
        </section>
    )
}