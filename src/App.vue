<template>
  <section>
    <a v-if="isHomePage" href="#/">返回</a>
    <router-view></router-view>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router';
export default {
  setup(props) {
    const router = useRouter();
    const state = reactive({ isHomePage: false });
    // 路由守卫
    router.beforeEach((to, from) => {
      if (to.name == 'home') {
        state.isHomePage = false;
      }else {
        state.isHomePage = true;
      }
    })

    return {
      ...toRefs(state)
    }

  }
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
