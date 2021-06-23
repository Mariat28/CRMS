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
                    subject:"I need an exchange item",
                    firstname:"Ruth",
                    lastname: 'Mitchel',
                    title:"my money",
                    isRead: false,
                    status: "Open",
                    createdBy: "Brandon Elijah"
                },
                {
                    subject:"How can I get a refund for my order?",
                    firstname:"Mugisha",
                    lastname: 'Edison',
                    title:"my money",
                    isRead: true,
                    status: "Closed",
                    createdBy: "Disan Muwonge"
                },
                {
                    subject:"My return was not picked up",
                    firstname:"Mulungi",
                    lastname: 'Faith',
                    title:"my money",
                    isRead: true,
                    status: "Closed",
                    createdBy: "Rogers Mulumba"
                },
                {
                    subject:"Status of my replacement",
                    firstname:"Mukisa",
                    lastname: 'Ethern',
                    title:"my money",
                    isRead: false,
                    status: "Pending",
                    createdBy: "Jimmy Mukisa"
                },
                {
                    subject:"Need to change my shipping address",
                    firstname:"Kyazze",
                    lastname: 'Kevin',
                    title:"my money",
                    isRead: true,
                    status: "Open",
                    createdBy: "Alex Kalyowa"
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