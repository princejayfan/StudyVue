<template>
  <div class="nofound-container">
    <span class="number"><em>404</em>,无法打开页面</span>
  </div>
</template>

<script>
  export default {
    name: "NotFound"
  }
</script>

<style scoped lang="scss">
  .nofound-container {
    box-sizing: border-box;
    text-align: center;

    .number {
      padding: 50px 0;
      display: block;

      em {
        font-size: 3em;
      }

    }
  }
</style>
