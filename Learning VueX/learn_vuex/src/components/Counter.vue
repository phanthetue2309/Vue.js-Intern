<template>
  <div :style="{ color: $store.state.colorCode }" class="counter">
    <h2>Counter from another components</h2>
    <h1>{{ $store.state.counter }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
