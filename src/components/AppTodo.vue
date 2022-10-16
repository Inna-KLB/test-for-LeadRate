<script setup>
import PlusIcon from './icons/PlusIcon';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
import AppTodoList from './AppTodoList.vue';
import AppTodoForm from './AppTodoForm.vue';

const store = useStore();

onMounted(async () => {
  await store.dispatch('getTodoList');
});

let todos = computed(() => {
  return store.getters.todoList;
});

const isClosed = ref(true);

</script>

<template>
  <div class="todo">
    <div class="todo__head">
      <h2 class="todo__head-title">
        Мой день
      </h2>

      <button
        class="btn"
        :class="{'btn--closed': isClosed}"
        @click="isClosed = !isClosed"
      >
        <PlusIcon />
      </button>
    </div>
    <!-- /.todo__head -->

    <AppTodoForm
      :is-closed="isClosed" />

    <AppTodoList
      :todos="todos" />
  </div>
</template>
