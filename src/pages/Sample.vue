<template>
  <div>
    <p>{{ content }}</p>
    <button @click="goToMainPage()">Go to Main Page !</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "Sample Page !"
    };
  },

  methods: {
    goToMainPage() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>

