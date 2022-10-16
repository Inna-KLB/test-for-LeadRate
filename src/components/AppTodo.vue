<script setup>
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
import AppTodoList from './AppTodoList.vue';
import AppTodoForm from './AppTodoForm.vue';
import AppTodoHead from './AppTodoHead.vue';

const store = useStore();

onMounted(async () => {
  await store.dispatch('getTodoList');
});

let todos = computed(() => {
  return store.getters.todoList;
});

let isClosed = ref(false);

const deleteCompletedTasks = () => {
  store.commit('deleteCompletedTasks');
};

const toggleForm = () => {
  isClosed.value = !isClosed.value;
};
</script>

<template>
  <div
    class="todo"
    @keyup.delete="deleteCompletedTasks"
  >
    <AppTodoHead
      :is-closed="isClosed"
      @click="toggleForm"
    />

    <AppTodoForm
      :is-closed="isClosed"
    />

    <AppTodoList
      :todos="todos"
    />
  </div>
</template>
