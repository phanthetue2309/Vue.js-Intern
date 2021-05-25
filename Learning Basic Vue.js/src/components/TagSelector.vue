<template>
  <div class="list">
    <div
      v-for="(language, index) in languages"
      :key="index"
      @click="language.selected = !language.selected"
      :class="{ selected: language.selected }"
    >
      <!-- gán class selected để làm style phía bên dưới  -->

      <span> {{ language.name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
      languages: [
        { name: "php", selected: false },
        { name: "java", selected: false },
        { name: "python", selected: false },
        { name: "C#", selected: false },
        { name: "C++", selected: false },
        { name: "Ruby", selected: false },
      ],
    };
  },
};
</script>

<style scoped>
.list div {
  display: inline-block;
  border: 1px solid #ebebeb;
  padding: 4px 15px;
  margin-right: 5px;
  border-radius: 4px;
}
.list div.selected {
  background-color: aquamarine;
}
</style>
