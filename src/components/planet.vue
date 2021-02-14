<template>
  <div class="container">
    <div class="planet"></div>
  </div>
</template>

<script>
  export default {
  }
</script>
<style scoped>
  .container {
    position: absolute;
    width: 100px;
    height: 100px;
    padding: 20px;
    border-radius: 50%;
    top: 50%;
    margin-top: 130px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(
      150deg,
      #5f2093,
      transparent,
      transparent
    );
    animation: moves 3s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
  }

  .container::before,
  .container::after {
    content: "";
    /* 伪元素是行内元素，设置宽高需要转换为块级元素 */
    display: block;
    width: 8px;
    height: 8px;
    position: relative;
    top: -2px;
    left: 35px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .8);
  }

  .container::before {
    width: 25px;
    top: 20px;
    left: 10px;
    transform: rotate(-45deg);
    z-index: 99;
  }

  .container .planet {
    position: absolute;
    top: 15px;
    left: 15px;
    height: 80%;
    width: 80%;
    border-radius: 50%;
    background-image: linear-gradient(150deg, #a37dce, #5f2093, transparent);
  }

  .container .planet::before,
  .container .planet::after {
    content: "";
    position: absolute;
    width: 230px;
    height: 20px;
    left: -70px;
    top: 30px;
    border-radius: 50%;
    border: 10px solid #c099ef;
    border-top-color: transparent;
    transform: rotate(-25deg);
  }

  .container .planet::after {
    border-top-color: #c099ef;
    /* 这个属性是堆叠顺序 只针对定位元素有效 这里随便写个负值就可以对于的部分就会被覆盖掉 */
    z-index: -99;
}

  /* 做一下漂浮的动画 */
  @keyframes moves {
    0%,
    100% {
      top: 50%;
    }
    50% {
      top: 40%;
    }
  }

</style>