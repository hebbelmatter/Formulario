<template>
  <b-container fluid>
    <b-row>
      <b-col
        v-for="(step, key) in steps"
        :key="key"
        class="text-center stepper-cursor"
        :class="[step.number === activeStep ? 'activeClass' : '']"
      >
        <!-- :class="[step.number === activeStep ? 'activeClass' : 'border-bottom border-left', parseInt(step.number) === steps.length ? 'border-right' : '']" -->
        <b-container
          fluid
          class="my-1"
          @click="clickOnStepper(step)"
        >
          <b-row>
            <b-col>
              <span style="font-size: 24px;">
                <i
                  class="mr-2 mb-0"
                  :class="step.icon"
                  style=""
                ></i>
              </span>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              {{step.text}}
            </b-col>
          </b-row>
        </b-container>

      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'Stepper',
  props: {
    activeStep: {
      type: String,
      default: "1"
    }
  },
  data () {
    return {
      steps: [
        { number: '1', text: '1. Información del paciente', icon: 'fas fa-user-edit', path: 'FormularioNurseInformacionPaciente' },
        { number: '2', text: '2. Antecedentes mórbidos y farmacológicos', icon: 'fas fa-weight', path: 'FormularioNurseAntecedentesMorbidos' },
        { number: '3', text: '3. Antecedentes quirúrgicos', icon: 'fas fa-notes-medical', path: 'FormularioNurseAntecedentesQuirurgicos' },
        { number: '4', text: '4. COVID-19', icon: 'fas fa-virus', path: 'FormularioNurseCovid' },
        { number: '5', text: '5. Score C', icon: 'fab fa-reddit-alien', path: 'FormularioNurseScoreC' },

      ]
    }
  },
  methods: {
    clickOnStepper (e) {
      //   console.info('App currentRoute:', this.$router.currentRoute)
      if (this.activeStep != e.number)
        this.$router.push({ name: e.path })

    }
  }

}
</script>

<style scoped lang="scss">
@import "@/sass/vars.scss";

.stepper-cursor {
  cursor: pointer;
  font-size: 12px;
}

.activeClass {
  background-color: $primary;
  color: white;
  border: 1px solid $primary;
}
</style>