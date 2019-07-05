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
    <h3>{{ title }}</h3>
    <ul>
      <li>
        <a @click="handleClick('A')">A Click</a>
      </li>
      <li>
        <a @click="handleClick('B')">B Click</a>
      </li>
      <li>
        <a @click="$emit('page-click')">Go to {{goToPageName}} Page !</a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    title: String,
    goToPageName: String
  },

  methods: {
    handleClick(param) {
      this.$emit("click", param);
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
