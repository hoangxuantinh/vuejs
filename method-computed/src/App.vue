<script setup lang="ts">
import { computed, ref } from "vue";
// const message = ref("My message");
// const changeMessage = (first: string, second: string) => {
//   message.value = `${first}-${second} Change Message Success!`;
// };
const changeMessage = (event: any) => {
  console.log(event)
};

const age = ref(16)
const count = ref(0)

// computed ở đây khá giống với useMemo
const message = computed(() => {
  console.log(count)
  // tracking reactive được change trong hàm getter()
  return age.value >= 50 ? 'Senior' : age.value > 25 && age.value < 50 ? 'Adult' : 'Young'
})
const updateAge = () => {
  age.value = 50
  count.value++
}

/* Writable computed
  const msg = computed({
    get() {
      return age.value >= 50 ? 'Senior' : age.value > 25 && age.value < 50 ? 'Adult' : 'Young'
    },
    // setter
    set(value) {
      age.value = value * 2
    }
  })
*/

</script>

<template>
  <p>Method and Computed</p>
  <p>{{ message }}</p>
  <!-- <button @click="changeMessage($event)">Change Message</button> -->
  <button @click="updateAge">Change Message</button>
</template>

<style scoped></style>
