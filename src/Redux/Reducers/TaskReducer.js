import { ADD, DELETE, DONE, EDIT } from "../Actions/ActionTypes";

const initialState = {
  tasks: [
    {
      id: 1,
      description: "Task 1",
      isDone: true,
    },
    {
      id: 2,
      description: "Task 2",
      isDone: true,
    },
    {
      id: 3,
      description: "Task 3",
      isDone: true,
    },
  ],
};
const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      let addTask = (task) => {
        task.id = state.tasks[state.tasks.length - 1].id + 1;
        state.tasks.push(task);
      };
    case EDIT:
      return;
    case DELETE:
      return state;
    case DONE:
      return state;
    default:
      return state;
  }
};

export default TaskReducer;
