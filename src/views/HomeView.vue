<template>
  <div id="home" class="home-section section">
    <div v-if="apus.mobile" class="mobile">
      <div class="home-selection-item">
        <!-- <div class="mobile-image">
          <img src="@/assets/images/network.png" />
        </div> -->
        <div class="title" style="margin-bottom:15px;">A Global Decentralized Computing Network.</div>
        <div class="desc">Get low-latency computing services with global edge network nodes.</div>
        <div class="desc">The future of the decentralized computing network is built for Web3.</div>
        <div class="contract">
          <a href="#contact"> Contact Us → </a>
        </div>
      </div>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="home-selection-item" :style="{margin: apus.width >= 1000 ? '180px 0px 100px 0px' : '120px 0px 100px 0px' }">
        <div class="left">
          <div class="title" style="margin-bottom:32px;">A Global Decentralized Computing Network.</div>
          <div class="desc">Get low-latency computing services with global edge network nodes.</div>
          <div class="desc">The future of the decentralized computing network is built for Web3.</div>
          <div class="contract" style="margin-top:24px;">
            <a href="#contact" id="ct"> Contact Us → </a>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/images/network.png" />
        </div>
      </div>
    </div>
  </div>

  <div id="why" class="why-section section">
    <div v-if="apus.mobile" class="mobile" style="padding-bottom: 50px;">
      <div class="title" style="margin: 50px 0px 40px">Why Choose <span class="blue">Apus Network</span></div>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="item in reasons" :key="item.title" style="padding: 0px 32px 16px 32px;">
          <div class="why-apus">
            <div class="left">
              <img :src="item.src" />
            </div>
            <div class="right">
              <div class="title">{{ item.title }}</div>
              <div class="desc">{{ item.desc }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="title" style="margin: 100px 0px 88px">Why Choose <span class="blue">Apus Network</span></div>
      <el-row :gutter="32" style="margin-bottom: 32px;">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in reasons" :key="item.title" style="margin-bottom: 32px;">
          <div class="why-apus">
            <img :src="item.src" />
            <div class="title">{{ item.title }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

  <div id="solution" class="solution-section section">
    <div v-if="apus.mobile" class="mobile">
      <div class="title" style="margin: 50px 0px 20px">Solutions</div>
      <div class="solution" v-for="item in solutions" :key="item.title">
        <img :src="item.src" />
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
      <div style="margin-bottom:36px"></div>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="solution-section-item">
        <div class="title" style="margin: 100px 0px 88px">Solutions</div>
        <div v-for="(item, index) in solutions" :key="item.title">
          <div v-if="index%2==1" class="solution1">
            <div class="left">
              <img :src="item.src" />
            </div>
            <div class="right">
              <div class="solution-text">
                <div class="title">{{ item.title }}</div>
                <div class="desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
          <div v-else class="solution2">
            <div class="left">
              <div class="solution-text">
                <div class="title">{{ item.title }}</div>
                <div class="desc">{{ item.desc }}</div>
              </div>
            </div>
            <div class="right">
              <img :src="item.src" />
            </div>
          </div>
        </div>
        <div style="margin-bottom:36px"></div>
      </div>
    </div>
  </div>

  <div id="partner" class="partner-section section">
    <div v-if="apus.mobile" class="mobile">
      <div class="title" style="margin: 50px 0px 40px">Our Partners</div>
      <el-row style="margin:0px 12px">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in partners" :key="item.src" style="padding: 8px 0px;">
          <div class="partner-item">
            <img :style="{width:(item.width ? item.width : '70%')}" :src="item.src" />
          </div>
        </el-col>
      </el-row>
      <div style="margin-bottom:36px"></div>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="title" style="margin: 80px 0px 40px 0px">Our Partners</div>
      <el-row style="margin:0px 24px">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" v-for="item in partners" :key="item.src" style="padding: 16px 0px;">
          <div class="partner-item">
            <img :style="{width:(item.width ? item.width : '70%')}" :src="item.src" />
          </div>
        </el-col>
      </el-row>
      <div style="margin-bottom:36px"></div>
    </div>
  </div>

  <div id="roadmap" class="roadmap-section section">
    <div v-if="apus.mobile" class="mobile">
      <div class="title" style="margin: 50px 0px 10px">Our Roadmap</div>
      <div class="desc" style="margin: 10px 20px 40px 20px">Take a look at roadmap,showing various stages of mission and upcoming visions.</div>
      <el-row>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" v-for="(item, index) in roadmaps" :key="item.year">
          <div class="roadmap-item">
            <div class="left-circle" v-if="index == roadmaps.length - 1">
              <div> <img src="@/assets/images/roadmap_circle.png" /> </div>
            </div>
            <div class="left" v-else>
              <div> <img src="@/assets/images/roadmap_vertical_time.png" /> </div>
            </div>
            <div class="right">
              <div class="title">{{ item.year }}</div>
              <div class="desc">{{ item.plan }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="change">*Roadmap is tentative and subject to change</div>
      <div style="margin-bottom:36px"></div>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="title" style="margin: 80px 0px 40px 0px">Our Roadmap</div>
      <div class="desc" style="margin: 10px 20px 40px 20px">Take a look at roadmap,showing various stages of mission and upcoming visions.</div>
      <el-row>
        <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" v-for="item in roadmaps" :key="item.year">
          <div class="roadmap-item">
            <div class="title">{{ item.year }}</div>
            <div> <img src="@/assets/images/roadmap_time.png" /> </div>
            <div class="desc">{{ item.plan }}</div>
          </div>
        </el-col>
      </el-row>
      <div class="change">*Roadmap is tentative and subject to change</div>
      <div style="margin-bottom:36px"></div>
    </div>
  </div>

  <div id="contact" class="contact-section section">
    <div v-if="apus.mobile" class="mobile">
      <div class="title" style="margin: 80px 0px 40px 0px">Contact</div>
      <div class="desc" style="margin: 10px 20px 40px 20px">Interested in Apus Netwrok development, running a node, or have any questions? Join the community and get involved! We'd love to meet you.</div>
      <el-row style="margin:0px 12px">
        <el-col class="" :xs="12" :sm="12" :md="12" :lg="12" :xl="12" v-for="item in contracts" :key="item.src" style="padding: 8px 0px;">
          <a :href="item.href">
            <div class="contract-item">
              <img :src="item.src" />
              <span>{{ item.name }}</span>
            </div>
          </a>
        </el-col>
      </el-row>
      <div style="margin-bottom:36px"></div>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="title" style="margin: 50px 0px 10px">Contact</div>
      <div class="desc" style="margin: 10px 20px 40px 20px">Interested in Apus Netwrok development, running a node, or have any questions? Join the community and get involved! We'd love to meet you.</div>
      <el-row>
        <el-col class="contract-big-item" :xs="apus.width >=1000 ? 6 : 12" :sm="apus.width >=1000 ? 6 : 12" :md="apus.width >=1000 ? 6 : 12" :lg="apus.width >=1000 ? 6 : 12" :xl="apus.width >=1000 ? 6 : 12" v-for="item in contracts" :key="item.src" style="padding: 16px 0px;">
          <a :href="item.href">
            <div class="contract-item">
              <img :src="item.src" />
              <span>{{ item.name }}</span>
            </div>
          </a>
        </el-col>
      </el-row>
      <div style="margin-bottom:36px"></div>
    </div>
  </div>

  <div id="footer" class="footer-section section">
    <div v-if="apus.mobile" class="mobile">
      <div class="footer-section-item">
        <div class="desc">Copyright © Apus.Network 2023. All rights reserved</div>
      </div>
    </div>
    <div v-else :style="{maxWidth: apus.maxWidth}" class="pc">
      <div class="footer-section-item">
        <div class="left">
          <img id="logo" src="@/assets/images/logo.png" />
        </div>
        <div class="copyright">
          <div class="desc">Copyright © Apus.Network 2023. All rights reserved</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { reasons, solutions, partners, roadmaps, contracts } from '@/utils/data';
import { useApusStore } from '@/stores/apus'
const apus = useApusStore()
</script>

<style scoped lang="scss">
.section {
  overflow: hidden;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: transparent;
  height: 100%;
  width: 100%;
}

.home-section {
  background-image: url(../assets/images/home@2x.png);
}

.why-section {
  background-image: url(../assets/images/section_2@2x.png);
  letter-spacing: 0;
  text-align: center;
}

.solution-section {
  .title {
    text-align: center;
  }
}

.partner-section {
  background-image: url(../assets/images/section_4@2x.png);
  .title {
    text-align: center;
  }
}

.roadmap-section {
  .title,
  .desc {
    text-align: center;
    /* font-family: PingFangSC-Medium; */
    font-size: 20px;
    color: #000000;
    line-height: 32px;
    font-weight: 500;
  }
}

.contact-section {
  background-image: url(../assets/images/section_4@2x.png);
  .title,
  .desc {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
}

.pc {
  background-color: transparent;
  margin: 0px auto;
  font-weight: 600;
  .title {
    font-size: 48px;
    line-height: 72px;
    .blue {
      color: #1024f0;
    }
  }
  .desc {
    font-size: 20px;
    line-height: 32px;
  }
  .home-selection-item {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      flex: 1 1 auto;
      box-sizing: border-box;
      margin-right: 51px;
      .contract {
        background-color: #1024f0;
        height: 64px;
        width: 184px;
        border-radius: 12px;
        justify-content: center;
        display: flex;
        align-items: center;
        font-family: HelveticaNeue-Bold;
        font-size: 16px;

        letter-spacing: 0;
        line-height: 16px;
        font-weight: 700;
        a {
          color: #ffffff;
        }
      }
      .contract:hover {
        opacity: 0.5;
        color: white;
      }
    }
    .right {
      max-width: 440px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: justify;
      /* margin-left: 30px; */
      img {
        max-width: 100%;
        max-height: 100%;
        display: block;
        margin: auto;
      }
    }
  }
  .why-apus {
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 20px;
    background-color: #f4f2ff;
    img {
      margin-top: 10px;
      width: 148px;
      height: 148px;
    }
    .title {
      font-size: 24px;
      color: #1024f0;
    }
    .desc {
      margin: 10px 64px;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .solution-section-item {
    .solution1 {
      margin-top: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      .title {
        text-align: center;
      }
      .left {
        width: 50%;
        display: flex;
        /* align-items: center;
        justify-content: center;
        text-align: justify; */
        margin: 0px;
        img {
          width: 440px;
          height: 100%;
        }
      }
      .right {
        width: 50%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: justify;
        margin-left: 60px;
        .solution-text {
          .title {
            text-align: left;
            /* font-family: PingFangSC-Medium; */
            font-size: 42px;
            color: #000000;
            line-height: 54px;
            font-weight: 500;
            margin-bottom: 32px;
          }
          .desc {
            text-align: left;
            /* font-family: PingFangSC-Medium; */
            font-size: 18px;
            color: #000000;
            line-height: 32px;
            font-weight: 500;
          }
        }
      }
    }
    .solution2 {
      width: 100%;
      height: 100%;
      display: flex;
      margin-top: 20px;
      .title {
        text-align: center;
      }
      .left {
        width: 50%;
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        text-align: justify;
        margin-right: 60px;
        .solution-text {
          .title {
            text-align: left;
            /* font-family: PingFangSC-Medium; */
            font-size: 42px;
            color: #000000;
            line-height: 54px;
            font-weight: 500;
            margin-bottom: 32px;
          }
          .desc {
            text-align: left;
            /* font-family: PingFangSC-Medium; */
            font-size: 18px;
            color: #000000;
            line-height: 32px;
            font-weight: 500;
          }
        }
      }
      .right {
        width: 50%;
        display: flex;
        /* align-items: center;
        justify-content: center;
        text-align: justify; */
        margin: 0px;
        img {
          width: 440px;
          height: 100%;
        }
      }
    }
  }
  .partner-item {
    background-color: #f4f2ff;
    box-sizing: border-box;
    margin: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 108px;
    img {
      width: 70%;
    }
  }
  .change {
    color: gray;
    font-size: 14px;
    margin-top: 15px;
    text-align: center;
  }
  .roadmap-item {
    width: 100%;
    height: 100%;
    text-align: left;
    img {
      width: 100%;
    }
    .title {
      text-align: left;
      margin-bottom: 10px;
      /* font-family: PingFangSC-Medium; */
      font-size: 20px;
      color: #1024f0;
      line-height: 20px;
      font-weight: 500;
    }
    .desc {
      text-align: left;
      margin: 20px 20px 0px 0px;
      /* font-family: PingFangSC-Medium; */
      font-size: 18px;
      color: #000000;
      line-height: 32px;
      font-weight: 500;
    }
  }
  .contract-item {
    background-color: #f4f2ff;
    box-sizing: border-box;
    margin: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    img {
      width: 32px;
      height: 32px;
    }
    span {
      display: inline-block;
      font-size: 24px;
      margin: 0px 16px;
      color: #000;
    }
  }
  .contract-big-item {
    :hover {
      opacity: 0.5;
      color: white;
    }
  }
  .footer-section-item {
    margin: 30px 15px;
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      width: 440px;
      align-items: center;
      justify-content: center;
      text-align: justify;
      margin: 0px;
      img {
        margin: 15px;
        height: 32px;
        margin: 0px;
      }
    }
    .copyright {
      flex: 1;
      text-align: right;
      .desc {
        text-align: right;
        margin-right: 25px;
        margin-top: 8px;
        font-size: 16px;
        color: #000000;
        letter-spacing: 0;
        line-height: 16px;
        font-weight: 500;
      }
    }
  }
}

.mobile {
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  .title {
    font-family: Poppins-SemiBold;
    font-size: 27px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 36px;
    font-weight: 600;
    margin: 0px 30px;
    .blue {
      color: #1024f0;
    }
  }
  .desc {
    font-family: Poppins-Regular;
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    font-weight: 400;
    margin: 0px 20px;
  }

  .home-selection-item {
    margin: 120px 0px 10px 0px;
    img {
      width: 60%;
      height: 60%;
      margin: 60px 20% 10px 20%;
    }
    .contract {
      background-color: #1024f0;
      width: 150px;
      height: 45px;
      border-radius: 6px;
      justify-content: center;
      display: flex;
      align-items: center;
      font-family: HelveticaNeue-Bold;
      letter-spacing: 0;
      line-height: 16px;
      font-weight: 700;
      margin: 32px auto 52px auto;
      a {
        font-size: 14px;
        color: #ffffff;
      }
    }
  }

  .why-apus {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #f4f2ff;
    display: flex;
    .left {
      width: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: justify;
      img {
        margin: 15px;
        width: 110px;
        height: 110px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        text-align: left;
        font-size: 18px;
        color: #1024f0;
        margin: 18px 15px 10px 0px;
        line-height: 25px;
      }
      .desc {
        text-align: left;
        margin: 0px 15px 21px 0px;
        font-size: 16px;
        line-height: 22px;
      }
    }
  }
  .solution {
    img {
      width: 80%;
      height: 80%;
      margin: 20px 10% 10px 10%;
    }
    .title {
      font-size: 22px;
    }
    .desc {
      line-height: 28px;
    }
  }
  .partner-item {
    background-color: #f4f2ff;
    box-sizing: border-box;
    margin: 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    img {
      width: 70%;
    }
  }

  .change {
    color: gray;
    font-size: 14px;
    margin-top: 15px;
  }
  .roadmap-item {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      width: 16px;
      margin-left: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: justify;
      img {
        width: 16px;
      }
    }
    .left-circle {
      width: 16px;
      margin-left: 32px;
      display: flex;
      margin-top: -6px;
      img {
        width: 16px;
      }
    }
    .right {
      flex: 1;
      .title {
        text-align: left;
        font-size: 18px;
        color: #1024f0;
        margin: -5px 0px 10px 20px;
        line-height: 25px;
      }
      .desc {
        text-align: left;
        margin: -5px 20px 10px 20px;
        /* font-family: PingFangSC-Medium; */
        font-size: 15px;
        color: #000000;
        line-height: 24px;
        font-weight: 500;
      }
    }
  }

  .contract-item {
    background-color: #f4f2ff;
    box-sizing: border-box;
    margin: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 54px;
    img {
      width: 22px;
    }
    span {
      display: inline-block;
      font-size: 17px;
      margin: 0px 10px;
      color: #000;
    }
  }
  .footer-section-item {
    width: 100%;
    height: 100%;
    text-align: center;
    .desc {
      margin: 10px 0px;
      font-family: Poppins-Medium;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.6);
      letter-spacing: 0;
      line-height: 24px;
      font-weight: 500;
    }
  }
}
</style>