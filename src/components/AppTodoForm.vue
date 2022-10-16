<template>
  <transition name="slide-fade">
    <form
      v-show="!isClosed"
      class="todo__form"
      @submit.prevent="addTaskTodo"
    >
      <input
        v-model="addTaskInput"
        type="text"
        class="form-control"
        placeholder="Текст задания..."
      >
    </form>
  </transition>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
  props: {
    isClosed: {
      type: Boolean,
      requiered: true
    }
  },
  setup() {
    let addTaskInput = ref('');
    const store = useStore();

    const addTaskTodo = () => {
      store.commit('addTask', {
        title: addTaskInput.value
      });
      addTaskInput.value = '';
    };

    return {
      addTaskInput,
      addTaskTodo
    };
  }
};

</script>
