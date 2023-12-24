<template>
  <ul class="list-unstyled list-group ps-0">
    <li
      v-for="item in menuItems"
      :key="item.position"
      class="list-group-item list-group-item-action cursor-pointer"
      data-bs-dismiss="offcanvas"
      data-bs-target="#offcanvasExample"
      @click="setPath(item.alias)"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import { menuItems } from './../../data/menuItems'

export default {
  data() {
    return {
      menuItems
    }
  },
  methods: {
    setPath(alias) {
      window.location.replace('/' + alias)
    }
  }
}
</script>