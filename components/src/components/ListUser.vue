<template>
  <div class="list-user">
    <table class="tbl-list-user">
      <thead>
        <th>Name</th>
        <th>Location</th>
        <th>DOB</th>
      </thead>
      <tbody>
        <tr v-for="user in userData">
          <!-- This line below -->
          <td>
            <a @click="selectUser(user)"
              >{{ user.name.title }} - {{ user.name.last }}
              {{ user.name.first }}</a
            >
          </td>
          <td>{{ user.location.city }}</td>
          <td>{{ user.dob.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import data from "./data.json";

// This line
const emit = defineEmits(["userSelected"]);
const userData = ref(data);

// And this line
function selectUser(user) {
  emit("userSelected", user);
}
</script>

<style lang="scss" scoped>
.tbl-list-user {
  width: 100%;
}
</style>
