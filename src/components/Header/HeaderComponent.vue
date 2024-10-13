<template>
  <div id="nav_container">
    <div
      id="header"
      class="container d-flex justify-content-between align-items-center"
    >
      <div class="logo">
        <h2 class="m-0">
          <a style="color: var(--bs-pink); text-decoration: none" href="/">{{
            $t("dany_khgney")
          }}</a>
        </h2>
      </div>
      <div class="navbar">
        <ul id="nav_list" class="d-flex justify-content-between p-0">
          <li>
            <RouterLink to="/" activeClass="active_link">{{
              $t("home")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/education" activeClass="active_link">{{
              $t("education")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/skill" activeClass="active_link">{{
              $t("skill")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/experience" activeClass="active_link">{{
              $t("experience")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/about_me" activeClass="active_link">{{
              $t("about_me")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/api" activeClass="active_link">{{
              $t("API")
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="setting">
        <ul class="d-flex justify-content-between align-items-center p-0">
          <li>
            <img
              style="cursor: pointer"
              @click="toggleLocale()"
              width="32px"
              :src="locale_img_src"
              alt="locales"
            />
          </li>
          <li style="padding: 5px 20px">
            <a
              target="_blank"
              href="https://github.com/XDanyKhngey/dany_portfolio"
            >
              <img src="/img/github.png" width="32px" alt="Link to Github" />
            </a>
          </li>
        </ul>
      </div>
      <div id="hamburger_btn" @click="toggleNavbar">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>

    <transition name="slide">
      <div
        class="nav_mobile"
        id="nav_mobile"
        ref="nav_mobile"
        v-if="isNavVisible"
      >
        <ul
          id="nav_list"
          class="d-flex justify-content-between align-items-center p-0"
          style="flex-direction: column"
        >
          <li v-for="(item, index) in navItems" :key="index">
            <RouterLink
              :to="item.path"
              activeClass="active_link"
              @click="hideNavbar"
            >
              {{ $t(item.translationKey) }}
            </RouterLink>
          </li>
          <li>
            <img
              style="cursor: pointer"
              @click="toggleLocale()"
              width="32px"
              :src="locale_img_src"
              alt="locales"
            />
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
h2 {
  color: var(--bs-pink);
  font-weight: bolder;
}
#nav_container {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
#nav_list li {
  padding: 30px 10px;
}
#nav_list a {
  text-decoration: none;
  color: white;
}
#nav_list a:hover {
  border-bottom: 2px solid var(--bs-pink);
}
.active_link {
  border-bottom: 2px solid var(--bs-pink);
  color: var(--bs-pink) !important;
  font-weight: bold;
}

/* Slide transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateY(-20px); /* Start from slightly above */
  opacity: 0; /* Start from transparent */
}

.slide-enter-to,
.slide-leave {
  transform: translateY(0); /* Slide down to original position */
  opacity: 1; /* Fade in */
}

@media (min-width: 991.98px) {
  #hamburger_btn {
    display: none;
  }
}

@media (max-width: 991.98px) {
  #header {
    min-height: 100px;
  }
  .navbar {
    display: none;
  }
  .setting {
    display: none;
  }
  #hamburger_btn {
    display: block;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .bar {
    width: 25px;
    height: 3px;
    background-color: var(--bs-pink);
    margin: 5px 0px;
    border-radius: 5px;
  }
  .nav_mobile #nav_list li {
    padding: 10px 0px;
  }
}

.logo h2 a {
  font-family: "Great Vibes", "Kantumruy Pro" !important;
}
</style>

<script>
export default {
  data() {
    return {
      locale_img_src: "/img/en.png", // Default image source in public folder
      en_img: "/img/en.png", // Image in public folder
      kh_img: "/img/kh.png", // Image in public folder
      isNavVisible: false, // State to manage visibility of mobile nav
      // Array of navigation items
      navItems: [
        { path: "/", translationKey: "home" },
        { path: "/education", translationKey: "education" },
        { path: "/skill", translationKey: "skill" },
        { path: "/experience", translationKey: "experience" },
        { path: "/about_me", translationKey: "about_me" },
        { path: "/api", translationKey: "API" },
      ],
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
      this.updateLocaleImage();
    } else {
      localStorage.setItem("locale", this.$i18n.locale);
      this.updateLocaleImage();
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    toggleLocale() {
      const newLocale = this.$i18n.locale === "kh" ? "en" : "kh";
      this.$i18n.locale = newLocale;
      localStorage.setItem("locale", newLocale);
      this.updateLocaleImage();
      location.reload();
    },

    updateLocaleImage() {
      this.locale_img_src =
        this.$i18n.locale === "kh" ? this.en_img : this.kh_img;
    },

    toggleNavbar() {
      // Toggle the isNavVisible property
      if (window.innerWidth <= 991.98) {
        this.isNavVisible = !this.isNavVisible;
        console.log("Navbar visibility:", this.isNavVisible); // Debug statement
      }
    },

    hideNavbar() {
      this.isNavVisible = false; // Hide the navbar
    },

    handleResize() {
      // Hide the mobile navbar when screen width is larger than 991.98px
      if (window.innerWidth > 991.98) {
        this.isNavVisible = false;
      }
    },
  },
};
</script>
