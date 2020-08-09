<template>
  <b-container class="border rounded shadow">
    <b-row>
      <b-col>
        <h1> radical</h1>

      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form inline>
          <label
            class="sr-only"
            for="inline-form-input-name"
          >Name</label>
          <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Jane Doe"
          ></b-input>

          <label
            class="sr-only"
            for="inline-form-input-username"
          >Username</label>
          <b-input-group
            prepend="@"
            class="mb-2 mr-sm-2 mb-sm-0"
          >
            <b-input
              id="inline-form-input-username"
              placeholder="Username"
            ></b-input>
          </b-input-group>

          <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

          <b-button variant="primary">Save</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
