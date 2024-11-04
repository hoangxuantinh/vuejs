<template>
  <div>
    <button @click="nextStep">Next Step</button>
    <p v-if="step === 1">Step 1: Introduction</p>
    <p v-else-if="step === 2">Step 2: Setup</p>
    <p v-else-if="step === 3">Step 3: Execution</p>
    <p v-else>All steps completed!</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const step = ref(1);

function nextStep() {
  if (step.value < 4) {
    step.value++;
  } else {
    step.value = 1;
  }
}
</script>
