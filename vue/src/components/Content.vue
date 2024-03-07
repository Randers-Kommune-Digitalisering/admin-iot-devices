<script setup>
defineProps({
  id: {
    type: String,
    required: false
  }
})
</script>
<template>
    <h3 :id="id">
      <slot name="icon"></slot>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
</template>