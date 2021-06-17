<template>
  <div>
    <TicketList/>
  </div>
</template>
<script>

import TicketList from '@/components/AllTicketList.vue'

export default {
  name:'AllTickets',
  components: {
    TicketList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    margin-left: 100px;
}
</style>