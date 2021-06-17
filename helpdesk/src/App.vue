<template>
<div>
    <TopBar/>
    <SideBar/>
  </div>
  <router-view/>
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
