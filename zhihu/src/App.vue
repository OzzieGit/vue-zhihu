<template>
	<div id="app">
		<Head></Head>
		<router-view></router-view>
	</div>
</template>
<script>
	import Head from './components/header'
	export default{
		name:'app',
		components:{Head}
	}
</script>
<style>
#app { padding-top: 0.88rem;  }
</style>
