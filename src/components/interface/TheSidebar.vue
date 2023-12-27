<template>
  <div
    class="offcanvas offcanvas-start"
    data-bs-theme="dark"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Меню</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Закрыть"
      ></button>
    </div>
    <div class="offcanvas-body">
      <NavigationMenu :currentPath="currentPath" />
    </div>
  </div>
</template>

<script>
import NavigationMenu from './NavigationMenu.vue'

export default {
  components: {
    NavigationMenu
  },
  props: {
    currentPath: String
  }
}
</script>