<template>
	<div class="home-page">
		<div class="banner">
			<img src="~@img/baikal-banner.png" alt="" srcset="">
		</div>			
		
		<div class="container">
			<ul class="article-list">
				<li v-for="list in articleArray" :key="list.id">
					<article>
						{{list.title}}
						{{list.type}}
						{{list.date}}							
					</article>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Mainpage',
	data () {
		return {
			msg: '最近要开始写一个博客',
			articleArray: []
		};
	},
	created() {
		this.getarticleArray();
	},
	methods: {
		getarticleArray() {
			let that = this;
			axios.get('/articles').then((result) => {
				if (result.data.status === '0') {
					that.articleArray = result.data.result;
				}
			}).catch((err) => {
				console.log(err);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.el-menu--horizontal>.el-menu-item.is-active {
	border-bottom: none;
}
.home-page {
	.banner img {
		width: 100%;
		height: 27.5rem;
		display: block;
	}
	.article-list {
		padding: 3.5rem 8rem;
		li {
			background: greenyellow;
			margin-bottom: 2rem;
			border-radius: .25rem;
			text-align: center;
		}
		li:nth-last-child(1) {
			margin-bottom: 0;
		}
	}
}
</style>
