<template>
  <div class="container">
    <div class="upper" style="--i:-20">{{title}}</div>
    <div class="bottom" style="--i:20">{{title}}</div>
    <a href="">{{inner}}</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      title: {
        type: String,
        default: 'XINYI'
      },
      inner: {
        type: String,
        default: '点赞'
      }
    },
  }
</script>
<style scoped>

    body {
      background-color: rgb(60, 60, 70);
      display: flex;
      justify-content: center;
    }
    .container {
      position: relative;
      justify-content: center;
      top: 250px;
      width: 300px;
      margin: 0 20px;
      display: flex;
    }
    .upper, .bottom {
      font-family: 'Sigmar One', Arial;
      top: 0;
      /* font: 900 150px; */
      font-size: 50px;
      position: absolute;
      transition: 0.4s;
      /* font-size: 150px; */
      color: black;
      transform: matrix(1, 0, 0, 1, 0, 0);
      -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
      text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
    }
    .bottom {
      clip-path: inset(49% 0 0 0);
    }
    .upper {
      clip-path: inset(1% 0 50% 0);
    }

    .container:hover .upper,.container:hover .bottom {
      top: calc(var(--i)*1px);
    }

    a {
      font-family: 'Sigmar One', Arial;
      text-decoration: none;
      font-size: 20px;
      color:thistle;
      opacity: 0;
      transition: .4s;
      line-height: 50px;
      transform: matrix(1, 0, 0, 1, 0, 0);
      -webkit-transform: matrix(1, 0, 0, 1, 0, 0);
      text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
    }

    .container:hover a {
      opacity: 1;
    }
</style>