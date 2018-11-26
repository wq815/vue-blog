<template>
  <div id="app">
    <head-nav :maskFlag="maskFlag"></head-nav>
    <div id="main" @click="sweepMask">
      <transition mode="out-in" name="fade" @before-enter="beforeEnter" @after-enter="afterEnter">
        <router-view/>
      </transition>
    </div>
    <footer id="app-footer">王强的小小博客
    </footer>
    <div id="backimg"></div>
  </div>
</template>

<script>
import HeadNav from "@/components/common/HeadNav";
export default {
  name: "App",
  components: {
    HeadNav
  },
  data() {
    return {
      maskFlag: false
    };
  },
  methods: {
    sweepMask() {
      this.maskFlag = !this.maskFlag;
    },
    afterEnter() {
      const footer = document.getElementById("app-footer");
      footer.className = "solid";
    },
    beforeEnter() {
      const footer = document.getElementById("app-footer");
      footer.className = "trans";
    }
  }
};
</script>

<style lang='scss'>
footer {
  font-weight: 200;
  width: 95%;
  max-width: 850px;
  text-align: center;
  font-size: 1.4rem;
  margin: 0 auto;
  padding: 2em 0;
  color: $special;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  .github {
    color: $base;
  }
}

.trans {
  opacity: 0;
}

.solid {
  opacity: 1;
}
</style>
