<template>
  <div>
    <TopBar/>
    <SideBar/>
    <TicketList v-bind:tickets="tickets"/>
  </div>
</template>
<script>

import TicketList from '@/components/TicketList.vue'
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name:'AllTickets',
  components: {
    TopBar,
    SideBar,
    TicketList
  },
  data() {
        return {
            tickets:[
                {
                    subject:"I need an exchange item",
                    firstname:"Ruth",
                    lastname: 'Mitchel',
                    title:"my money",
                    isRead: false
                },
                {
                    subject:"How can I get a refund for my order?",
                    firstname:"Mugisha",
                    lastname: 'Edison',
                    title:"my money",
                    isRead: true
                },
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