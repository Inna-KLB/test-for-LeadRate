<template>
  <div class="todo__list">
    <div
      v-for="todo in todos"
      :key="todo.id"
      class="todo__list-item"
      :class="{'todo__list-item_completed': todo.completed}"
    >
      <AppTodoListItem
        :todo="todo" />
    </div>
  </div>
</template>

<script>
import AppTodoListItem from './AppTodoListItem.vue';
export default {
  components: { AppTodoListItem },
  props: {
    todos: {
      type: Array,
      requiered: true
    }
  }
};

</script>
