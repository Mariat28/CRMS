<template>
  <div>
    <TicketList v-bind:tickets="tickets"/>
  </div>
</template>
<script>

import TicketList from '@/components/TicketList.vue'

export default {
  name:'AllTickets',
  components: {
    TicketList
  },
  data() {
        return {
            tickets:[
                {
                    subject:"My return was not picked up",
                    firstname:"Mulungi",
                    lastname: 'Faith',
                    title:"my money",
                    isRead: true
                },
            ]
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
    margin-left: 100px;
}
</style>