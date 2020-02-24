<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h4 class="display-4 text-primary mt-3 mb-2">Meeting Log</h4>
        <p class="lead">
          This app creates meetings, allows people to check in, and picks random
          users to award giveaways. It's an example of a Single Page Application
          which includes connecting to a database and routing. It's a practical
          way to learn
          <a class="text-secondary" href="https://vuejs.org/">Vue.js</a>
          with
          <a class="text-secondary" href="https://firebase.google.com"
            >Firebase</a
          >.
          <font-awesome-icon class="text-danger" icon="burn" />
        </p>

        <router-link class="btn btn-outline-primary mr-3" to="/register"
          >Register</router-link
        >
        <router-link class="btn btn-outline-primary mr-3" to="/login"
          >Log In</router-link
        >
        <router-link class="btn btn-primary" to="/meetings"
          >Meetings</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "home",
  components: {
    FontAwesomeIcon
  }
};
</script>
