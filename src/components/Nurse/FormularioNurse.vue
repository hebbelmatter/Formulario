<template>
  <b-container class="border rounded shadow mt-5 mb-5 px-4">
    <!-- <b-container fluid>
      <b-row>
        <b-col
          class="text-center"
          style="background-color: #5baa00; color: white;"
        >1</b-col>
        <b-col class="text-center border">2</b-col>
        <b-col class="text-center border">3</b-col>
        <b-col class="text-center border">4</b-col>
      </b-row>
    </b-container> -->
    <Stepper activeStep="1" />
    <b-row>
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">1. Información del paciente</h3>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Datos personales</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">RUT: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.rut"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Nombres: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.patientName"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Apellido Paterno: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.patientLastName1"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Apellido Materno: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.patientLastName2"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Fecha de nacimiento: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.birthDate"
          type="date"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Datos de contacto</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Calle: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.addressStreet"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Número: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.addressNumber"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Block: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.block"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Ciudad: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.city"></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Zona: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedZone"
          :options="patient.optionsZone"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">¿Dispone de acompañante? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedCompanion"
          :options="patient.optionsCompanion"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">¿Dispone de un centro de salud a menos de 30 min? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedNearbyHealthCenter"
          :options="patient.optionsNearbyHealthCenter"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Antecedentes clínicos</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Altura (metros): </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.height"
          type="number"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Peso (kilogramos): </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.weight"
          type="number"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Fuma: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedSmoke"
          :options="patient.optionsSmoke"
        ></b-form-select>
        <!-- <b-form-radio-group
          v-model="patient.selectedSmoke"
          :options="patient.optionsSmoke"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-radio-group> -->
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      v-if="patient.selectedSmoke === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Cantidad de cigarrillos diarios: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.smokeDailyQuantity"
          type="number"
        ></b-form-input>

      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Consume alcohol: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedAlcohol"
          :options="patient.optionsAlcohol"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      v-if="patient.selectedAlcohol === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Cantidad de tragos semanales de alcohol: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.alcoholDailyQuantity"
          type="number"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Consume drogas: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDrugs"
          :options="patient.optionsDrugs"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      v-if="patient.selectedDrugs === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué drogas consume? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.drugsType"></b-form-input>
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      v-if="patient.selectedDrugs === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Frecuencia semanal consumo de drogas: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input
          v-model="patient.drugsDailyQuantity"
          type="number"
        ></b-form-input>
      </b-col>
    </b-row>

    <!-- INICIO -->

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">2. Antecedentes Mórbidos</h3>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Antecedentes mórbidos</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-3 mb-3">
        <h5 class="font-weight-bold">Enfermedad cardiovascular</h5>
      </b-col>
    </b-row>

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedHTA === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedDM === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">Hipoglicemiantes Orales: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedUseHipoglicemianteOral"
          :options="patient.optionsUseHipoglicemianteOral"
        ></b-form-select>
      </b-col>
    </b-row> 

    <b-row
      align-v="center"
      v-if="patient.selectedDM === 'Sí' && patient.selectedUseHipoglicemianteOral === 'Sí'"
    >
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
    </b-row> -->

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedDM === 'Sí'"
    >
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

    <b-row
      align-v="center"
      v-if="patient.selectedDM === 'Sí' && patient.selectedInsulina === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedIAM === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedCoronaryDisease === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Enfermedad pulmonar</h5>
      </b-col>
    </b-row>

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedAsthma === 'Sí'"
    >
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

    <b-row
      align-v="center"
      v-if="patient.selectedAsthma === 'Sí' && medicationsQuantity(patient.asthmaMedications) > 0"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedEPOC === 'Sí'"
    >
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

    <b-row
      align-v="center"
      v-if="patient.selectedEPOC === 'Sí' && medicationsQuantity(patient.epocMedications) > 0"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedFibrosisQuistica === 'Sí'"
    >
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

    <b-row
      align-v="center"
      v-if="patient.selectedFibrosisQuistica === 'Sí' && medicationsQuantity(patient.fibrosisQuisticaMedications) > 0"
    >
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
    </b-row> -->

    <b-row align-v="center">
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Otros</h5>
      </b-col>
    </b-row>

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedSAOS === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedInmunoCompromiso === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedEpilepsia === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para la Epilepsia? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.epilepsiaMedications"></b-form-input>
      </b-col>
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedInsuficienciaRenal === 'Sí'"
    >
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
    </b-row> -->

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedEnfermedadesTiroideas === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para las Enfermedades Tiroideas? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.enfermedadesTiroideasMedications"></b-form-input>
      </b-col>
    </b-row> -->

    <b-row align-v="center">
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

    <b-row align-v="center">
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

    <!-- <b-row
      align-v="center"
      v-if="patient.selectedCoagulopatia === 'Sí'"
    >
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-italic">¿Qué medicamentos utiliza para la Coagulopatía? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.coagulopatiaMedications"></b-form-input>
      </b-col>
    </b-row> -->

    <!-- ALERGIAS -->

    <b-row align-v="center">
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Alergias</h5>
      </b-col>
    </b-row>

    <b-row align-v="center">
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

    <b-row
      align-v="center"
      v-if="patient.selectedAlergiaAlimentaria === 'Sí'"
    >
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

    <b-row align-v="center">
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

    <b-row
      align-v="center"
      v-if="patient.selectedAlergiaMedicamentosa === 'Sí'"
    >
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

    <b-row align-v="center">
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

    <b-row align-v="center">
      <b-col class="mt-4 mb-3">
        <h5 class="font-weight-bold">Sintomatología</h5>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Dolor de pecho: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDolorPecho"
          :options="patient.optionsDolorPecho"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Reacción a transfusión sanguínea: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedReaccionTransfusionSanguinea"
          :options="patient.optionsReaccionTransfusionSanguinea"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Parálisis: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedParalisis"
          :options="patient.optionsParalisis"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Temblores: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedTemblores"
          :options="patient.optionsTemblores"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Dificultad para Hablar: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDificultadParaHablar"
          :options="patient.optionsDificultadParaHablar"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Desmayos repentinos: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDesmayosRepentinos"
          :options="patient.optionsDesmayosRepentinos"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Dificultad para respirar: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDificultadParaRespirar"
          :options="patient.optionsDificultadParaRespirar"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Ronquidos: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedRonquidos"
          :options="patient.optionsRonquidos"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Falta de aire al caminar más de dos cuadras: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedFaltaDeAireAlCaminarMasDeDosCuadras"
          :options="patient.optionsFaltaDeAireAlCaminarMasDeDosCuadras"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Resfrío dolor de garganta en los últimos dos días: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedResfrioDolorDeGargantaUltimosDosDias"
          :options="patient.optionsResfrioDolorDeGargantaUltimosDosDias"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Caries profundas: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedCariesProfundas"
          :options="patient.optionsCariesProfundas"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Disuria: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedDisuria"
          :options="patient.optionsDisuria"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Problemas musculoarticulares: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedProblemasMusculoArticulares"
          :options="patient.optionsProblemasMusculoArticulares"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Reflujo: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedReflujo"
          :options="patient.optionsReflujo"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">Sangrado: </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedSangrado"
          :options="patient.optionsSangrado"
        ></b-form-select>
      </b-col>
    </b-row>

    <!-- FIN -->

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">3. Tratamientos farmacológicos</h3>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Antecedentes mórbidos</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-3 mb-3">
        <h5 class="font-weight-bold">Enfermedad cardiovascular</h5>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col>

        <b-table
          bordered
          striped
          hover
          :items="patient.pharmacologicalItems"
          :fields="patient.vaccinationsFields"
          class="shadow"
        >
          <!-- <template
            slot="index"
            slot-scope="data"
          >{{ data.index + 1 }}</template> -->

          <template v-slot:cell(nombreFarmaco)="data">
            <span>{{ data.value }}</span>
          </template>

          <template v-slot:cell(utilizaFarmaco)="data">
            <b-form-select
              v-model="patient[data.value[1]]"
              :options="patient[data.value[0]]"
            ></b-form-select>
          </template>

          <template v-slot:cell(listadoFarmacos)="data">
            <b-form-input v-model="patient[data.value]"></b-form-input>
          </template>
        </b-table>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="mt-5 mb-3">
        <h3 class="font-weight-bold">4. Antecedentes Quirúrgicos</h3>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">Antecedentes quirúrgicos</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col>
        <b-table
          bordered
          striped
          hover
          class="shadow"
          :fields="patient.surgeryFields"
          :items="patient.surgeries"
        >
          <template v-slot:cell(index)="data">{{ data.value }}</template>

          <template v-slot:cell(cirugia)="data">
            <b-form-input v-model="patient.surgeries[data.index]['cirugia']"></b-form-input>
          </template>

          <template v-slot:cell(tipoAnestesia)="data">
            <b-form-input v-model="patient.surgeries[data.index]['tipoAnestesia']"></b-form-input>
          </template>

          <template v-slot:cell(fecha)="data">
            <b-form-input
              v-model="patient.surgeries[data.index]['fecha']"
              type="date"
            ></b-form-input>
          </template>

        </b-table>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col class="mt-5 mb-3">
        <h4 class="font-weight-bold">En relación a la anestesia</h4>
      </b-col>
    </b-row>

    <b-row align-v="center">
      <b-col
        cols="4"
        class="my-3"
      >
        <h6 class="font-weight-normal">¿Lo han anestesiado alguna vez? </h6>
      </b-col>
      <b-col cols="8">
        <b-form-select
          v-model="patient.selectedLoHanAnestesiadoAlgunaVez"
          :options="patient.optionsLoHanAnestesiadoAlgunaVez"
        ></b-form-select>
      </b-col>
    </b-row>

    <b-row
      align-v="center"
      v-if="patient.selectedLoHanAnestesiadoAlgunaVez === 'Sí'"
    >
      <b-col cols="4">
        <h6 class="font-italic">Describa </h6>
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="patient.LoHanAnestesiadoAlgunaVezDescription"></b-form-input>
      </b-col>
    </b-row>

    <!-- Buttons -->

    <b-row>
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
          variant="light"
          block
          class="my-5 border"
          @click="confirmDiscard"
        ><span class="font-weight-normal ">Descartar los cambios y volver al home</span></b-button>
      </b-col>
      <b-col>
        <b-button
          variant="primary"
          block
          class="my-5"
          @click="nextStep"
        ><span class="font-weight-normal">Guardar y continuar</span></b-button>
      </b-col>
      <!-- <b-col>
        <b-button
          variant="light"
          block
          class="my-5 border"
          @click="sendPatientData"
        ><span class="font-weight-normal">Enviar la información</span>
        </b-button>
      </b-col> -->
    </b-row>

    <b-modal
      ref="form-modal"
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
            @click="backHome"
          >Confirmar</b-button>
        </b-col>
      </b-row>
    </b-modal>

  </b-container>
