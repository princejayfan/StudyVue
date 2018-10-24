<template>
  <div class="container">
    <div class="card-container">
      <div class="tip-container">
        <p>监督</p>
      </div>
      <div class="card-container-logo">
        <img src="/static/logo.png" alt="">
        <h1>
          干部监督系统
        </h1>
        <div class="card-container-logo-pic"></div>
      </div>
      <div class="card-container-login">
        <h1>
          登录
        </h1>
        <div class="username">
          <span>用户名</span>
          <el-input></el-input>
        </div>
        <div class="password">
          <span>密码</span>
          <el-input type="password"></el-input>
        </div>
        <div class="remember">
          <el-checkbox>记住密码</el-checkbox>
        </div>
        <div class="lgoinBtn">
          <el-button @click="Login">登录</el-button>
        </div>
      </div>
    </div>
    <div class="card-container-item1"></div>
    <div class="card-container-item2"></div>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods:{
      Login(){
        let that = this;
        that.$message.success("登录成功");
        that.$router.push('/homeMenu')
      }
    }

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
      align-content: center;
      justify-items: center;
      overflow: hidden;
      z-index: 3;
      .card-container-logo {
        position: relative;
        border-right: 3px solid rgba(0, 0, 0, .03);
        width: 100%;
        > img {
          position: absolute;
          left: 25%;
        }
        > h1 {
          position: absolute;
          top: 60%;
          left: 25%;
        }
        .card-container-logo-pic {
          position: absolute;
          top: 93%;
          left: 43%;
          width: 64px;
          height: 6px;
          background: rgba(25, 143, 255, 1);
          border-radius: 3px;
        }
      }
      .card-container-login {
        display: grid;
        grid-template-columns: 300px;
        align-content: center;
        > h1 {
          text-align: center;
          width: 300px;
        }
        .el-input {
          border-bottom: 2px solid rgba(0, 0, 0, .03);
          border-radius: 10px;

          > input {
            border: none;
            padding-left: 60px;
          }
        }
        .username, .password {
          > span {
            top: 50%;
            position: relative;
            z-index: 1;
            padding-left: 10px;

          }
        }
        .remember{
          height: 50px;
          padding-left: 10px;
          position: relative;
          top: 5%;
        }
        .lgoinBtn{
          text-align: center;
          >button{
            background-color: #409EFF;
            color:#fff;
            width:200px;
            border-radius: 30px;
            height: 35px;
          }
        }
      }
      .tip-container{
        position: absolute;
        left:-6.5%;
        top:-11.5%;
        width: 90px;
        height: 90px;
        transform: rotate(-45deg);
        border-bottom: 2px solid red;
        background-color: red;
        display: grid;
        >p{
          align-self: end;
          text-align: center;
          color:white;
          border-bottom: solid white;
          margin-bottom: 0px;
          padding: 5px;
        }
      }
    }
    .card-container-item1{
      width: 680px;
      height: 410px;
      background-color: #8DBEEB;
      position: absolute;
      top: 20%;
      left: 25.6%;
      border-radius: 10px;
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
      z-index: 2;
    }
    .card-container-item2{
      width: 670px;
      height: 420px;
      position: absolute;
      top: 20%;
      left: 26%;
      border-radius: 10px;
      background-color: #8DBEEB;
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);
      z-index: 1;
    }
  }


</style>
