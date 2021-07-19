import { useState } from "react";

export const useModal=(initialModalValue=false)=>{
    const [openModal,setOpenModal]=useState(initialModalValue)

    const visibleModal=()=>setOpenModal(true)
    const hiddenModal=()=>setOpenModal(false)

    //en ves de retornar un obj como hacemos simpre lo retornamos como array asi podemos llamarlo
    //donde usemos este hook como querramos osea y ara referencia a a como lo allamos retornado
    //osea isopenModal1 hace referencia a a openModal y openModal1 a visibleModal
    //const [isOpenModal1,openModal1,closeModal1]=useModal(false)
    return[
        openModal,
        visibleModal,
        hiddenModal
    ]
}