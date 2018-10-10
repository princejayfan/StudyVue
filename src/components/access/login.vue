<template>
  <div class="container">
    <div class="card-container">
      <div class="card-container-logo">
        <img src="/static/logo.png" alt="">
        <h1>
          干部监督系统
        </h1>
      </div>
      <div class="card-container-login">
        <h1>
          登录
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style type="text/scss" lang="scss">
  h1 {
    width: 198px;
    height: 30px;
    font-size: 32px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(25, 143, 255, 1);
    line-height: 60px;

  }
  .container {
    width: 100%;
    height: 100%;
    background: url("/static/loginBg.png") no-repeat center center;
    background-size: cover;
    border: 0px;

    .card-container {
      width: 700px;
      height: 400px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      box-shadow: 0px 0px 20px rgba(9, 0, 102, 0.4);
      position: absolute;
      top: 20%;
      left: 25%;
      display: grid;
      grid-template-columns: 350px 350px;
      grid-template-rows: 300px;
      justify-items: center;
      /*align-items: center;*/
      align-content: center;
      .card-container-logo {
        position: relative;

      }
      .card-container-login{
        text-align:center;
      }
    }
  }



</style>
