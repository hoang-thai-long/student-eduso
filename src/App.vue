<template>
  <component :is="layout"> <router-view /> </component>
</template>
<script lang="ts" setup>
import 'bootstrap/dist/js/bootstrap.js'
import AppLayoutDefault from '@/views/shared/_LayoutDefault.vue';
import { ref ,watch, markRaw} from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const layout = ref();
watch(
  () => route.meta?.layout as string | undefined, 
  async (metaLayout) => {
    try {
      console.log(metaLayout);
      const component = metaLayout && await import(`./views/shared/${metaLayout}.vue`)
      layout.value = markRaw(component?.default || AppLayoutDefault) 
    } catch (e) {
      console.log(e);
      layout.value = markRaw(AppLayoutDefault)
    }
  },
  { immediate: true }
)
</script>
<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css');
@import './assets/scss/vertical-layout-light/style.scss';
</style>
