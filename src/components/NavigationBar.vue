<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
    class="border shadow"
    sticky
  >
    <b-navbar-brand href="/registro-enfermeria/home">Home</b-navbar-brand>

    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-nav-item href="/">Cerrar sesión</b-nav-item>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavigationBar',

}
</script>

<style>
</style>