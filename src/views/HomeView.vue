<script setup>

</script>

<template>
  <!-- <main> -->
  <div style="width:100%">
    <!--Header-->
    <header id="header" class="alt">
      <div id="header-section" class="header container">
        <img id="logo_image" src="@/assets/images/logo@2x.png" />
        <nav id="nav">
          <ul>
            <li><a id="one" href="#home-section">Home</a></li>
            <li><a id="two" href="#why-section">Why Apus</a></li>
            <li><a id="three" href="#solution_section">Solution</a></li>
            <li><a id="four" href="#partner_section">Partners</a></li>
            <li><a id="five" href="#roadmap_section">Roadmap</a></li>
            <li><a id="six" href="#contact_section">Contact</a></li>
          </ul>
          <div id="top_contact">
            <a href="https://twitter.com/apus_network">
              <img id="top_img_con1" src="@/assets/images/Twitter_top@2x.png" class="top_img_con" />
            </a>
            <a href="https://twitter.com/apus_network">
              <img id="top_img_con2" src="@/assets/images/github_top@2x.png" class="top_img_con" />
            </a>
          </div>
        </nav>
      </div>
    </header>

    <div id="home-section">
      <div id="home" class="home container">
        <div id="left-part" class="inline-div">
          <h1>A Global Decentralized Computing Network.</h1>
          <h2>Get low-latency computing services with global edge network nodes.</h2>
          <h3>The future of the decentralized computing network is built for Web3.</h3>
          <a href="#contact_section">
            <div>Contact Us -></div>
          </a>
        </div>
        <div id="right-part" class="inline-div">
          <img class="home-image" src="@/assets/images/A Global Decentralized Edge Network@2x.png" />
        </div>
      </div>
    </div>

    <div id="why-section">
      <div id="why" class="why container">
        <h1 id="why_title">Why Chose <span id="why_title_apus">Apus Network</span></h1>
        <div id="why_reason_section_1">
          <div id="reason_1" class="why_apus inline-div">
            <img class="home-image" src="@/assets/images/Decentralized@2x.png" />
            <h1>Decentralized</h1>
            <h2>No KYC and anti-censorship to protect users' data privacy and security</h2>
          </div>
          <div id="reason_2" class="why_apus inline-div">
            <img class="home-image" src="@/assets/images/Demand-driven@2x.png" />
            <h1>Performant and Cheap</h1>
            <h2>Ultra-low latency by pushing
              computing power close to the user side and cut costs by reducing backbone data traffic</h2>
          </div>
        </div>
        <div id="why_reason_section_2">
          <div id="reason_3" class="why_apus inline-div">
            <img class="home-image" src="@/assets/images/Web3@2x.png" />
            <h1>Web3 Developers Friendly</h1>
            <h2>Build Web3 Developers friendly API and Commit to Web3's Composability and Interoperability
            </h2>
          </div>
          <div id="reason_4" class="why_apus inline-div">
            <img class="home-image" src="@/assets/images/NO KYC@2x.png" />
            <h1>ESG Friendly</h1>
            <h2>Low-emission data processing by reducing network traffic and using renewable energy</h2>
          </div>
        </div>
      </div>
    </div>

    <div id="solution_section">
      <div id="solution" class="solution container">
        <h1 id="solution_title">Solutions</h1>
        <div id="solution_section_1">
          <div id="soluton_left" class="solution_des inline-div">
            <h1>Decentralized p2p CDN</h1>
            <h2>The decentralized computing network protects user's data and privacy and provides lower
              network latency and a cheaper price than traditional CDNs. </h2>
          </div>
          <div id="solution_right" class="solution_des inline-div">
            <img class="home-image" src="@/assets/images/Decentralized CDN@2x.png" />
          </div>
        </div>
        <div id="solution_section_2">
          <div id="soluton_left_1" class="solution_des inline-div">
            <img class="home-image" src="@/assets/images/Decentralized Edge Computing@2x.png" />
          </div>
          <div id="solution_right_1" class="solution_des inline-div">
            <h1>Decentralized edge transcoding</h1>
            <h2>The decentralized edge computing infrastructure to encode and process live streams for video
              uploaders.</h2>
          </div>
        </div>
      </div>
    </div>

    <div id="partner_section">
      <div id="partner" class="why container">
        <h1 id="partner_title">Our Partners</h1>
        <div id="partner_section_1">
          <div id="partner_1" class="partner_des inline-div">
            <img id="p_img1" src="@/assets/images/BINANCE@2x.png" />
          </div>
          <div id="partner_1" class="partner_des inline-div">
            <img id="p_img2" src="@/assets/images/IPFS@2x.png" />
          </div>
          <div id="partner_1" class="partner_des inline-div">
            <img id="p_img3" src="@/assets/images/FILECOIN@2x.png" />
          </div>
        </div>
        <div id="partner_section_2">
          <div id="partner_2" class="partner_des inline-div">
            <img id="p_img4" src="@/assets/images/arweave-org@2x.png" />
          </div>
          <div id="partner_2" class="partner_des inline-div">
            <img id="p_img5" class="home-image" src="@/assets/images/everVision@2x.png" />
          </div>
          <div id="partner_2" class="partner_des inline-div">
            <img id="p_img6" class="home-image" src="@/assets/images/PORTALVERSE@2x.png" />
          </div>
        </div>
      </div>
    </div>

    <div id="roadmap_section">
      <div id="roadmap" class="why container">
        <h1 id="roadmap_title">Our Roadmap</h1>
        <h2 id="roadmap_des">Take a look at roadmap,showing various stages of mission and upcoming visions.</h2>
        <div id="roadmap_detail_section">
          <div id="roadmap_1" class="roadmap_stone">
            <h1>2022</h1>
            <div><img src="@/assets/images/roadmap_time@2x.png" /></div>
            <h2>Launch MVP.</h2>
          </div>
          <div id="roadmap_2" class="roadmap_stone">
            <h1>2023</h1>
            <div><img src="@/assets/images/roadmap_time@2x.png" /></div>
            <h2>Release Dev/Test Network Acquire more Web3's developers.</h2>
          </div>
          <div id="roadmap_3" class="roadmap_stone">
            <h1>2024</h1>
            <div><img src="@/assets/images/roadmap_time@2x.png" /></div>
            <h2>Release Main Network.</h2>
          </div>
          <div id="roadmap_4" class="roadmap_stone">
            <h1>2025</h1>
            <div><img src="@/assets/images/roadmap_time@2x.png" /></div>
            <h2>Serve mainstream customers in some regions.</h2>
          </div>
        </div>
        <h3 id="roadmap_tip">*Roadmap is tentative and subject to change</h3>
      </div>
    </div>

    <div id="contact_section">
      <div id="contact" class="why container">
        <h1 id="contact_title">Contact</h1>
        <h2 id="c_interested">Interested in Apus Netwrok development, running a node, or have any questions?
          Join the community and get involved! We'd love to meet you.</h2>
        <div id="cantact_des">
          <a href="https://twitter.com/apus_network">
            <div class="contact_item inline-div">
              <img src="@/assets/images/Twitter@2x.png" />
              <span>Twitter</span>
            </div>
          </a>

          <a href="mailto:jason@apus.network">
            <div class="contact_item inline-div">
              <img src="@/assets/images/email@2x.png" />
              <span>Email</span>
            </div>
          </a>
          <a href="https://t.me/+AWdHtLSl2m4yM2I1">
            <div class="contact_item inline-div">
              <img src="@/assets/images/Telegram@2x.png" />
              <span>Telegram</span>
            </div>
          </a>

          <a href="https://github.com/apusnetwork">
            <div class="contact_item inline-div">
              <img src="@/assets/images/github@2x.png" />
              <span>GitHub</span>
            </div>
          </a>
        </div>
      </div>
    </div>

    <footer id="footer_section">
      <div id="footer" class="footer container">
        <img id="logo" src="@/assets/images/logo@2x.png" />
        <h1>Copyright © Apus.Network 2022. All rights reserved.</h1>
      </div>
    </footer>
  </div>
  <!-- </main> -->
</template>
