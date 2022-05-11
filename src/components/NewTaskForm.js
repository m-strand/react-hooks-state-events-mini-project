import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  //need to exclude the "All" category!!

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.map((category) => {
            <option value={category}>{category}</option>
          })};
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
