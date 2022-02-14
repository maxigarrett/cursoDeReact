import React from 'react';
import { CrudToDoItem } from './CrudToDoItem';


export const CrudToDoList = ({data,deleteData,handelChecked}) => {
    if(!data) return null
    return (
        <>
            {data && data.map((el,index)=><CrudToDoItem key={index}data={el} handelChecked={handelChecked} deleteData={deleteData}/>)}
        </>
    )
};
