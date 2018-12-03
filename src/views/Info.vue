<template>
  <div class="content">
      <Header></Header>
      <ul class="min">
        <li :style="{ 'height': h  }">
          <Sidebar></Sidebar>
        </li>
        <li style="width:100%">
          <router-view></router-view>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return(
      {
          h: window.innerHeight-70+"px",

      }
    )
  },

};
</script>
<style>
.min {
  display: flex;
}
</style>
