<template>
  <div class="app">
    <div>其它元素</div>
    <Watermark>
      <div id="container">
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容</p>
      </div>
      <div v-if="show" id="container2">
        <div class="content">
          <p>内容内容内容内容内容内容内容内容2</p>
          <p>内容内容内容内容内容内容内容内容2</p>
        </div>
      </div>
    </Watermark>
    <button @click="show = !show">切换</button>
  </div>
</template>

<script>
import Watermark from '../../components/Watermark.vue'

export default {
  components: {
    Watermark
  },
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
#container {
  padding: 1em;
}
</style>
