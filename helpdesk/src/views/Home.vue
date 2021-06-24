<template>
  <div>
    <TopBar/>
    <SideBar/>
    <Dashboard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'Home',
  components: {
    TopBar,
    SideBar,
    Dashboard
  }
}
</script>
