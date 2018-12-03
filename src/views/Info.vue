<template>
  <div class="content">
      <Header></Header>
      <ul class="min">
        <li>
          <Sidebar></Sidebar>
        </li>
        <li style="width:100%">
          <router-view></router-view>
        </li>
      </ul>
  </div>
</template>

<script>
export default {};
</script>
<style>
.min {
  display: flex;
}
</style>
