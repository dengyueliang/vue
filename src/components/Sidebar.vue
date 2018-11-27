<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
 import bus from './bus.js';
export default {
    
  data() {
    return {
      collapse: true,
      items: [
        {
          icon: "el-icon-info",
          index: "dashboard",
          title: "系统首页"
        },
        {
          icon: "el-icon-error",
          index: "table",
          title: "查看门店"
        },
        {
          icon: "el-icon-success",
          index: "tabs",
          title: "增加门店"
        },
        {
          icon: "el-icon-warning",
          index: "3",
          title: "用户管理",
          subs: [
            {
              index: "form",
              title: "门店用户管理"
            },
            
            {
              index: "upload",
              title: "消费用户管理"
            }
          ]
        },
        {
          icon: "el-icon-question",
          index: "icon",
          title: "自定义"
        },
        {
          icon: "el-icon-remove",
          index: "charts",
          title: "添加管理"
        },
        {
          icon: "el-icon-circle-plus",
          index: "drag",
          title: "没想好"
        },
        {
          icon: "el-icon-goods",
          index: "6",
          title: "呵呵哈",
         
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
  }
};
</script>

<style scoped>
.sidebar {
  display:inline-block;
  height: 586px;
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
