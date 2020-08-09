<template>
  <b-container class="border rounded shadow mt-5 px-4">
    <b-row>
      <b-col class="mt-5">
        <h3 class="font-weight-bold">Bienvenido {{ this.name }}</h3>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <p><span>¿Qué acción desea realizar?</span></p>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-container
          fluid
          class="mb-5"
        >
          <b-row class="mt-3">
            <b-col>
              <router-link to="/registro-enfermeria/informacion-paciente">Registrar nuevo paciente</router-link>
            </b-col>
            <b-col>
              <router-link to="/foo">Otras funcionalidades</router-link>
            </b-col>
            <b-col>
              <router-link to="/foo">Otras funcionalidades</router-link>
            </b-col>

          </b-row>
          <b-row class="mt-3">
            <b-col>
              <router-link to="/foo">Otras funcionalidades</router-link>
            </b-col>
            <b-col>
              <router-link to="/foo">Otras funcionalidades</router-link>
            </b-col>
            <b-col>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>

  </b-container>

</template>

<script>
export default {
  data () {
    return {
      name: '',
      lastName: '',
      rol: ''
    }
  },
  mounted () {
    if (this.$storage.get('currentUser') != '') {
      let savedUser = this.$storage.get('currentUser');

      this.name = savedUser.name;
      this.lastName = savedUser.lastName;
      this.rol = savedUser.rol;
    }
  }
}
</script>

<style>
</style>