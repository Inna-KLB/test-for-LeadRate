<template>
  <transition name="slide-fade">
    <form
      v-show="isClosed"
      class="todo__form"
    >
      <input
        type="text"
        class="form-control"
        placeholder="Текст задания..."
      >
    </form>
  </transition>
</template>

<script>
export default {
  props: {
    isClosed: {
      type: Boolean,
      requiered: true
    }
  }
};

</script>
