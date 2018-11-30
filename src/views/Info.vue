<template>
  <div class="content">
      <Header></Header>
      <ul class="min">
        <li :style="{ 'height': h  }">
          <Sidebar></Sidebar>
        </li>
        <li style="width:100%;  position: relative;">
          <router-view></router-view>
        </li>
      </ul>
  </div>
</template>

<script>
import {mapMutations, mapState,mapGetters, mapActions} from "vuex";

export default {
  data(){
    return(
      {
          h: window.innerHeight-70+"px",

      }
    )
  },
  computed:{
    ...mapState("login",["userType"]),
  },
  mounted(){
    // console.log(this.userType)
    // console.log(this.$route.params)
  }
};
</script>
<style>

.min{
 display: flex;

}
</style>
