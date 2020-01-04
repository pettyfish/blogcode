<template>
    <footer>
        <div class="container">
            <div class="footer-link">
                <p class="maxim">永远相信,美好的事情即将发生</p>
                <p class="beian"><a href="http://beian.miit.gov.cn">冀ICP备19035616号</a></p>
                <p class="copyright">
                    <router-link to="/">暂时占位</router-link>
                    &emsp;|&emsp;Copyright © 2020 Fish's Blog&emsp;|&emsp; 
                    <router-link to="/about">关于</router-link>
                </p>
            </div>
            <div class="footer-tool">

            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: '0'
        };
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
footer{
    text-align: center;
    box-sizing: border-box;
    padding: 30px 0;
    width: 100%;
    font-weight: 300;
    line-height: 25px;
    background-color:rgba(2, 4, 4, .85);
    color: rgba(251, 251, 251, .7);
    flex: 0 0 auto;
    .copyright a {
        color: rgba(251, 251, 251, .7);
    }
    .beian a {
        color: rgba(255, 255, 255, .2);
    }
    .maxim {
        margin-bottom: 20px;
    }
}
</style>
