<template>
  <div class="my-header">
    <el-row>
      <el-col :span="24">
        <div class="my-header">
          <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/Home">首页</el-menu-item>
            <el-menu-item el-menu-item index="/Article">博文</el-menu-item>
            <el-submenu index="/Project">
              <template slot="title">我的项目</template>
              <el-menu-item v-for="(project, idx) in projectList" :key="'project-id' + idx">{{project.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item index="/Message">留言板</el-menu-item>
            <el-menu-item index="/AboutMe">关于我</el-menu-item>
          </el-menu>
          <div class="search-part">
            <i class="el-icon-search search-icon"></i>
            <div class="search-box">
              <el-input placeholder="search something..." v-model="inputContent" prefix-icon="el-icon-search"></el-input>
            </div>
          </div>
          <div class="login-part">
            <div class="login" v-show="!hasLogin">
              <a href="">登录&nbsp;</a> | <a href="">&nbsp;注册</a>
            </div>
            <!-- 假如已经登录，显示个人信息 -->
            <div class="info" v-show="hasLogin">
            </div>
          </div>
        </div>
        <div class="header-img">
          <div class="scene">
            <div>
              <span id="luke"></span>
              <planet></planet>
            </div>
          </div>
          <div class="floating">
            <floating-text v-for="(title, index) in titles" :key="index" :title="titles[index]" :inner="inners[index]"></floating-text>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Typeit } from '../../untils/plugin'
import floatingText from '../floatingText'
import planet from '../planet'
export default {
  data() {
    return {
      info: '',
      index: '/', // 用于指示当前所选的路由
      projectList: [
        {
          name: '项目1'
        },
        {
          name: '项目2'
        }
      ],
      hasLogin: false,
      inputContent: '',
      titles: ['XINYI', 'ZHAO'],
      inners: ['点赞', '收藏']
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(key)
    },
    routeChange() {
      var that = this;
      that.index = this.$router.path == '/' ? '/Home' : this.$$route.path;
      console.log();
    }
  },
  components: {
    floatingText,
    planet
  },
  watch: {
    // 如果router有变化，会执行该方法
    '$route': 'routeChange'
  },
  mounted() {
    var that = this;
    var timer = setTimeout(() => {
      Typeit(1, "#luke");
      clearTimeout(timer)
    }, 500)
  }
}
</script>
<style>
  .my-header {
    width: 100%;
    position: fixed;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }

  .my-header .el-menu{
    background-color:teal;
  }

  .my-header .el-menu-item,
  .my-header .el-submenu__title {
    /* 这里给submenu设计必须要加important */
    color: #fff !important;
  }

  .my-header .el-menu-item:hover,
  .my-header .el-submenu__title:hover {
    background: rgb(134, 212, 134) !important;

  }

  .my-header .login {
    height: 100%;
    position: absolute;
    right: 30px;
    top: 0;
    color: #fff;
    font-size: 14px;
  }

  .my-header .login a{
	  text-align: right;
    text-decoration: none;
    color: #fff;
    line-height: 60px;
  }

  .search-part {
    padding: 0;
    max-width: 170px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    line-height: 60px;
  }

  .search-part:hover .search-box{
    opacity: 1;
    visibility: visible;
  }

  .search-part .search-icon {
    color: #fff;
    /* padding-left: 20px; */
    padding-right: 10px;
  }

  .search-part .search-box {
    width: 180px;
    padding: 10px 20px 10px 20px;
    border-radius: 0 0 2px 2px;
    position: absolute;
    right: 0;
    top: 38px;
    opacity: 0;
    visibility: hidden;
    /* 旋转元素的基点 */
    transform-origin: right;
    transition: all .3s ease-out;
  }

  .header-img .scene {
    width: 100%;
    text-align: center;
    font-size: 100px;
    font-weight: 200;
    position: absolute;
    left: 0;
    top: 160px;
    font-family: 'Sigmar One', Arial;
    text-shadow: 0 2px 2px #47456d;
  }

  .header-img .scene span {
    transform: matrix(1, 0, 0, 1, 0, 0);
    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
    text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
  }

  .scene span:after {
    content: "|";
    font-family: Arial, sans-serif;
    font-size: 1em;
    /*line-height: 0;*/
    display: inline-block;
    vertical-align: baseline;
    opacity: 1;
    text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
    animation: caret 500ms infinite;
  }
  @keyframes caret {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .floating {
    font-family: 'Sigmar One', Arial;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>