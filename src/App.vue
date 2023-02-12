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
            <template #title><a style="width:100%" href="#home">Home</a></template>
          </el-menu-item>
          <el-menu-item index="2">
            <template #title><a style="width:100%" href="#why">Why Apus</a></template>
          </el-menu-item>
          <el-menu-item index="3">
            <template #title><a style="width:100%" href="#solution">Solution</a></template>
          </el-menu-item>
          <el-menu-item index="4">
            <template #title><a style="width:100%" href="#partner">Partners</a></template>
          </el-menu-item>
          <el-menu-item index="5">
            <template #title><a style="width:100%" href="#roadmap">Roadmap</a></template>
          </el-menu-item>
          <el-menu-item index="6">
            <template #title><a style="width:100%" href="#contact">Contact</a></template>
          </el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
    <div class="pc" v-else>
      <img class="logo-image" src="@/assets/images/logo.png" />
      <nav>
        <ul>
          <li><a id="one" href="#home">Home</a></li>
          <li><a id="two" href="#why">Why Apus</a></li>
          <li><a id="three" href="#solution">Solution</a></li>
          <li><a id="four" href="#partner">Partners</a></li>
          <li><a id="five" href="#roadmap">Roadmap</a></li>
          <li><a id="six" href="#contact">Contact</a></li>
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
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { isMobile } from '@/utils/help';

const mobile = ref(isMobile());
const drawer = ref(false)

// 合成项目
const toggleMenu = async () => {
  drawer.value = !drawer.value
};

const route = useRouter()
watch(route.currentRoute, (item) => {
  console.log(item.hash)
});


function myScroll() {
  // 监听页面滚动，将楼层offsetTop与页面scrollTop比较，页面卷边大于各楼层上边框与窗口顶部的距离，则表示到达此楼层
  document.addEventListener('scroll', function (e) {
    if (isMobile()) {
      return
    }
    const aone = document.querySelector('#one');
    const atwo = document.querySelector('#two');
    const athree = document.querySelector('#three');
    const afour = document.querySelector('#four');
    const afive = document.querySelector('#five');
    const asix = document.querySelector('#six');
    const domList = document.querySelectorAll('a');

    // -200是为了让楼层计算模糊
    const top1 = document.querySelector('#home').offsetTop - 200;
    const top2 = document.querySelector('#why').offsetTop - 200;
    const top3 = document.querySelector('#solution').offsetTop - 200;
    const top4 = document.querySelector('#partner').offsetTop - 200;
    const top5 = document.querySelector('#roadmap').offsetTop - 200;
    const top6 = document.querySelector('#contact').offsetTop - 200;

    var windowTop = document.documentElement.scrollTop;
    for (let index = 0; index < domList.length; index++) {
      domList[index].style.color = '#000';
    }
    // 注意楼层判断顺序——倒序，否则到了第一层就会停止判断
    if (windowTop >= 0 && windowTop < 10) {
      aone.style.color = '#1024f0';
    } else if (windowTop >= top5 + 250) {
      asix.style.color = '#1024f0';
    } else if (windowTop >= top5) {
      afive.style.color = '#1024f0';
    } else if (windowTop >= top4) {
      afour.style.color = '#1024f0';
    } else if (windowTop >= top3) {
      athree.style.color = '#1024f0';
    } else if (windowTop >= top2) {
      atwo.style.color = '#1024f0';
    } else if (windowTop >= top1) {
      aone.style.color = '#1024f0';
    }
    document.querySelector('#ct').style.color = '#fff'
  });
}

onMounted(() => {
  if (!mobile.value) {
    myScroll()
  }
  window.onresize = () => {
    mobile.value = isMobile()
    myScroll()
  }
});

onUnmounted(() => {
  document.removeEventListener('scroll', () => { })
});

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
        }
        :hover {
          opacity: 0.5;
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
</style>
