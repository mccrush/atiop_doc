<template>
  <div>
    <TheNavbar />
    <div class="container-fluid pt-3 pb-5">
      <component :is="component" />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from './components/interface/TheNavbar.vue'
import TheFooter from './components/interface/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheFooter
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