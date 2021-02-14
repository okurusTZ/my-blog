<template>
  <div>
    <wbc-nav></wbc-nav>
    <div class="container">
      <el-row>
        <el-col>
          <wbc-sharelist></wbc-sharelist>
        </el-col>
        <el-col>
          <wbc-rightlist></wbc-rightlist>
        </el-col>
      </el-row>
    </div>
    <wbc-footer></wbc-footer>
  </div>
</template>

<script>
import header from '../components/common/header'
import footer from '../components/common/footer'
import shareList from '../components/common/shareList'
import rightList from '../components/common/rightList'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    'wbc-nav': header,
    'wbc-footer': footer,
    'wbc-rightlist': rightList,
    'wbc-sharelist': shareList,
  }
}
</script>
<style scoped>
</style>
