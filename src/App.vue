<template>
  	<div id="app">
		
			<PublicHeader/>
		<div class="view-page">
			<router-view/>
		</div>
		<PublicFooter/>
  	</div>
</template>

<script>
import PublicHeader from '@/components/PublicHeader.vue';
import PublicFooter from '@/components/PublicFooter.vue';

export default {
    name: 'App',
    components: {
      	PublicHeader, PublicFooter
    }
};
</script>
