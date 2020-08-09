<template>
  <b-container class="border rounded shadow mt-5 mb-5 px-4">
    <Stepper activeStep="4" />
    <b-row>
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">4. Formulario COVID-19</h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Cuestionario preoperatorio para pacientes durante pandemia COVID 19</h4>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import Stepper from '@/components/Stepper.vue'

export default {
  name: 'FormularioNurseCovid',
  components: {
    Stepper,
  },
  data () {
    return {



    }
  }

}
</script>

<style>
</style>