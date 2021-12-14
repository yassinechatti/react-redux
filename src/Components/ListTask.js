import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  //   const dispatch = useDispatch();
  return (
    <div className="Button">
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default ListTask;
