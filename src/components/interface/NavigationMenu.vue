<template>
  <ul class="list-unstyled ps-0">
    <li v-for="item in menuItems" :key="item.position" class="mb-1">
      <button
        class="btn btn-sm btn-light btn-toggle d-inline-flex align-items-center w-100"
      >
        {{ item.title }}
      </button>
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
  }
}
</script>