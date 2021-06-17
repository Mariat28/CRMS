<template>
  <div>
    <div class="content">
    <Content/>
    </div>
  </div>
</template>

<script>
import Content from '@/components/DashboardContent.vue'


export default {
  name: 'Dashboard',
  components:{
// SideBar,
// TopBar,
Content,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  margin-left: 240px;
}
</style>
