import * as types from './mutation_types';

export default {
  [types.INCREMENT_COUNT](state) {
    state.count += 1;
  },
  getTodoList(state, payload) {
    state.todoList = payload.todoList;
  },
  completeTask(state, payload) {
    state.todoList.forEach(todo => {
      if (todo.id === payload.idTask) {
        let task = todo;
        task.completed = !todo.completed;
      }
    });
  },
  addTask(state, payload) {
    state.todoList.unshift({
      userId: 10,
      id: state.todoList.length,
      title: payload.title,
      completed: false
    });
  }
};
