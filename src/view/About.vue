<template>
	<div class="container">
		<el-row>
			<el-col :span="16">
				<div class="hello">
					<h1>我</h1>
					<h2>关于</h2>
					<p>程序狗，混迹于帝都某互联网公司搬砖</p>
					<p>喜欢电脑，会粘贴复制代码</p>
					<p>喜欢宅在屋子里，会偶尔世界乱跑</p>
					<p>喜欢动漫</p>
				</div>				
			</el-col>
			<el-col :span="8">
				<ToolsLink/>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import ToolsLink from '@/components/Maintools.vue';

export default {
	name: 'About',
	components: {
		ToolsLink
	},
	data () {
		return {
			
		};
	}
};
</script>
