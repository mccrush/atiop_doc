<template>
  <div>
    <TheNavbar />
    <TheSidebar />
    <!-- <div class="container-fluid pt-3 pb-5">
      <component :is="component" />
    </div> -->
    <div class="container-fluid pt-3 pb-3">
      <div class="row">
        <div class="d-none d-md-block col-3">
          <NavigationMenu class="" />
        </div>

        <div class="col-12 col-md-9 ps-md-1">
          Как все успеть? Вопрос, которым задаются тысячи людей по всему Миру.
          На самом деле, ощущение того, что сколько бы мы ни выполнили, а
          количество задач как будто бы не уменьшается – иллюзия, вызванная
          причиной отсутствия видения картины в целом. Другими словами, если
          выписать и распределить все существующие задачи по категориям, и затем
          помечать или удалять выполненные, то станет видно, что их число
          конечно и оно уменьшается. То есть, перовое что нужно сделать, это
          зафиксировать задачи. На бумаге или в электронном виде – не важно.
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from './components/interface/TheNavbar.vue'
import TheSidebar from './components/interface/TheSidebar.vue'
import NavigationMenu from './components/interface/NavigationMenu.vue'
import TheFooter from './components/interface/TheFooter.vue'

export default {
  components: {
    TheNavbar,
    TheSidebar,
    NavigationMenu,
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