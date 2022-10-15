export default {
  async getTodoList(context) {
    try {
      let responce = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todoList = await responce.json();
      context.commit('getTodoList', { todoList });
    } catch (err) {
      console.log(err);
    }
  }
};
