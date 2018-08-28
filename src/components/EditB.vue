<template>
  <div>
      <b-container class="bv-example-row">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Title:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="form.title"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Genre:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.genre"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Cover Image URL:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      v-model="form.cover">
        </b-form-input>
      </b-form-group>
            <b-form-group id="exampleInputGroup3"
                    label="Description:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text-box"
                      required
                      v-model="form.description">
        </b-form-input>
      </b-form-group>
                  <b-form-group id="exampleInputGroup3"
                    label="Authors:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      v-model="form.authors">
        </b-form-input>
      </b-form-group>
          <b-form-select v-model="selected" class="mb-3">
      <option :value="null">Please select an option</option>
      <option value="a">Option A</option>
      <!-- <optgroup label="Grouped Options">
        <option :value="{'C':'3PO'}">Option with object value</option>
        <option :value="{'R':'2D2'}">Another option with object value</option>
      </optgroup> -->
    </b-form-select>
      <b-button type="submit" variant="secondary">Add Author</b-button>
      <b-button type="submit" variant="secondary">Edit Book</b-button>
    </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "EditB",
  data() {
    return {
      form: {
        title: "",
        genre: "",
        cover: "",
        description: "",
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
      this.form.title = "";
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