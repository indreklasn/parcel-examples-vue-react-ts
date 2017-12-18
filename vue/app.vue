<template>
  <div id="vue">
    <h1>Hello, {{ framework }}!</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return { framework: "Vue" }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: #05ede1;
  }
</style>
