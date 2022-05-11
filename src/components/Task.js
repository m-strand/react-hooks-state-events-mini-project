import React, { useState } from "react";
//delete task when button is clicked
function Task({category, key, handleDeleteClick}) {
 
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{key}</div>
      <button className="delete" onclick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
