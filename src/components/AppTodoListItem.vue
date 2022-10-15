<template>
   <div class="todo__list-item-info">
      <h4 class="todo__list-item-info-title">
        {{ todo.title }}
      </h4>
      <h6 class="todo__list-item-info-description">
        {{ todo.title }}
      </h6>
    </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      requiered: true
    }
  }
};

</script>
