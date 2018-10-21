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
      <div>
        <img src="/static/touxiang.jpg" height="205" width="213"/>
        <span>admin</span>
      </div>
    </div>
    <div class="top">
      11
    </div>
    <div class="todo-container">
      11
    </div>
    <div class="menu-container">
      11
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style type="text/scss" lang="scss">
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
      }
    }
    .header-menu{
      width: 20%;
      font-size: 18px;
      color: rgba(255,255,255,1);
    }

  }

</style>
