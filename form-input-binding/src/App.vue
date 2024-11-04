<template>
  <div>
    <label for="password">Password:</label>
    <input
      id="password"
      v-model="password"
      :placeholder="placeholder"
      :type="type"
    />
    <p>Tên của bạn là: {{ password }}</p>

    <label>
      <input type="checkbox" v-model="isChecked" />
      Chấp nhận điều khoản
    </label>
    <p>Trạng thái: {{ isChecked ? "Đã chấp nhận" : "Chưa chấp nhận" }}</p>

    <!-- Multiple Checkboxes -->
    <div>
      <label>
        <input type="checkbox" value="HTML" v-model="checkedNames" />
        HTML
      </label>
      <label>
        <input type="checkbox" value="CSS" v-model="checkedNames" />
        CSS
      </label>
      <label>
        <input type="checkbox" value="JavaScript" v-model="checkedNames" />
        JavaScript
      </label>
      <p>Ngôn ngữ bạn chọn: {{ checkedNames.join(", ") }}</p>
    </div>

    <!-- v-model vs component -->
    <div>
      <p>V-model voi Component</p>
      <test-component v-model="message"></test-component>
      <p>Giá trị message: {{ message }}</p>
    </div>

    <!-- <div>
    <test-component 
      :modelValue="message"
      @update:modelValue="$event => (message = $event)"
    ></test-component>
    <p>Giá trị message: {{ message }}</p>
  </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import TestComponent from "../components/TestComponent.vue";

const isChecked = ref(false);

const checkedNames = ref([]);

const password = ref("");
const placeholder = ref("Password của bạn");
const type = ref("password");

const message = ref('');
</script>
