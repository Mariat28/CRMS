<template>
<div class="content">
    <div id="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <div class="card"  v-for="(ticket, index) in tickets"  :key="index">
                    <!--<div class="card-header bg-transparent border-bottom">
                        Quote
                    </div>-->
                    <div class="row">
                        <div style="display:flex; align-items:center; justify-content:center;" class="col-1">
                            <div style="display: flex;">
                                    <div style="margin-left: 15px; margin-right: 10px;" class="form-check">
                                        <input style="width: 16px; height:16px;" class="form-check-input" type="checkbox" id="remember"/>
                                    </div>
                                    <div class="customer-avatar">{{ ticket.firstname[0] }}{{ ticket.lastname[0] }} </div>
                            </div>
                        </div>  
                        <div class="col-9">
                            <div class="card-body">
                                <p class="ticket-actions-container">
                                    <TicketAction actionMessage="Overdue" :style="{'color': '#c82124', 'background-color': '#ffecf0'}"/>
                                    <TicketAction actionMessage="Customer responded" :style="{'color': '#2c5cc5', 'background-color': '#e5f2fd'}"/>
                                </p>
                                
                                <blockquote class="card-blockquote mb-0">
                                    <p v-if="!ticket.isRead" style="font-weight: 600;">{{ ticket.subject }}</p>
                                    <p v-if="ticket.isRead">{{ ticket.subject }}</p>
                                    <footer class="font-size-12 mt-0">
                                        {{ ticket.firstname }} {{ ticket.lastname }} 
                                        <span style="font-weight: bold;font-size: 18px; position:relative; bottom: 2px; margin-left: 3px; margin-right:3px;">.</span>
                                        Created 2 days ago
                                        <span style="font-weight: bold;font-size: 18px; position:relative; bottom: 2px; margin-left: 3px; margin-right:3px;">.</span>
                                        <span class="text-dark">Over due by 21 hours</span>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div class="col">
                        <div style="display:flex; align-items:center; justify-content:center;" class="col">
                            <div style="display: flex; flex-direction: column">
                                <div class="priority">Low</div>
                                <div class="priority">Accounting</div>
                                <div class="priority">Open</div>
                            </div>
                        </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TicketAction from '@/components/TicketAction.vue'

export default {
    name: "AllTicketList",
    components: {
        TicketAction,
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

<style scoped>
.card-body blockquote footer{
    color: #74788d !important;
    font-size: 10px;
}
.ticket-actions-container {
    margin-bottom: 2px;
}

.customer-avatar {
    background: #f3f1f1;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}
.form-check {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>