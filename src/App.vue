<template>
  <header class="header">
    <div class="mobile" v-if="mobile">
      <img class="logo-image" src="@/assets/images/logo.png" />
      <nav>
        <img class="menu-image" src="@/assets/images/menu@2x.png" @click="toggleMenu" />
      </nav>
      <el-drawer v-model="drawer" title="I am the title" :with-header="false" size="50%" @click="drawer=false">
        <el-menu class="menu" default-active="2">
          <el-menu-item index="1">
            <template #title><a href="#home">Home</a></template>
          </el-menu-item>
          <el-menu-item index="2">
            <template #title><a href="#why">Why Apus</a></template>
          </el-menu-item>
          <el-menu-item index="3">
            <template #title><a href="#solution">Solution</a></template>
          </el-menu-item>
          <el-menu-item index="4">
            <template #title><a href="#partner">Partners</a></template>
          </el-menu-item>
          <el-menu-item index="5">
            <template #title><a href="#roadmap">Roadmap</a></template>
          </el-menu-item>
          <el-menu-item index="6">
            <template #title><a href="#contact">Contact</a></template>
          </el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
    <div class="pc" v-else>
      <img class="logo-image" src="@/assets/images/logo.png" />
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#why">Why Apus</a></li>
          <li><a href="#solution">Solution</a></li>
          <li><a href="#partner">Partners</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="link">
          <a href="https://twitter.com/apus_network">
            <img src="@/assets/images/Twitter_top@2x.png" class="link-image" />
          </a>
          <a href="https://twitter.com/apus_network">
            <img src="@/assets/images/github_top@2x.png" class="link-image" />
          </a>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const isMobile = () => {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true
  } else {
    return false
  }
}
const mobile = ref(isMobile());
const drawer = ref(false)

// 合成项目
const toggleMenu = async () => {
  drawer.value = !drawer.value
};

</script>

<style scoped lang="scss">
.header {
  background-color: #fff;
  color: #000;
  cursor: default;

  position: fixed;
  width: 100%;
  z-index: 10000;
  border-bottom: 2px solid #ededed;

  nav {
    height: inherit;
    line-height: inherit;
    vertical-align: middle;
    align-content: center;
    float: right;
    .menu-image {
      width: 16px;
      height: 16px;
      padding: 16px 20px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding-left: 0;
      align-content: center;
      display: inline-block;
      vertical-align: middle;
      li {
        line-height: inherit;
        display: inline-block;
        padding-left: 0;
        margin-left: 20px;
        a {
          color: #000;
          :hover {
            opacity: 0.5;
          }
        }
        ul {
          display: none;
        }
      }
    }
  }
}
.mobile {
  width: 100%;
  height: 49px;

  .logo-image {
    width: 156px;
    height: 22px;
    padding: 13px 20px;
  }
  .menu {
    border-right: none !important;
  }
  a {
    color: #000;
  }
}

.pc {
  height: 94px;
  line-height: 84px;
  width: 1160px;
  background-color: transparent;
  margin: 0px auto;
  .logo-image {
    padding-top: 26px;
    width: 228px;
    height: 32px;
  }
  .link {
    height: 84px;
    display: inline-block;
    margin-left: 40px;
    box-sizing: border-box;
  }

  .link-image {
    height: 24px;
    width: 24px;
    padding-right: 16px;
    vertical-align: middle;
  }
}

@media (min-width: 1024px) {
}
</style>
