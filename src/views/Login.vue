<template>
  <b-container
    fluid
    class="h-100 login-background"
  >
    <b-row
      align-h="center"
      class="h-100"
    >
      <b-col
        sm="12"
        md="6"
        lg="6"
        xl="6"
        class="align-self-center"
      >

        <b-card class="shadow">
          <b-card-text>
            <b-container class="mb-5">
              <b-row>
                <b-col>
                  <h3 class="font-weight-bold text-center my-5">Login</h3>
                </b-col>
              </b-row>
              <b-row class="my-2">
                <b-col>
                  <b-form-group
                    id="fieldset-1"
                    label="Nombre"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="name"
                      placeholder="Ingrese su nombre"
                      trim
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="my-2">
                <b-col>
                  <b-form-group
                    id="fieldset-2"
                    label="Contraseña"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="password"
                      trim
                      placeholder="Ingrese su contraseña"
                      type="password"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button
                    href="#"
                    variant="primary"
                    block
                    @click="validateCredentials"
                  >Ingresar</b-button>
                </b-col>
              </b-row>
            </b-container>

          </b-card-text>

        </b-card>
      </b-col>
    </b-row>

    <b-modal
      ref="login-modal"
      centered
      hide-footer
      hide-header
    >
      <b-row>
        <b-col>
          <sweetalert-icon :icon="modalIcon" />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <h4> {{ modalMessage }} </h4>
        </b-col>
      </b-row>
    </b-modal>

  </b-container>

</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data () {
    return {
      name: "",
      password: "",
      modalMessage: '',
      modalIcon: '',
    }
  },
  methods: {
    async validateCredentials () {
      if (this.name != "" || this.password != "") {

        // await axios({
        //   url: "",
        //   method: "GET",
        //   data: { user: this.name, pass: this.password },
        // })
        //   .then(resp => { })
        //   .catch(err => { });


        let returnedData = {
          'name': 'Hebbel',
          'lastName': 'Matter',
          'rol': 'enfermera',
          'AUTH_TOKEN_KEY': 'authToken'
        };

        if (this.$storage.get('currentUser') === '')
          this.$storage.set('currentUser', returnedData)

        this.$swal({
          text: 'Login exitoso',
          toast: true,
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        returnedData['rol'] === 'enfermera' ? this.$router.push({ name: 'HomeContentNurse' }) : this.$router.push({ name: 'Login' });

      }
      else {
        this.modalMessage = 'Debe ingresar el usuario y la contraseña';
        this.modalIcon = 'error';
        this.$refs['login-modal'].show();
      }
    }
  },
  mounted () {
    if (this.$storage.get('currentUser') != '')
      this.$storage.remove('currentUser');

  },


}
</script>

<style scoped lang="scss">
.login-background {
  background-color: #fcfcfc;
}
</style>