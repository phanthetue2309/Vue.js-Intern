<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <h1>Import From another Component</h1>
    <Counter />
    <h1>Using in this Component</h1>
    <div :style="{ color: $store.state.colorCode }" class="counter">
      <h2>Counter with normal</h2>
      <h1>{{ counter }}</h1>
    </div>

    <div class="button">
      <button @click="decreaseCounter">-</button>
      <button @click="increaseCounter">+</button>
    </div>
    <div class="counter">
      <h2>Counter with VueX commit</h2>
      <h1>{{ $store.state.counter }}</h1>
    </div>
    <div class="button">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <!-- <button @click="$store.commit('increaseCounter')">+</button>-->
      <!-- when using mutations we use commit      -->
      <!-- when using actions we use dispatch     -->
    </div>
    <div class="button">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>

    <div class="counter-squared">
      <h1>Counter Square</h1>
      {{ $store.state.counter }}
      <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>

    <div>
      <h1>Two Way Binding with Input</h1>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
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
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        // this.$store.commit("setColorCode", newValue);
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
  components: {
    HelloWorld,
    Counter,
  },
};
</script>
