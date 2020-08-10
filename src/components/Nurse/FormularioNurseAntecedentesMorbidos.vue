<template>
  <b-container class="border rounded shadow mt-5 mb-5 px-4">
    <Stepper activeStep="2" />
    <b-row>
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">2. Antecedentes Mórbidos</h3>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Antecedentes mórbidos</h4>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-3 mb-3">
        <h5 class="font-weight-bold">Enfermedad cardiovascular</h5>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">HTA: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedHTA"
          :options="patient.optionsHTA"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedHTA === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para HTA? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.htaMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de medicamentos: {{ medicationsQuantity(patient.htaMedications) }}</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">DM: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDM"
          :options="patient.optionsDM"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedDM === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Hipoglimiantes Orales: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedUseHipoglicemianteOral"
          :options="patient.optionsUseHipoglicemianteOral"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedDM === 'Sí' && patient.selectedUseHipoglicemianteOral === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">Indique hipoglicemiantes orales utilizados: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.hipoglicemiantesOralesMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de hipoglicemiantes: {{ medicationsQuantity(patient.hipoglicemiantesOralesMedications) }}</span>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedDM === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Insulina: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedInsulina"
          :options="patient.optionsInsulina"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedDM === 'Sí' && patient.selectedInsulina === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">Indique insulinas utilizadas: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.insulinaMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de insulinas: {{ medicationsQuantity(patient.insulinaMedications) }}</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">IAM: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedIAM"
          :options="patient.optionsIAM"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedIAM === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para IAM? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.iamMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de medicamentos: {{ medicationsQuantity(patient.iamMedications) }}</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Enfermedad coronaria: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedCoronaryDisease"
          :options="patient.optionsCoronaryDisease"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedCoronaryDisease === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para enfermedad coronaria? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.iamMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de medicamentos: {{ medicationsQuantity(patient.coronaryDiseaseMedications) }}</span>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Enfermedad pulmonar</h5>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Asma: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedAsthma"
          :options="patient.optionsAsthma"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedAsthma === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para el asma? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.asthmaMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de medicamentos: {{ medicationsQuantity(patient.asthmaMedications) }}</span>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedAsthma === 'Sí' && medicationsQuantity(patient.asthmaMedications) > 0">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Frecuencia de uso: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedUseMedicationsAsthma"
          :options="patient.optionsUseMedicationsAsthma"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">EPOC: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedEPOC"
          :options="patient.optionsEPOC"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedEPOC === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para la EPOC? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.epocMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de medicamentos: {{ medicationsQuantity(patient.epocMedications) }}</span>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedEPOC === 'Sí' && medicationsQuantity(patient.epocMedications) > 0">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Frecuencia de uso: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedUseMedicationsEPOC"
          :options="patient.optionsUseMedicationsEPOC"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Fibrosis Quística: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedFibrosisQuistica"
          :options="patient.optionsFibrosisQuistica"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedFibrosisQuistica === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para la Fibrosis Quística? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.fibrosisQuisticaMedications"
          description="Ingrese los medicamentos separados por una coma (,)"
        ></b-form-input>
        <span class="font-weight-normal">Número de medicamentos: {{ medicationsQuantity(patient.fibrosisQuisticaMedications) }}</span>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedFibrosisQuistica === 'Sí' && medicationsQuantity(patient.fibrosisQuisticaMedications) > 0">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Frecuencia de uso: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedUseMedicationsFibrosisQuistica"
          :options="patient.optionsUseMedicationsFibrosisQuistica"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Otros</h5>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">SAOS: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedSAOS"
          :options="patient.optionsSAOS"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedSAOS === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">Tratamiento SAOS: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedSAOSTreatment"
          :options="patient.optionsSAOSTreatment"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Inmunocompromiso: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedInmunoCompromiso"
          :options="patient.optionsInmunoCompromiso"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedInmunoCompromiso === 'Sí'">
      <b-col
        cols="4"
        class="mt-3 mb-5"
      >
        <h6 class="font-italic">Nivel de inmunocompromiso: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedInmunoCompromisoTreatment"
          :options="patient.optionsInmunoCompromisoTreatment"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Epilepsia: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedEpilepsia"
          :options="patient.optionsEpilepsia"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedEpilepsia === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para la Epilepsia? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.epilepsiaMedications"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Insuficiencia Renal: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedInsuficienciaRenal"
          :options="patient.optionsInsuficienciaRenal"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedInsuficienciaRenal === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Se realiza diálisis? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDialisis"
          :options="patient.optionsDialisis"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Enfermedades Tiroideas: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedEnfermedadesTiroideas"
          :options="patient.optionsEnfermedadesTiroideas"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedEnfermedadesTiroideas === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para las Enfermedades Tiroideas? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.enfermedadesTiroideasMedications"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">AVE-DOC: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedAVE_DOC"
          :options="patient.optionsAVE_DOC"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Coagulopatía: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedCoagulopatia"
          :options="patient.optionsCoagulopatia"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedCoagulopatia === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para la Coagulopatía? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.coagulopatiaMedications"></b-form-input>
      </b-col>
    </b-row>

    <!-- ALERGIAS -->

    <b-row>
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Alergias</h5>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Alergia Alimentaria: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedAlergiaAlimentaria"
          :options="patient.optionsAlergiaAlimentaria"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedAlergiaAlimentaria === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Alergia a qué alimentos? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.alergiaAlimentariaDetails"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Alergia Medicamentosa: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedAlergiaMedicamentosa"
          :options="patient.optionsAlergiaMedicamentosa"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row v-if="patient.selectedAlergiaMedicamentosa === 'Sí'">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Alergia a qué medicamentos? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.alergiaMedicamentosaDetails"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Alergia al Látex: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedAlergiaLatex"
          :options="patient.optionsAlergiaLatex"
        ></b-form-select>
      </b-col>
    </b-row>

    <!-- Buttons -->

    <b-row>
      <b-col>
        <b-button
          variant="light"
          block
          class="my-5 border"
          @click="confirmDiscard"
        ><span class="font-weight-normal">Atrás</span></b-button>
      </b-col>
      <!-- <b-col>
        <b-button
          variant="light"
          block
          class="my-5 border"
          @click="savePatientData"
        ><span class="font-weight-normal">Guardar avance</span></b-button>
      </b-col> -->
      <b-col>
        <b-button
          variant="primary"
          block
          class="my-5"
          @click="nextStep"
        ><span class="font-weight-normal">Guardar y continuar</span></b-button>
      </b-col>
    </b-row>
    <b-modal
      ref="form-modal-antecedentes-morbidos"
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
      <b-row class="my-3">
        <b-col>
          <b-button
            variant="light"
            class="border"
            block
            @click="closeModal"
          >Cancelar</b-button>

        </b-col>
        <b-col>
          <b-button
            variant="primary"
            block
            @click="backStep"
          >Confirmar</b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-container>

