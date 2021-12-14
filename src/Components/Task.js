import React from "react";
import "./Task.css";
// import Button from "react-bootstrap";
import { Button } from "react-bootstrap";
const Task = ({ task }) => {
  return (
    <div>
      <Button variant="primary"> {task.description}</Button>
    </div>
  );
};

export default Task;
