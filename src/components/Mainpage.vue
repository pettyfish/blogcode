<template>
	<div class="home-page">
		<div class="banner">
			<img src="~@img/baikal-banner.png" alt="" srcset="">
		</div>			
		
		<div class="container">
			<ul class="article-list">
				<li v-for="list in articleArray" 
					:key="list.id" 
					:style= "{
						background: list.background,
						background: `linear-gradient(to right, ${list.background}, ${list.color})` }">
					<article>
						<h2 class="title">{{list.title}}</h2>
						<p class="content">{{list.content | wordnumPrune}}</p>
						<p class="more">{{list.type}}
						{{list.date}}</p>
											 		
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
	},
	filters: {
		wordnumPrune(value) {
			if (!value) {
				return '';
			}
			if (value.length > 32) {
				return value.slice(0, 32) + '……';
			}
			return value;
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
			margin-bottom: 2rem;
			border-radius: .25rem;
			padding: 1.5rem;
			.content {
				padding: 1rem 0;
			}
		}
		li:nth-last-child(1) {
			margin-bottom: 0;
		}
	}
}
</style>