</template>

<script>

import Stepper from '@/components/Stepper.vue'

export default {
  name: 'FormularioNurseAntecedentesMorbidos',
  components: {
    Stepper,
  },
  data () {
    return {
      name: '',
      lastName: '',
      rol: '',
      rut: '',
      //Patient data
      modalMessage: '',
      modalIcon: 'success',
      patient: {
        patientName: '',
        patientLastName1: '',
        patientLastName2: '',
        birthDate: undefined,
        //Datos de contacto
        addressStreet: '',
        addressNumber: '',
        block: '',
        city: '',
        phone1: '',
        phone2: '',
        email: '',
        optionsZone: ['Rural', 'Urbana'],
        selectedZone: 'Urbana',
        optionsNearbyHealthCenter: ['Sí', 'No'],
        selectedNearbyHealthCenter: 'Sí',
        //Antecedentes clínicos
        weight: undefined,
        height: undefined,
        optionsCompanion: ['Sí', 'No'],
        selectedCompanion: 'Sí',
        optionsSmoke: ['Sí', 'No'],
        selectedSmoke: 'No',
        smokeDailyQuantity: undefined,
        optionsAlcohol: ['Sí', 'No'],
        selectedAlcohol: 'No',
        alcoholDailyQuantity: undefined,
        optionsDrugs: ['Sí', 'No'],
        selectedDrugs: 'No',
        drugsDailyQuantity: undefined,
        drugsType: '',
        //Antecedentes mórbidos
        //Enfermedad cardiovascular
        optionsHTA: ['Sí', 'No'],
        selectedHTA: 'No',
        htaMedications: '',
        optionsDM: ['Sí', 'No'],
        selectedDM: 'No',
        optionsUseHipoglicemianteOral: ['Sí', 'No'],
        selectedUseHipoglicemianteOral: 'No',
        hipoglicemiantesOralesMedications: '',
        optionsInsulina: ['Sí', 'No'],
        selectedInsulina: 'No',
        insulinaMedications: '',
        optionsIAM: ['Sí', 'No'],
        selectedIAM: 'No',
        iamMedications: '',
        optionsCoronaryDisease: ['Sí', 'No'],
        selectedCoronaryDisease: 'No',
        coronaryDiseaseMedications: '',
        //Enfermedad pulmonar
        optionsAsthma: ['Sí', 'No'],
        selectedAsthma: 'No',
        asthmaMedications: '',
        optionsUseMedicationsAsthma: ['Uso habitual', 'SOS'],
        selectedUseMedicationsAsthma: 'Uso habitual',
        optionsEPOC: ['Sí', 'No'],
        selectedEPOC: 'No',
        epocMedications: '',
        optionsUseMedicationsEPOC: ['Uso habitual', 'SOS'],
        selectedUseMedicationsEPOC: 'Uso habitual',
        optionsFibrosisQuistica: ['Sí', 'No'],
        selectedFibrosisQuistica: 'No',
        fibrosisQuisticaMedications: '',
        optionsUseMedicationsFibrosisQuistica: ['Uso habitual', 'SOS'],
        selectedUseMedicationsFibrosisQuistica: 'Uso habitual',
        //Otros
        optionsSAOS: ['Sí', 'No'],
        selectedSAOS: 'No',
        optionsSAOSTreatment: ['Sin tratamiento', 'CPAP'],
        selectedSAOSTreatment: 'Sin tratamiento',
        optionsInmunoCompromiso: ['Sí', 'No'],
        selectedInmunoCompromiso: 'No',
        optionsInmunoCompromisoTreatment: ['Moderado', 'Severo'],
        selectedInmunoCompromisoTreatment: 'Moderado',
        optionsEpilepsia: ['Sí', 'No'],
        selectedEpilepsia: 'No',
        epilepsiaMedications: '',
        optionsInsuficienciaRenal: ['Sí', 'No'],
        selectedInsuficienciaRenal: 'No',
        optionsDialisis: ['Sí', 'No'],
        selectedDialisis: 'No',
        optionsEnfermedadesTiroideas: ['Sí', 'No'],
        selectedEnfermedadesTiroideas: 'No',
        enfermedadesTiroideasMedications: '',
        optionsAVE_DOC: ['Sí', 'No'],
        selectedAVE_DOC: 'No',
        optionsCoagulopatia: ['Sí', 'No'],
        selectedCoagulopatia: 'No',
        coagulopatiaMedications: '',
        //Alergias
        optionsAlergiaAlimentaria: ['Sí', 'No'],
        selectedAlergiaAlimentaria: 'No',
        alergiaAlimentariaDetails: '',
        optionsAlergiaMedicamentosa: ['Sí', 'No'],
        selectedAlergiaMedicamentosa: 'No',
        alergiaMedicamentosaDetails: '',
        optionsAlergiaLatex: ['Sí', 'No'],
        selectedAlergiaLatex: 'No',
        // Sintomatología
        optionsDolorPecho: ['Sí', 'No'],
        selectedDolorPecho: 'No',
        optionsReaccionTransfusionSanguinea: ['Sí', 'No'],
        selectedReaccionTransfusionSanguinea: 'No',
        optionsParalisis: ['Sí', 'No'],
        selectedParalisis: 'No',
        optionsTemblores: ['Sí', 'No'],
        selectedTemblores: 'No',
        optionsDificultadParaHablar: ['Sí', 'No'],
        selectedDificultadParaHablar: 'No',
        optionsDesmayosRepentinos: ['Sí', 'No'],
        selectedDesmayosRepentinos: 'No',
        optionsDificultadParaRespirar: ['Sí', 'No'],
        selectedDificultadParaRespirar: 'No',
        optionsRonquidos: ['Sí', 'No'],
        selectedRonquidos: 'No',
        optionsFaltaDeAireAlCaminarMasDeDosCuadras: ['Sí', 'No'],
        selectedFaltaDeAireAlCaminarMasDeDosCuadras: 'No',
        optionsResfrioDolorDeGargantaUltimosDosDias: ['Sí', 'No'],
        selectedResfrioDolorDeGargantaUltimosDosDias: 'No',
        optionsCariesProfundas: ['Sí', 'No'],
        selectedCariesProfundas: 'No',
        optionsDisuria: ['Sí', 'No'],
        selectedDisuria: 'No',
        optionsProblemasMusculoArticulares: ['Sí', 'No'],
        selectedProblemasMusculoArticulares: 'No',
        optionsReflujo: ['Sí', 'No'],
        selectedReflujo: 'No',
        optionsSangrado: ['Sí', 'No'],
        selectedSangrado: 'No',
        //Tratamiento farmacológico
        optionsDigitalicos: ['Sí', 'No'],
        selectedDigitalicos: 'No',
        digitalicosMedications: '',
        optionsAspirina: ['Sí', 'No'],
        selectedAspirina: 'No',
        aspirinaMedications: '',
        optionsDiureticos: ['Sí', 'No'],
        selectedDiureticos: 'No',
        diureticosMedications: '',
        optionsInmunosupresores: ['Sí', 'No'],
        selectedInmunosupresores: 'No',
        inmunosupresoresMedications: '',
        optionsCortioides: ['Sí', 'No'],
        selectedCortioides: 'No',
        cortioidesMedications: '',
        optionsAnticonvulsivantes: ['Sí', 'No'],
        selectedAnticonvulsivantes: 'No',
        anticonvulsivantesMedications: '',
        optionsAntidepresivos: ['Sí', 'No'],
        selectedAntidepresivos: 'No',
        antidepresivosMedications: '',
        optionsOtros: ['Sí', 'No'],
        selectedOtros: 'No',
        antidepresivosOtros: '',
        optionsYerbasMedicinales: ['Sí', 'No'],
        selectedYerbasMedicinales: 'No',
        yerbasMedicinalesMedications: '',
        optionsGinkoBiloba: ['Sí', 'No'],
        selectedGinkoBiloba: 'No',
        ginkoBilobaMedications: '',
        optionsYerbasSanJuan: ['Sí', 'No'],
        selectedYerbasSanJuan: 'No',
        yerbasSanJuanMedications: '',
        optionsEfedra: ['Sí', 'No'],
        selectedEfedra: 'No',
        efedraMedications: '',
        // Antecedentes Quirúrgicos
        surgeryFields: [
          {
            key: "index",
            label: "N°"
          },
          {
            key: "cirugia",
            label: "Cirugía"
          },
          {
            key: "tipoAnestesia",
            label: "Tipo de Anestesia"
          },
          {
            key: "fecha",
            label: "Fecha"
          },
        ],
        surgeries: [
          { 'index': 1, 'cirugia': '', 'tipoAnestesia': '', 'fecha': '' },
          { 'index': 2, 'cirugia': '', 'tipoAnestesia': '', 'fecha': '' },
          { 'index': 3, 'cirugia': '', 'tipoAnestesia': '', 'fecha': '' },
          { 'index': 4, 'cirugia': '', 'tipoAnestesia': '', 'fecha': '' },
          { 'index': 5, 'cirugia': '', 'tipoAnestesia': '', 'fecha': '' }
        ],
        //En relación a la anestesia
        optionsLoHanAnestesiadoAlgunaVez: ['Sí', 'No'],
        selectedLoHanAnestesiadoAlgunaVez: 'No',
        LoHanAnestesiadoAlgunaVezDescription: '',
        optionsTuvoAlgunProblemaConLaAnestesia: ['Sí', 'No'],
        selectedTuvoAlgunProblemaConLaAnestesia: 'No',
        tuvoAlgunProblemaConLaAnestesiaDescription: '',
        optionsAlgunFamiliarConsanguineoTuvoComplicaciones: ['Sí', 'No'],
        selectedAlgunFamiliarConsanguineoTuvoComplicaciones: 'No',
        algunFamiliarConsanguineoTuvoComplicacionesDescription: '',
        optionsTieneAlgunFamiliarEnLaTeleton: ['Sí', 'No'],
        selectedTieneAlgunFamiliarEnLaTeleton: 'No',
        tieneAlgunFamiliarEnLaTeletonDescription: '',



        temp: '',

        vaccinationsFields: [
          {
            key: "nombreFarmaco",
            label: "Fármaco"
          },
          {
            key: "utilizaFarmaco",
            label: "Sí/No"
          },
          {
            key: "listadoFarmacos",
            label: "Tipo"
          },
        ],

        pharmacologicalItems: [
          { 'nombreFarmaco': 'Antihipertensivos', 'utilizaFarmaco': ['optionsHTA', 'selectedHTA'], 'listadoFarmacos': 'htaMedications' },
          { 'nombreFarmaco': 'Digitálicos', 'utilizaFarmaco': ['optionsDigitalicos', 'selectedDigitalicos'], 'listadoFarmacos': 'digitalicosMedications' },
          { 'nombreFarmaco': 'Aspirina', 'utilizaFarmaco': ['optionsAspirina', 'selectedAspirina'], 'listadoFarmacos': 'aspirinaMedications' },
          { 'nombreFarmaco': 'Anticoagulantes', 'utilizaFarmaco': ['optionsCoagulopatia', 'selectedCoagulopatia'], 'listadoFarmacos': 'coagulopatiaMedications' },
          { 'nombreFarmaco': 'Hipoglicemiantes', 'utilizaFarmaco': ['optionsUseHipoglicemianteOral', 'selectedUseHipoglicemianteOral'], 'listadoFarmacos': 'hipoglicemiantesOralesMedications' },
          { 'nombreFarmaco': 'Insulina', 'utilizaFarmaco': ['optionsInsulina', 'selectedInsulina'], 'listadoFarmacos': 'insulinaMedications' },
          { 'nombreFarmaco': 'Diuréticos', 'utilizaFarmaco': ['optionsDiureticos', 'selectedDiureticos'], 'listadoFarmacos': 'diureticosMedications' },
          { 'nombreFarmaco': 'Inmunosupresores', 'utilizaFarmaco': ['optionsInmunosupresores', 'selectedInmunosupresores'], 'listadoFarmacos': 'inmunosupresoresMedications' },
          { 'nombreFarmaco': 'Corticoides', 'utilizaFarmaco': ['optionsCortioides', 'selectedCortioides'], 'listadoFarmacos': 'cortioidesMedications' },
          { 'nombreFarmaco': 'Anticonvulsivantes', 'utilizaFarmaco': ['optionsAnticonvulsivantes', 'selectedEpilepsia'], 'listadoFarmacos': 'epilepsiaMedications' },
          { 'nombreFarmaco': 'Antidepresivos', 'utilizaFarmaco': ['optionsAntidepresivos', 'selectedAntidepresivos'], 'listadoFarmacos': 'antidepresivosMedications' },
          { 'nombreFarmaco': 'Otros', 'utilizaFarmaco': ['optionsOtros', 'selectedOtros'], 'listadoFarmacos': 'antidepresivosOtros' },
          { 'nombreFarmaco': 'Yerbas Medicinales', 'utilizaFarmaco': ['optionsYerbasMedicinales', 'selectedYerbasMedicinales'], 'listadoFarmacos': 'yerbasMedicinalesMedications' },
          { 'nombreFarmaco': 'Ginko Biloba', 'utilizaFarmaco': ['optionsGinkoBiloba', 'selectedGinkoBiloba'], 'listadoFarmacos': 'ginkoBilobaMedications' },
          { 'nombreFarmaco': 'Yerbas de San Juan', 'utilizaFarmaco': ['optionsYerbasSanJuan', 'selectedYerbasSanJuan'], 'listadoFarmacos': 'yerbasSanJuanMedications' },
          { 'nombreFarmaco': 'Efedra', 'utilizaFarmaco': ['optionsEfedra', 'selectedEfedra'], 'listadoFarmacos': 'efedraMedications' },
        ],
        //COVID
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
        // SCORE C
        scoreCCategorizationItems: [
          { 'categoria': 'Edad', '1': '< 20 años', '2': '20 - 40 años', '3': '40 a 50 años', '4': '50 a 65 años', '5': '> 65 años' },
          { 'categoria': 'Neumopatía crónica (EPOC, asma, fibrosis quística)', '1': 'No', '2': '', '3': '', '4': 'Tratamiento a demanda', '5': 'Tratamiento habitual' },
          { 'categoria': 'SAOS', '1': 'No', '2': '', '3': '', '4': 'Sin tratamiento', '5': 'CPAP' },
          { 'categoria': 'Enfermedad cardiovascular', '1': 'No', '2': '', '3': '1 Fármaco', '4': '2 Fármacos', '5': '3 Fármacos' },
          { 'categoria': 'IMC', '1': ' < 25 kg/m2', '2': '', '3': '', '4': '25 - 30 kg/m2', '5': '> 30 kg/m2' },
          { 'categoria': 'Diabetes Mellitus tipo 2', '1': 'No', '2': '', '3': 'Sin medicación', '4': 'A.D.O.', '5': '+ Insulina' },
          { 'categoria': 'Inmunosupresión', '1': 'No', '2': '', '3': '', '4': 'Moderada', '5': 'Severa' },
          { 'categoria': 'Síndrome gripal', '1': 'No', '2': '', '3': '', '4': '', '5': 'Sí' },
          { 'categoria': 'Contacto con COVID-19 en los últimos 15 días', '1': 'No', '2': '', '3': 'No lo sabe', '4': 'Tratamiento a demanda', '5': 'Sí' },
        ],
        scoreCCategorizationFields: [
          {
            key: 'categoria',
            label: ''
          },
          {
            key: "1",
            label: "1"
          },
          {
            key: "2",
            label: "2"
          },
          {
            key: "3",
            label: "3"
          },
          {
            key: "4",
            label: "4"
          },
          {
            key: "5",
            label: "5"
          },
        ],
        scoreCPatientItems: [
          { 'categoria': 'Edad', 'data': '24 años', 'infoPatient': '20 - 40 años', 'score': 2 },
          { 'categoria': 'Neumopatía crónica (EPOC, asma, fibrosis quística)', 'data': '3 patologías', 'infoPatient': 'Tratamiento habitual', 'score': 5 },
          { 'categoria': 'SAOS', 'data': 'No', 'infoPatient': 'No', 'score': 1 },
          { 'categoria': 'Enfermedad cardiovascular', 'data': 'Sí', 'infoPatient': '3 Fármacos', 'score': 5 },
          { 'categoria': 'IMC', 'data': '32,4', 'infoPatient': '> 30 kg/m2', 'score': 5 },
          { 'categoria': 'Diabetes Mellitus tipo 2', 'data': 'Sí', 'infoPatient': '+ Insulina', 'score': 5 },
          { 'categoria': 'Inmunosupresión', 'data': 'Moderado', 'infoPatient': 'Moderada', 'score': 4 },
          { 'categoria': 'Síndrome gripal', 'data': 'Sí', 'infoPatient': 'Sí', 'score': 5 },
          { 'categoria': 'Contacto con COVID-19 en los últimos 15 días', 'data': 'No', 'infoPatient': 'No', 'score': 1 },
        ],
        scoreCPatientFields: [
          {
            key: 'categoria',
            label: 'Categoría'
          },
          {
            key: 'data',
            label: 'Datos paciente'
          },
          {
            key: "infoPatient",
            label: "Información del paciente"
          },
          {
            key: "score",
            label: "Puntaje"
          },
        ],
        scoreA: 0,
        scoreB: 0

      }
    }
  },
  mounted () {
    if (this.$storage.get('currentUser') != '') {
      let savedUser = this.$storage.get('currentUser');

      this.name = savedUser.name;
      this.lastName = savedUser.lastName;
      this.rol = savedUser.rol;
    }

    if (this.$storage.get('formPatientData') != '') {
      let savedPatientData = this.$storage.get('formPatientData');

      this.patient = savedPatientData;
    }
  },
  methods: {
    medicationsQuantity (medications) {
      return medications === '' ? 0 : medications.split(',').length;
    },
    savePatientData () {
      this.$storage.set('formPatientData', this.patient);

      this.modalMessage = 'Los datos han sido almacenados correctamente';
      this.$refs['form-modal-antecedentes-morbidos'].show();

    },
    sendPatientData () {

      // await axios({
      //   url: "",
      //   method: "GET",
      //   data: patient,
      // })
      //   .then(resp => { })
      //   .catch(err => { });

      this.$storage.remove('formPatientData');

      this.modalMessage = 'Los datos han sido correctamente enviados al servidor';
      this.$refs['form-modal-antecedentes-morbidos'].show();

      setTimeout(() => { this.$router.go(this.$router.currentRoute); }, 2000);


    },
    backStep () {
      this.$router.push({ name: 'FormularioNurseInformacionPaciente' })
    },
    nextStep () {
      this.$storage.set('formPatientData', this.patient);

      this.$swal({
        text: ' La información del paciente ha sido almacenada correctamente',
        toast: true,
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
      this.$router.push({ name: 'HomeContentNurse' });
    },
    confirmDiscard () {
      this.modalMessage = '¿Confirma que desea descartar los cambios y volver al paso anterior?';
      this.modalIcon = 'warning';
      this.$refs['form-modal-antecedentes-morbidos'].show();
    },
    closeModal () {
      this.$refs['form-modal-antecedentes-morbidos'].hide();
    }
  }

}
</script>

<style>
</style>