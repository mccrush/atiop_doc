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
      console.log(
        'setPath() window.location.pathname B = ',
        window.location.pathname
      )
      //window.location.replace('/' + alias)
      window.location.pathname = '/' + alias
      console.log(
        'setPath() window.location.pathname A = ',
        window.location.pathname
      )
    }
  }
}
</script>