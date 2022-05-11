import React, { useState } from "react";
import Task from "./Task.js";
import NewTaskForm from "./NewTaskForm";


function TaskList({TASKS}) {

   //task list delete filter function
  const [tasksList, setTasksList] = useState({TASKS});
  
  function handleDeleteClick (key) {
    const newTaskList = tasksList.filter((task) =>{task.key !== key});
    setTasksList(newTaskList);
  }


  //category filter functions
  const[selectedCategory, setSelectedCategory] = useState("All");
  

  function handleCatClick (e) {
    setSelected(!buttonSelected);
    setSelectedCategory(e.target.innerHTML);
  };

  const taskListFiltered = tasksList.filter((task) => {
    if (selectedCategory === "All") return true;

    return task.category === selectedCategory;
  });


  //new task form functions
  const [taskCategory, setCategory] = useState("");
  const [taskText, setText] = useState("");
  
  function handleCategory (e) {
    setCategory(e.target.value);
  };

  function handletext(e) {
    setText(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      key: taskText,
      category: taskCategory,
    };
    const newTasksArr = [...tasksList, newTask];
    setTasksList(newTasksArr);
  };

  return (
    <div className="tasks">
      <NewTaskForm onTaskFormSubmit={handleSubmit}/>
      <CategoryFilter onButtonClick={handleCatClick} />
      {taskListFiltered.map((task) => {
        <Task category={task.category} key={task.text} handleDeleteclick={onDeleteClick}/>
      })}; 
    </div>
  );
}

export default TaskList;
