<template>
  <div class="home-container">
    <div class="header">
      <div class="header-name">
        <i class="iconfont icon-building"></i>
        <span>干部监督系统</span>
      </div>
      <div class="header-menu">
        <i class="iconfont icon-mulu"></i>
        <span>菜单</span>
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div class="header-login">
        <span>admin</span>
        <img src="/static/photo.jpg" height="205" width="213"/>
      </div>
    </div>
    <div class="top">
      <div class="top-login-container">
        <img src="/static/photo.jpg" height="70" width="70"/>
        <span class="top-login-info">早安，宋开志部长</span>
        <span class="top-login-org">市委组织部</span>
      </div>
      <div class="todo-container">
        <div class="todo-logo"></div>
        <span class="todo-name">代办事项</span>
        <span class="todo-more">更多</span>
      </div>
      <div class="todo-list">
        <div class="todo-list-logo"></div>
        <span class="todo-list-message">请各单位尽快完成成绩补录的消息</span>
        <span class="todo-list-date">5-22</span>
      </div>
    </div>
    <div class="menu-container">
      33
    </div>
    <div class="bank-container">

    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style type="text/scss" lang="scss">
  .home-container {
    background-color: #eaeaf1;
    overflow: hidden;
    .header {
      background-color: #198FFF;
      height: 40px;
      width: 100%;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
      display: flex;
      .header-name {
        width: 15%;
        font-size: 18px;
        background-color: #1680E5;
        height: 35px;
        padding-left: 25px;
        padding-top: 5px;
        > span {
          color: rgba(255, 255, 255, 1);
        }
        .iconfont {
          color: rgba(255, 255, 255, 1);
          font-size: 25px;
          position: relative;
          top: 2px;
        }
      }
      .header-menu {
        width: 20%;
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
        padding: 8px 0px 0px 8px;
      }
      .header-login {

        width: 65%;
        color: azure;
        padding-top: 5px;
        > span {
          float: right;
          padding: 5px 10px 0px 10px;
        }
        > img {
          width: 30px;
          height: 30px;
          float: right;
        }

      }

    }
    .top {
      width: 30%;
      height: 700px;
      background-color: white;
      margin: 5px 0px 0px 5px;
      float: left;
      border-radius: 2px;
      box-shadow: 1px 1px darkgray;
      .top-login-container {
        height: 20%;
        border-bottom: 1px solid #eaeaf1;
        display: grid;
        grid-template-columns: 30% 70%;
        grid-template-rows: 50% 50%;
        align-items: center;
        img {
          grid-column: 1;
          grid-row: 1/3;
          justify-self: center;
          border-radius: 50px;
        }
        .top-login-info {
          font-size: 1.3em;
          align-self: end;
          padding-bottom: 10px;
        }
        .top-login-org{
          position: relative;
          top:-8%;
        }

      }

    }
    .todo-container{
      padding: 15px 5px 0px 5px;
      display: flex;
      .todo-logo{
        height: 15px;
        width: 3px;
        background-color: #198FFF;
        margin: 3px 5px;
      }
      .todo-name{
        margin-left: 5px;
        margin-right: 70%;
      }
    }
    .todo-list{
      margin: 15px 0px 15px 0px;
      display: flex;
      .todo-list-logo{
        margin-left: 15px;
        margin-top: 3px;
        height:15px;
        width: 15px;
        background-color: #eaeaf1;
        border-radius: 50px;
      }
      .todo-list-date{
        padding-left: 80px;
      }
      .todo-list-message{
        padding-left: 10px;
        width: 200px;
      }
    }

    .menu-container {
      width: 69%;
      height: 700px;
      background-color: white;
      margin: 5px 5px 0px 0px;
      float: right;
    }
  }
</style>
