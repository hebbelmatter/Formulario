<template>
  <b-container class="border rounded shadow mt-5 mb-5 px-4 pb-5">
    <Stepper activeStep="4" />
    <b-row>
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">4. Formulario COVID-19</h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Cuestionario preoperatorio para pacientes durante pandemia COVID 19.</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-3 mb-3">
        <p class="font-weight-normal text-justify mx-2">El cuestionario que usted responderá a continuación es para protegerlo tanto a usted como al
          personal de salud que participará en todo el proceso de su intervención quirúrgica. Rogamos
          entregar datos confiables, para así poder entregarle una atención segura y de calidad en la cirugía y/o procedimiento.</p>
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      class="mt-3"
    >
      <b-col>

        <b-table
          bordered
          striped
          hover
          responsive
          :items="questionsCovid"
          :fields="covidFields"
          class="shadow"
        >

          <template v-slot:cell(index)="data">
            <span>{{ questionsCovid[data.index]['index'] }}</span>
          </template>

          <template v-slot:cell(pregunta)="data">
            <span>{{ questionsCovid[data.index]['question'] }}</span>
          </template>

          <template v-slot:cell(respuesta)="data">
            <b-form-select
              v-model="questionsCovid[data.index]['selected']"
              :options="optionsCovid"
              :disabled="data.index === 6 - 1"
            ></b-form-select>
          </template>

        </b-table>
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
      optionsCovid: ['Sí', 'No'],
      questionsCovid: [
        { 'index': 1, 'question': '¿Ha sido usted diagnosticado de COVID-19?', 'selected': 'No' },
        { 'index': 2, 'question': 'En los últimos 14 días, ¿Ha estado con alguna persona sospechosa o confirmada de COVID-19?', 'selected': 'No' },
        { 'index': 3, 'question': 'En los últimos 14 días, ¿Ha estado con alguna persona que haya sido contacto de un paciente COVID-19?', 'selected': 'No' },
        { 'index': 4, 'question': '¿Ha estado en el extranjero en los últimos 14 días?', 'selected': 'No' },
        { 'index': 5, 'question': '¿Ha realizado Aislamiento Social Preventivo?, si es así ¿Cuántos días?', 'selected': 'No' },
        { 'index': 6, 'question': 'En los últimos 14 días, ¿Ha presentado alguno de los siguientes síntomas?', 'selected': '' },
        { 'index': 7, 'question': 'Fiebre', 'selected': 'No' },
        { 'index': 8, 'question': 'Dolor muscular', 'selected': 'No' },
        { 'index': 9, 'question': 'Tos seca', 'selected': 'No' },
        { 'index': 10, 'question': 'Dolor de cabeza', 'selected': 'No' },
        { 'index': 11, 'question': 'Congestión nasal', 'selected': 'No' },
        { 'index': 12, 'question': 'Dificultad para respirar', 'selected': 'No' },
        { 'index': 13, 'question': 'Diarrea', 'selected': 'No' },
        { 'index': 14, 'question': 'Pérdida del gusto o del olfato', 'selected': 'No' },
        { 'index': 15, 'question': '¿Es funcionario de salud o su trabajo lo expone a algún riesgo de contagio de COVID-19?', 'selected': 'No' },
      ],
      covidFields: [
        {
          key: 'index',
          label: 'N°'
        },
        {
          key: "pregunta",
          label: "Pregunta"
        },
        {
          key: "respuesta",
          label: "Sí/No"
        },
      ],
    }
  }

}
</script>

<style>
</style>