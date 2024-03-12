<template>
  <div id="app">
    <user-management-component-vue></user-management-component-vue>
  </div>
</template>

<script>
import UserManagementComponentVue from "./components/UserManagementComponent.vue";

export default {
  name: "App",
  components: { UserManagementComponentVue },
};
</script>

<style>
</style>
