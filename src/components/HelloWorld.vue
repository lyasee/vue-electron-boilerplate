<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>{{ computedSelect || 'null' }}</h3>
    <ul>
      <li>
        <a href="#" @click="setSelect('A')">A Click</a>
      </li>
      <li>
        <a href="#" @click="setSelect('B')">B Click</a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import helloWorldStore from "../store/helloWorld";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  // mapState or this.$store.getters
  // computed: mapState({
  //   computedSelect: state => state.sample.select
  // }),

  computed: {
    computedSelect() {
      return this.$store.getters["helloWorld/select"];
    }
  },

  watch: {
    computedSelect(newValue, oldValue) {
      console.log({ newValue, oldValue });
    }
  },

  beforeCreate() {
    if (!this.$store.state.sample) {
      Promise.all([
        this.$store.registerModule("helloWorld", helloWorldStore),
        this.$store.dispatch("helloWorld/initialize")
      ]);
    }
  },

  methods: {
    setSelect(param) {
      this.$store.dispatch("helloWorld/refreshSelect", param);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
