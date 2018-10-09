<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
  html, body, #app {
    height: 100%;
    overflow: hidden;
    font-size: 14px;
    color: #333;
    margin: 0px;
  }
</style>
