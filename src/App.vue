<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from "./pages/Dashboard.vue";

export default {
  name: "App",
  components: { Dashboard },
};
</script>

<style>
.textlink {
  color: rgb(235, 228, 228);
}
.textlink:hover {
  color: whitesmoke;
}
/* #app {
  background-color: aqua;
} */
</style>
