<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div>
      <button
        v-show="string.includes(substring)"
        class="mt-3 ml-3 dbuton rbuton text-sm"
      >
        LOGIN
      </button>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Parent",
  data() {
    return {
      string: "login albums:read",
      substring: "login",
    };
  },
  beforeCreate() {
    console.log("Parent beforeCreate()");
  },
  created() {
    console.log("Parent created()");
    if (this.string.includes(this.substring)) {
      console.log("Contains");
    }
  },
  beforeMount() {
    console.log("Parent beforeMount()");
  },
  mounted() {
    console.log("Parent mounted()");
  },
  beforeUpdate() {
    console.log("Parent beforeUpdate()");
  },
  updated() {
    console.log("Parent updated()");
  },
  beforeUnmount() {
    console.log("Parent beforeUnmount()");
  },
  unmounted() {
    console.log("Parent unmounted()");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
