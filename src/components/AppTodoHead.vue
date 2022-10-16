<template>
  <div class="todo__head">
    <h2 class="todo__head-title">
      Мой день
    </h2>

    <button
      class="btn"
      :class="{'btn--closed': isClosed}"
      @toggle-form="toggleClose"
    >
      <PlusIcon />
    </button>
  </div>
</template>

<script>
import PlusIcon from './icons/PlusIcon';

export default {
  components: { PlusIcon },
  props: {
    isClosed: {
      type: Boolean,
      requiered: true
    }
  },
  emits: ['toggleForm'],
  created() {
    this.$emit('toggleForm');
  }
};
</script>
