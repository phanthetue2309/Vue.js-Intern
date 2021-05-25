<template>
  <div class="task">
    <span> {{ taskData.content }}</span>
    <!-- taskData.content là khi gán bởi tasks2 của bên kia có atrribute contents -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {},
  //   props: ["taskData"],
  props: {
    taskData: {
      type: Object,
      default: function() {
        return {};
      }, // nếu như bên ngoài ko truyền vào thì sẽ lấy mặc định
    },
  },
  methods: {
    deleteTask: function() {
      console.log(this.taskData); // sử dụng được với this tương tự như bên App.vue
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
