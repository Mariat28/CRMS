<template>
  <div>
    <TopBar/>
    <SideBar/>
    <CreateTicket/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTicket from '@/components/AddNewTicket.vue';
import SideBar from '@/components/SideBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'NewTicket',
  components: {
    TopBar,
    SideBar,
    CreateTicket
  }
}
</script>
