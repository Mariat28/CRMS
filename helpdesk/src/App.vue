<template>
<div>
    <TopBar/>
    <SideBar/>
  <router-view/>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  components:{
SideBar,
TopBar,
  },
  props: {
    msg: String
  }
}
</script>
