import React from 'react';
import '../App.css';
export const CrudToDoItem = ({data,deleteData,handelChecked}) => {
  const getStyles=()=>{
    return{
      textDecoration: data.completed ? 'line-through' : 'none',
      margin:'20px',
      border:'1px solid #ffffff',
      backgroundColor:'#CCD7E3',
      display:'flex',
      justifyContent: 'space-between'
    }
  }

  return (
      <div style={getStyles()}>
        <input type="checkbox" onChange={(id)=>handelChecked(data.id)}  checked={data.completed}/>
        {data.task}
        <button className='add-btn' onClick={(id)=>deleteData(data.id)}>X</button>
      </div>
  )
};
