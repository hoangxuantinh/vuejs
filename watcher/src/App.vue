<script setup lang="ts">
/* Note: 
 - computed chỉ dùng để tính toán các giá trị đơn thuần từ reactive state
 - sẽ có những TH ta cần thực hiện side effect khi reactive change (call api, DOM API)
*/
import { computed, ref, watch, watchEffect } from "vue";

const count = ref(0);
const count2 = ref(0);

const increase = () => {
  count2.value++;
};

// watch sẽ chạy khi bất kì source nào thay đổi
// watch([count, count2], () => {
//   console.log(count.value);
//   console.log(count2.value);
// });

/* source phải là 1 reactive => nếu truyền vào source là 1 giá trị thì watch sẽ k work
  watch(count.value, () => {
    console.log(count.value);
    console.log(count2.value);
  });
*/

watch([count], (newValue, oldValue) => {
  console.log("🚀 ~ watch ~ oldValue:", oldValue);
  console.log("🚀 ~ watch ~ newValue:", newValue);
});

// deep watch, 
const state = ref({
  a: {
    b: {
      c: {
        d: 1
      }
    }
  }
})

// watch(state, (current) => {
//   console.log(current)
// }, { 
//     deep: true , 
//     // có những trường hợp ta muốn vừa vô phát là watch chạy ngay phát đầu kể cả state chưa đổi -> eager load
//     immediate: true
// })


/* watchEffect()
  - không có source nữa, mà chỉ còn callback thôi, và callback này chạy ngay lập tức giống như option immediate: true
  - Vue sẽ tự theo dõi tất cả những reactive state mà ta có ở trong cái callback luôn.
*/
const count3 = ref(1)
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${count.value}`
  )
  const json = await response.json()
  console.log(json)
})
function updateCount() {
  count3.value++
}

/* Note: - Vue sẽ theo dõi tất cả các reactive state mà ở callback ta truyền vào watchEffect() trong quá trình thực thi đồng bộ (sync), 
      do vậy với các reactive state mà được truy cập sau await đầu tiên thì Vue sẽ không track được
*/

// Case 1: count5 thay đổi watchEffect sẽ không chạy
// vì count4 được truy cập sau await đầu tiên
const count4 = ref(1)
const count5 = ref(1)

watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${count4.value}`
  )
  const json = await response.json()
  console.log(json)
  console.log(count5.value, '++++')
})

const updateCount5 = () => {
  count5.value++
}


// Case 2: tương tự trường hợp này cũng sẽ không chạy khi count5 thay đổi
watchEffect(async () => {
  fetch(
    `https://jsonplaceholder.typicode.com/todos/${count4.value}`
  ).then(res => res.json())
  .then(json => {
    console.log(json)
    console.log(count5.value, '++++')
  })
})


// Case 3: ✅ Chạy khi count5 thay đổi vì ta truy cập count5 trước await đầu tiên
watchEffect(async () => {
  // tracking all reactive , include in logs
  console.log(count5.value, '++++')
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${count4.value}`
  )
  const json = await response.json()
  console.log(json)
})

/*
 * Summary:
 * watch(): 
   - chỉ track những thứ ta khai báo ở source, không track có gì bên trong callback, 
        tách biệt 2 phần rõ rệt: source và callback. Kiểu này sẽ cho ta kiểm soát được chính xác những gì ta cần watch,
          và khi nào thì cái callback sẽ chạy
  * watchEffect(): 
   - kiểu này thì gộp cả 2 phần bên trên của watch() lại làm một (tracking cả 2 phần source và cb lun)
     code sẽ (có thể) gọn hơn và tiện hơn
 */


/* When you mutate reactive state, it may trigger both Vue component updates and watcher callbacks created by you
   - Thông thường cb sẽ chạy trước Vue component updates
   - Nếu ta muốn callback được chạy sau khi Vue update component thì ta chỉ cần thêm option { flush: 'post' }
   ==> watchPostEffect(() => ()})
*/


/* Stop watcher */





</script>

<template>
  <p>Watcher trong vue</p>
  <p>{{ count }}</p>
  <button @click="increase">Increase</button>
  <button @click="updateCount5">Update Count 5</button>
</template>

<style scoped></style>
