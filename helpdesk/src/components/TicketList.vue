<template>
<div class="content">
    <div id="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <div v-for="(ticket, index) in tickets" :key="index">
                    <ticketlistitem v-bind:ticket="ticket"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ticketlistitem from '@/components/TicketListItem.vue'

export default {
    name: "AllTicketList",
    props: {
        tickets: Object
    },
    components: {
        ticketlistitem,
    },
}
</script>

<style scoped>
select option {
  margin: 40px;
  background: rgba(255,255,255);
  color: #fff;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}
</style>