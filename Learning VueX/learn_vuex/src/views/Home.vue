<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <div class="counter">
      <h2>Counter with normal</h2>
      <h1>{{ counter }}</h1>
    </div>
    <div class="button">
      <button @click="decreaseCounter">-</button>
      <button @click="increaseCounter">+</button>
    </div>
    <div class="counter">
      <h2>Counter with VueX</h2>
      <h1>{{ $store.state.counter }}</h1>
    </div>
    <div class="button">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button>
    </div>
    <div class="counter">
      <h2>Counter with VueX using dispatch instead of commit</h2>
      <h1>{{ $store.state.counter }}</h1>
    </div>
    <div class="button">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
