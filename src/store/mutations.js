import * as types from './mutation_types';

export default {
  [types.INCREMENT_COUNT](state) {
    state.count += 1;
  },
  getTodoList(state, payload) {
    state.todoList = payload.todoList;
  }
};
