<template>
  <div class="todo__list">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="todo__list-item"
      :class="{'todo__list-item_completed': todo.completed}"
      @click="toggleTask(todo.id)"
    >
      <AppTodoListItem
        :todo="todo" />
    </div>
  </div>
</template>

<script>
import AppTodoListItem from './AppTodoListItem.vue';
import { useStore } from 'vuex';

export default {
  components: { AppTodoListItem },
  props: {
    todos: {
      type: Array,
      requiered: true
    }
  },
  setup() {
    const store = useStore();

    const toggleTask = ((id) => {
      store.commit('completeTask', {
        idTask: id
      });
    });

    return {
      toggleTask
    };
  }
};

</script>
