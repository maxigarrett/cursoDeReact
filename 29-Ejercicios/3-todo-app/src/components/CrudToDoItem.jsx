import React from "react";
import "../App.css";
export const CrudToDoItem = ({ data, deleteData, handelChecked }) => {
  const getStyles = () => {
    return {
      textDecoration: data.completed ? "line-through" : "none",
      margin: "20px",
      background: "#c4c3c4",
      display: "flex",
      justifyContent: "space-between",
    };
  };

  return (
    <div style={getStyles()}>
      <input
        type="checkbox"
        onChange={(id) => handelChecked(data.id)}
        checked={data.completed}
      />
      <p>{data.task}</p>
      <button className="add-btn" onClick={(id) => deleteData(data.id)}>
        X
      </button>
    </div>
  );
};
