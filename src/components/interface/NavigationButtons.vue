<template>
  <div class="row lh-1 mt-4">
    <div class="col-6 pe-1">
      <div
        v-if="prevView"
        class="d-flex justify-content-start align-items-stretch rounded border cursor-pointer nav-button"
        @click="setPath(prevView.alias)"
      >
        <div class="d-flex align-items-center p-3">
          <div>⇐</div>
        </div>
        <div class="p-3 ps-1">{{ prevView.title }}</div>
      </div>
    </div>
    <div class="col-6 ps-1">
      <div
        v-if="nextView"
        class="d-flex justify-content-end align-items-stretch rounded border cursor-pointer nav-button"
        @click="setPath(nextView.alias)"
      >
        <div class="text-end p-3 pe-1">{{ nextView.title }}</div>
        <div class="d-flex align-items-center p-3">
          <div>⇒</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuItems } from './../../data/menuItems'

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    prevView() {
      const index = menuItems.findIndex(
        item => item.alias === this.currentPath.slice(2)
      )
      return menuItems[index - 1]
    },
    nextView() {
      const index = menuItems.findIndex(
        item => item.alias === this.currentPath.slice(2)
      )
      return menuItems[index + 1]
    }
  },
  methods: {
    setPath(alias) {
      window.location.hash = '#/' + alias
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<style scoped>
.nav-button:hover {
  background-color: #f8f9fa;
}
</style>