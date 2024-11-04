<template>
  <input v-model="model" type="text" />
</template>

<script setup>
const model = defineModel();
</script>

<!-- code thật sau khi compile -->
<!-- <template>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
    >
  </template>
  
  <script setup>
  defineProps(['modelValue'])
  defineEmits(['update:modelValue'])
  </script> -->
  
