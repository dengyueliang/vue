<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      collapse: true,
      items: [
        {
          icon: "el-icon-info",
          index: "/info/cese",
          title: "系统首页"
        },
        {
          icon: "el-icon-error",
          index: "1",
          title: "门店管理",
          subs: [
            {
              index: "/info/shopAdd",
              title: "新增门店"
            },
            {
              index: "/info/shopList",
              title: "门店列表"
            }
          ]
        },
        {
          icon: "el-icon-success",
          index: "2",
          title: "服务管理",
          subs: [
            {
              index: "/addService",
              title: "新增服务"
            },
            {
              index: "/serviceList",
              title: "服务列表"
            },
            {
              index: "/addSchedule",
              title: "新增排期"
            },
            {
              index: "/scheduleList",
              title: "排期列表"
            }
          ]
        },
        {
          icon: "el-icon-warning",
          index: "3",
          title: "用户管理",
          subs: [
            {
              index: "4",
              title: "商家管理",
              subs: [
                {
                  index: "/info/addBusiness",
                  title: "新增商家"
                },
                {
                  index: "/info/businessList",
                  title: "商家列表"
                }
              ]
            },
            {
              index: "5",
              title: "用户管理",
              subs: [
                {
                  index: "/info/addUser",
                  title: "新增用户"
                },
                {
                  index: "/info/userList",
                  title: "用户列表"
                }
              ]
            }
          ]
        },
        {
          icon: "el-icon-circle-plus",
          index: "6",
          title: "商品管理",
          subs: [
            {
              index: "/info/addGoods",
              title: "新增商品"
            },
            {
              index: "/info/goodsList",
              title: "商家列表"
            },
            {
              index: "/info/addPets",
              title: "新增宠物"
            }
          ]
        }
      ]
    };
  },

  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },

  created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  },

  beforeMount() {},
  mounted() {}
};
</script>



<style scoped>
.sidebar {
  display: inline-block;
  height: 100%;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
