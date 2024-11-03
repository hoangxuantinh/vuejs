<script setup lang="ts">
import { computed, ref } from "vue";

const isActive = ref(false);
const hasError = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}

function toggleError() {
  hasError.value = !hasError.value;
}

const computedClasses = computed(() => {
  return {
    active: isActive.value,
    "error-class": hasError.value,
  };
});
</script>

<template>
  <p>Class And Style Binding</p>
  <!-- binding with object -->
  <!-- <div :class="{ active: isActive, 'error-class': hasError }">
    Class Binding Example
  </div> -->

  <!-- binding with computed class -> recommend  -->
  <!-- <div :class="computedClasses">
    Class Binding Example
  </div> -->


  <!-- binding with array -->
  <!-- <div :class="[isActive ? 'active' : '', hasError ? 'error-class' : '']">
    Class Binding Example
  </div> -->

  <!-- binding with Ternary Operator -->
  <div :class="isActive ? 'active' : 'inactive'">
    Ternary Operator Class Binding Example
  </div>

  <!-- combine class and style binding -->
  <!-- <div :class="{ highlighted: isHighlighted }" :style="{ backgroundColor: bgColor }">
    Combined Class and Style Binding Example
  </div> -->

  <button @click="toggleActive">Toggle Active</button>
  <button @click="toggleError">Toggle Error</button>
</template>

<style scoped>
.active {
  background-color: blue;
  color: white;
}

.error-class {
  background-color: red;
  color: white;
}
</style>
