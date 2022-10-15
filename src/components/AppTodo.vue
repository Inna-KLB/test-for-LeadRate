<script setup>
import PlusIcon from './icons/PlusIcon';
import { useStore } from 'vuex';
import { ref, onMounted, computed } from 'vue';
import AppTodoForm from './AppTodoForm.vue';
import AppTodoList from './AppTodoList.vue';

const store = useStore();

onMounted(async () => {
  await store.dispatch('getTodoList');
});

const todos = computed(() => {
  return store.getters.todoList;
});

const isClosed = ref(false);

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
      :todos="todos"  />
  </div>
</template>
