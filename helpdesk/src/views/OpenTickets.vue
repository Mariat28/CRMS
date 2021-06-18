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
                {
                    subject:"Status of my replacement",
                    firstname:"Mukisa",
                    lastname: 'Ethern',
                    title:"my money",
                    isRead: false
                },
                {
                    subject:"Need to change my shipping address",
                    firstname:"Kyazze",
                    lastname: 'Kevin',
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