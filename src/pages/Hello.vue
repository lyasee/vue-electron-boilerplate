<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :title="computedSelect"
      go-to-page-name="Sample"
      @click="setSelect"
      @page-click="gotoSamplePage()"
    />
  </div>
</template>

<script>
import helloStore from "../store/helloWorld";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  },

  computed: {
    computedSelect() {
      return this.$store.getters["hello/select"];
    }
  },

  watch: {
    computedSelect(newValue, oldValue) {
      console.log({ newValue, oldValue });
    }
  },

  beforeCreate() {
    if (!this.$store.state.hello) {
      Promise.all([
        this.$store.registerModule("hello", helloStore),
        this.$store.dispatch("hello/initialize")
      ]);
    }
  },

  methods: {
    setSelect(param) {
      this.$store.dispatch("hello/refreshSelect", param);
    },
    gotoSamplePage() {
      this.$router.push({ name: "Sample" });
    }
  }
};
</script>

<style>
</style>
