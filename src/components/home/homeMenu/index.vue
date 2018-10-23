<template>
  <div class="container">
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
        <img src="/static/touxiang.jpg" height="205" width="213"/>
        <span>admin</span>
      </div>
    </div>
    <div class="top">
      11
    <div class="todo-container">
      22
    </div>
    </div>
    <div class="menu-container">
      33
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style type="text/scss" lang="scss">
  .container{
    background-color: #eaeaf1;
    overflow: hidden;

    .header{
    background-color: #198FFF;
    height: 40px;
    width: 100%;
    box-shadow:0px 0px 0px rgba(0,0,0,0.2);
    display: flex;
    .header-name{
      width: 15%;
      font-size: 18px;
      background-color: #1680E5;
      height: 35px;
      padding-left: 25px;
      padding-top: 5px;
      >span{
        color:rgba(255,255,255,1);
      }
      .iconfont{
        color:rgba(255,255,255,1);
        font-size: 25px;
        position: relative;
        top:2px;
      }
    }
    .header-menu{
      width: 20%;
      font-size: 18px;
      color: rgba(255,255,255,1);
      padding: 8px 0px 0px 8px;
    }
    .header-login{

      width:65%;
      color: azure;
      padding-top: 5px;
      >img{
        width: 30px;
        height: 30px;
        float:right;
        position: relative;
        right:10%;
      }
      >span{
        float:right;
        padding-top: 5px;
      }
    }

  }
    .top{
      width: 30%;
      height: 700px;
      background-color: white;
      margin:5px 0px 0px 5px;
      float:left;
    }
    .menu-container{
      width: 69%;
      height: 700px;
      background-color: white;
      margin:5px 5px 0px 0px;
      float:right;
    }
  }
</style>
