<template>
  <div id="app">
    <div class="wrapper">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
    </div>
  </div>
</template>

<script>
import VANaviBar from './NaviBar.vue'
import VASlider from './Slider.vue'
import VAContentWrap from './ContentWrap.vue'
import slideMenuItems from './lib/slideMenuItems.js'
export default {
  name: 'app',
  data() {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  components: {
    'va-navibar': VANaviBar,
    'va-slider': VASlider,
    'va-content-wrap': VAContentWrap
  },
  mounted() {
    document.querySelector('body').setAttribute('style', 'height: auto; min-height: 100%;')
    document.querySelector('body').setAttribute('class', 'skin-blue sidebar-mini wysihtml5-supported')
    document.querySelector('body').setAttribute('style', 'height: auto; min-height: 100%;')
  }
}
</script>
<style>

</style>
