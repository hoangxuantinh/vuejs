<template>
  <div class="user-dashboard">
    <div class="list-user-comp">
      <h4>List User</h4>
      <ListUser @user-selected="childrenSelectUser"></ListUser>
    </div>
    <hr />
    <div class="user-detail-comp">
      <h4>User Detail</h4>
      <UserDetail :userDetailInfo="userSelectedFromChild"></UserDetail>
    </div>
  </div>
</template>

<script setup>
import ListUser from "./ListUser.vue";
import UserDetail from "./UserDetail.vue";
import { ref } from "vue";

const userSelectedFromChild = ref({});

function childrenSelectUser(user) {
  console.log(user);
  userSelectedFromChild.value = user;
}
</script>

<style lang="scss" scoped>
.user-dashboard {
  padding: 1rem;
}
</style>
