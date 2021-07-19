import {React} from 'react';
import './Modal.css';

export const Modal=({children,closeModal,isOpen})=>{
    //para que los hijos no hereden lo del padre que cierre el modal con closeModal en el article
    const handleModalContainerClick=(e)=> e.stopPropagation();
    return(
        <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
            <div className='modal__container' onClick={handleModalContainerClick}>
                <button onClick={closeModal} className='modal__close'>X</button>
                <div className='overflow'>
                    {children}
                </div>
            </div>
        </article>
    )
}