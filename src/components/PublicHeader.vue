<template>
    <header>
        <div class="container">
            <div class="header-link">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="0" class="home-page">
                        <p class="blog-name">
                            <router-link to="/">BAIKAL</router-link>
                        </p>
                    </el-menu-item>
                    <el-menu-item index="1"><router-link to="/consider">随心而思</router-link></el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">学海无涯</template>
                        <el-menu-item index="2-1">Javascript</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3"><router-link to="/world">世界那么大</router-link></el-menu-item>
                    <el-menu-item index="4"><router-link to="/about">关于</router-link></el-menu-item>
                </el-menu>
            </div>
            <div class="header-tool">

            </div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '0'
        };
    },
    methods: {
        handleSelect (key, keyPath) {
            // console.log(key, keyPath);
        }
    }
};
</script>

<style lang="scss" scoped>
header{
    flex: 0 0 auto;
    .header-link {
        height: 60px;
    }
    .blog-name {
        display: inline-block;
        padding: 0; 
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 3.75rem;
        white-space: nowrap;
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        a {
            color: #303133;
        }
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none;
        display: inline-block;
    }
    .el-menu-item.home-page.is-active {
        border-bottom: 2px solid transparent;
    }
    .el-menu-item a {
        display: inline-block;
        width: 100%;
        height:100%;
        line-height: 3.75rem;
    }
}
</style>
