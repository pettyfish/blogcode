<template>
  <div id="app">
    
    <PublicHeader/>
    <router-view/>
  </div>
</template>

<script>
import PublicHeader from '@/components/PublicHeader.vue';

export default {
  name: 'App',
  components: {
    PublicHeader
  }
}
</script>

