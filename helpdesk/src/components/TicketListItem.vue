<template>
    <div class="card">
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
                            <div class="card-body">
                                <div style="display: flex; flex-direction: column">
                                <select style="width: 120px; outline: none; border: none;" class="custom-select custom-select-sm">
                                    <option selected>Low</option>
                                    <option value="1">Medium</option>
                                    <option value="2">High</option>
                                </select>
                                <select style="width: 120px; outline: none; border: none;" class="custom-select custom-select-sm">
                                    <option selected>Accounting</option>
                                    <option value="1">Technical</option>
                                    <option value="2">Finance</option>
                                </select>
                                <select style="width: 120px; outline: none; border: none;" class="custom-select custom-select-sm">
                                    <option selected>Open</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Forwarded</option>
                                    <option value="3">Closed</option>
                                </select>
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
    name: 'TicketListItem',
    components: {
        TicketAction
    },
    props: {
        ticket: Object
    }
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
select, option {
    color: #74788d !important;
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