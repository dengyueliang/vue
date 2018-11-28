<template>
  <div class="content">
      <Header></Header>
      <ul class="min">
        <li :style="{ 'height': h  }">
          <Sidebar></Sidebar>
        </li>
        <li style="width:100%">
          内容
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

.min{
 display: flex;
}
</style>
