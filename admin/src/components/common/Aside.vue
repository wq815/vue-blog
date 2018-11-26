<template>
    <aside class="side-nav">
        <router-link to="/list" class="link">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon--"></use>
            </svg>
            <p class="descript">列表</p>
        </router-link>
        <router-link to="/tags" class="link">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tag"></use>
            </svg>
            <p class="descript">标签</p>
        </router-link>
        <router-link to="/readbook" class="link">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yuedureading19-copy"></use>
            </svg>
            <p class="descript">阅读</p>
        </router-link>
        <router-link to="/about" class="link">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wo1"></use>
            </svg>
            <p class="descript">朕</p>
        </router-link>
    </aside>
</template>

<script>
/**
 * @author
 * @file 左侧公用导航栏组件
 * */
export default {}
</script>

<style lang="scss" scoped>
.side-nav {
    float: left;
    @include flex($flow: column wrap);
    font-size: 1.6rem;
    height: 100%;
    width: 3em;
    background: rgba(52, 73, 94,.8);
}

.link {
    @include flex($flow: column wrap);
    padding-top: .6em;
    margin-bottom: 3em;
    width: 100%;
    .icon {
        fill: $special;
        width: 1.5em;
        height: 1.5em;
    }
    .descript {
        color: $special;
        font-size: 1rem;
        margin: 0;
        line-height: 30px;
    }

    &:hover {
        border-left: 2px solid $base;
    }

    &:hover > .icon {
        fill: $base;
    }
    &:hover > .descript {
        color: $base;
    }
}

.router-link-active {
    border-left: 2px solid $base;
    .icon {
        fill: $base;
    }
    .descript {
        color: $base;
    }
}
</style>
