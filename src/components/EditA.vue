<template>
  <div>
      <b-container class="bv-example-row">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="First Name:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.first"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Last Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.last"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Portrait URL:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      v-model="form.portrait">
        </b-form-input>
      </b-form-group>
            <b-form-group id="exampleInputGroup3"
                    label="Biography:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text-box"
                      required
                      v-model="form.biography">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="secondary">Edit Author</b-button>
    </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "EditAuthor",
  data() {
    return {
      form: {
        first: "",
        last: "",
        portrait: "",
        biography: "",
        selected: null
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.first = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.container {
    margin-top: 25px;
}
</style>