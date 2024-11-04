<script setup>
import { ref } from "vue";
const items = ref(["Apple", "Banana", "Cherry"]);

const items2 = ref([
  { id: 1, name: 'Item 1', value: 'Value 1' },
  { id: 2, name: 'Item 2', value: 'Value 2' },
  { id: 3, name: 'Item 3', value: 'Value 3' },
])

// v-for with computed
const items3 = ref([
  { id: 1, name: 'Item 1', visible: true },
  { id: 2, name: 'Item 2', visible: false },
  { id: 3, name: 'Item 3', visible: true },
]);
const filteredItems = computed(() => items.value.filter(item => item.visible));
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in items2" :key="item.id">
        {{ index + 1 }}. {{ item.name }} - {{ item.value }}
      </li>
    </ul>

    <ul>
      <li v-for="n in 10" :key="n">Number {{ n }}</li>
    </ul>
  </div>
</template>
