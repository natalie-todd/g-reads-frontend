<template>
<div class='options'>
    <div>
        <b-card 
          img-src="https://burst.shopifycdn.com/photos/classic-book-with-detailed-cover_373x@2x.progressive.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 70vw;"
          class="mb-2">
    <router-link to='/authors' tag='button' class='btn btn-primary' variant="primary">Authors</router-link>
  </b-card>
        </div>
            <div>
        <b-card 
          img-src="https://burst.shopifycdn.com/photos/hard-cover-books_373x@2x.progressive.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 70vw;"
          class="mb-2">
    <router-link to='/books' tag='button' class='btn btn-primary' variant="primary">Books</router-link>
  </b-card>
        </div>
        </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {};
  }
};
</script>

<style>
.badge {
  color: #ea943f;
}

.options {
    height: 100vh;
    display: flex;
    flex-direction: row;
    /* align-content: center; */
    justify-content: center;
    align-items: center;
}

.btn {
  background-color: #ea943f;  
  border-color: black;
}

.card-body {
    display: flex;
    justify-content: center;
}
</style>