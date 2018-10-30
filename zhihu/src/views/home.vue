<template>
	<div class="home">
	  <mt-swipe class="swiper" :auto="3000" :show-indicators="false">
		  <mt-swipe-item class="item" v-for="item in banner" :key="item.id">
		  	<img :src="item.image">
		  	<span>{{ item.title }}</span>
		  </mt-swipe-item>
		</mt-swipe>
		<div class="list">
			<ul>
				<li v-for="item in list" :key="item.id">
					<p>{{ item.title }}</p>
					<img :src="item.images[0]">
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:"home",
		data(){
			return {
				banner:[],// 00a2ed
				list:[]
			}
		},
		created(){
			this.$http.get('/api/4/news/latest').then((res)=>{
				this.banner = res.data.top_stories;
				this.list = res.data.stories;
			}).catch((err)=>{
				console.log(err)
			})  
		}
	}
</script>
<style scoped>
	.swiper{ width: 7.5rem; height: 7.5rem; }
	.swiper .item{ width: 100%; height: 100%; position: absolute; }
	.swiper img{ display: block; width: 100%; height: 100%; }
	.swiper .item span{ position: absolute; left: 0; bottom: 0; width: 100%; box-sizing: border-box; padding: 0 0.3rem; line-height: 0.8rem; font-size: 0.28rem; color: #fff; background-color: rgba(0,0,0,0.5); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
	.list{ width: 6.9rem; padding: 0.3rem; }
	.list li{ padding: 0.3rem; margin-bottom: 0.3rem; border-radius: 6px; box-shadow: 0 0 20px 0 rgba(0,0,0,0.4); display: flex; justify-content: space-between; }
	.list li p{ width: 4.6rem; line-height: 1.8; color: #999; box-sizing: border-box; }
	.list li img{ width: 1.4rem; height: 1.4rem; }
</style>