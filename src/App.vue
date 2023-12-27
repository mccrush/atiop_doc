<template>
  <div>
    <TheNavbar />
    <TheSidebar />

    <div class="container-lg pt-3 pb-3">
      <div class="row">
        <div class="d-none d-md-block col-3 col-xxl-2">
          <NavigationMenu class="" />
        </div>

        <div class="col-12 col-md-9 col-xl-8 col-xxl-7 ps-md-1 pb-4">
          <component :is="currentView" />
          <NavigationButtons />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import { getRout } from './helpers/getRout'

import TheNavbar from './components/interface/TheNavbar.vue'
import TheSidebar from './components/interface/TheSidebar.vue'
import NavigationMenu from './components/interface/NavigationMenu.vue'
import NavigationButtons from './components/interface/NavigationButtons.vue'
import TheFooter from './components/interface/TheFooter.vue'

import PageNavigation from './pages/PageNavigation.vue'
import PageWhy from './pages/PageWhy.vue'
import PageWhats from './pages/PageWhats.vue'
import PageReview from './pages/PageReview.vue'
import PageNext from './pages/PageNext.vue'
import PageDate from './pages/PageDate.vue'
import PageGTD from './pages/PageGTD.vue'
import PageFurther from './pages/PageFurther.vue'
import PageContacts from './pages/PageContacts.vue'
import PageNotFound from './pages/PageNotFound.vue'

export default {
  components: {
    TheNavbar,
    TheSidebar,
    NavigationMenu,
    NavigationButtons,
    TheFooter,

    PageNavigation,
    PageWhy,
    PageWhats,
    PageReview,
    PageNext,
    PageDate,
    PageGTD,
    PageFurther,
    PageContacts,
    PageNotFound
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return getRout(this.currentPath.slice(1) || '/') || PageNotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style>
.btn:focus,
.btn-close:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

h1 {
  margin-bottom: 16px;
}

p {
  font-size: 18px;
}

.cursor-pointer,
.dropdown-item {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #ffc107;
}

.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-nodecoration {
  text-decoration: none;
}
</style>