</template>

<script>
import Stepper from '@/components/Stepper.vue'

export default {
  name: 'FormularioNurse',
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
        optionsDolorPecho: ['Sí', 'No'],
        selectedDolorPecho: 'No',
        optionsReaccionTransfusionSanguinea: ['Sí', 'No'],
        selectedReaccionTransfusionSanguinea: 'No',
        // *****
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
        optionsLoHanAnestesiadoAlgunaVez: ['Sí', 'No'],
        selectedLoHanAnestesiadoAlgunaVez: 'No',
        LoHanAnestesiadoAlgunaVezDescription: '',


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
          { 'nombreFarmaco': 'Anticoagulante', 'utilizaFarmaco': ['optionsCoagulopatia', 'selectedCoagulopatia'], 'listadoFarmacos': 'coagulopatiaMedications' },
          { 'nombreFarmaco': 'Hipoglicemiante', 'utilizaFarmaco': ['optionsUseHipoglicemianteOral', 'selectedUseHipoglicemianteOral'], 'listadoFarmacos': 'hipoglicemiantesOralesMedications' },
          { 'nombreFarmaco': 'Insulina', 'utilizaFarmaco': ['optionsInsulina', 'selectedInsulina'], 'listadoFarmacos': 'insulinaMedications' },
          { 'nombreFarmaco': 'Diureticos', 'utilizaFarmaco': ['optionsDiureticos', 'selectedDiureticos'], 'listadoFarmacos': 'diureticosMedications' },
          { 'nombreFarmaco': 'Inmunosupresores', 'utilizaFarmaco': ['optionsInmunosupresores', 'selectedInmunosupresores'], 'listadoFarmacos': 'inmunosupresoresMedications' },
          { 'nombreFarmaco': 'Corticoides', 'utilizaFarmaco': ['optionsCortioides', 'selectedCortioides'], 'listadoFarmacos': 'cortioidesMedications' },
          { 'nombreFarmaco': 'Anticonvulsivantes', 'utilizaFarmaco': ['optionsAnticonvulsivantes', 'selectedAnticonvulsivantes'], 'listadoFarmacos': 'anticonvulsivantesMedications' },
          { 'nombreFarmaco': 'Antidepresivos', 'utilizaFarmaco': ['optionsAntidepresivos', 'selectedAntidepresivos'], 'listadoFarmacos': 'antidepresivosMedications' },
          { 'nombreFarmaco': 'Otros', 'utilizaFarmaco': ['optionsOtros', 'selectedOtros'], 'listadoFarmacos': 'antidepresivosOtros' },
          { 'nombreFarmaco': 'Yerbas Medicinales', 'utilizaFarmaco': ['optionsYerbasMedicinales', 'selectedYerbasMedicinales'], 'listadoFarmacos': 'yerbasMedicinalesMedications' },
          { 'nombreFarmaco': 'Ginko Biloba', 'utilizaFarmaco': ['optionsGinkoBiloba', 'selectedGinkoBiloba'], 'listadoFarmacos': 'ginkoBilobaMedications' },
          { 'nombreFarmaco': 'Yerbas de San Juan', 'utilizaFarmaco': ['optionsYerbasSanJuan', 'selectedYerbasSanJuan'], 'listadoFarmacos': 'yerbasSanJuanMedications' },
          { 'nombreFarmaco': 'Efedra', 'utilizaFarmaco': ['optionsEfedra', 'selectedEfedra'], 'listadoFarmacos': 'efedraMedications' },
        ]

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
      this.$refs['form-modal'].show();

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

      this.$swal({
        text: 'Los datos han sido correctamente enviados al servidor',
        toast: true,
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
      });

      setTimeout(() => { this.$router.go(this.$router.currentRoute); }, 2000);

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

      this.$router.push({ name: 'FormularioNurseAntecedentesMorbidos' });

    },
    backHome () {
      this.$storage.remove('formPatientData');
      this.$router.push({ name: 'HomeContentNurse' });
    },
    confirmDiscard () {
      this.modalMessage = '¿Confirma que desea descartar los cambios y volver al home?';
      this.modalIcon = 'warning';
      this.$refs['form-modal'].show();
    },
    closeModal () {
      this.$refs['form-modal'].hide();
    },
  },
  //   computed: {
  //     pharmacologicalItems () {

  //       return [
  //         { 'nombreFarmaco': 'Antihipertensivos', 'utilizaFarmaco': ['optionsHTA', 'selectedHTA'], 'listadoFarmacos': 'htaMedications' },
  //         { 'nombreFarmaco': 'Digitálicos', 'utilizaFarmaco': ['optionsDigitalicos', 'selectedDigitalicos'], 'listadoFarmacos': 'digitalicosMedications' },
  //         { 'nombreFarmaco': 'Insulina', 'utilizaFarmaco': ['optionsInsulina', 'selectedInsulina'], 'listadoFarmacos': 'insulinaMedications' }
  //       ];
  //     }
  //   }


}
</script>

<style>
</style>