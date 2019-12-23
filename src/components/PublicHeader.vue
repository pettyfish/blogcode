<template>
    <header>
        <div class="container">
            <div>
                <p class="blog-name"><router-link to="/">BAIKAL</router-link></p>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="1"><router-link to="/consider">随心而思</router-link></el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">学海无涯</template>
                        <el-menu-item index="2-1">Javascript</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2"><router-link to="/world">世界那么大</router-link></el-menu-item>
                    <el-menu-item index="3"><router-link to="/about">关于</router-link></el-menu-item>
                </el-menu>
            </div>
            <div>

            </div>
        </div>
    </header>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '1'
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
    .blog-name {
        display: inline-block;
        padding: 0;
        margin-right: 1rem;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 3.75rem;
        white-space: nowrap;
        max-width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .el-menu.el-menu--horizontal {
        border-bottom: none;
        display: inline-block;
    }
}
</style>
