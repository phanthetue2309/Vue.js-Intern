<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam,
      suscipit nobis molestias quo est soluta assumenda commodi deleniti beatae
      explicabo quasi. Fuga exercitationem quos porro vel repudiandae doloremque
      debitis!
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
