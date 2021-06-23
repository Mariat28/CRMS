<template>
<div class="content">
    <div id="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <div>
                      <input type="checkbox" class="form-check-input mt-1" id="exampleCheck1">Select All
                    <a class="btn btn-light border-secondary btn-sm"><i class="fa fa-user-plus"></i>Assign</a>
                    <a class="btn btn-light border-secondary btn-sm"> <i class="fa fa-ban"></i>Close</a>
                    <a class="btn btn-light border-secondary btn-sm"><i class="fa fa-object-group"></i>Merge</a>
                    <a class="btn btn-light border-secondary btn-sm"><i class="fa fa-trash-alt"></i>Delete</a>
                    <!-- <a class="btn btn-light border-secondary btn-sm">Merge</a> -->

                </div>
                <div class="row">
                    <div class="col-lg-8">
                <div style="position:relative" v-for="(ticket, index) in tickets" :key="index">
                    <ticketlistitem v-bind:ticket="ticket"/>
                </div>
                </div>
                <div class="col-lg-4 card border-primary  p-3">
                    <h6>FILTERS</h6>
                <div class="card-body">
                    <form>
                    <div class="mb-3">
                        <label for="formrow-agent" class="form-label">Agents</label>
                        <select id="formrow-agent" class="form-select">
                            <option></option>
                            <option >Ndagire Mariat</option>
                            <option>Brandon Elijah</option>
                            <option>Ismail Asega</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Priority</label>
                        <select id="formrow-inputType" class="form-select">
                            <option></option>
                            <option >Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Urgent</option>
                        </select>
                    </div>
                     <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Type</label>
                        <select id="formrow-inputType" class="form-select">
                            <option></option>
                            <option >Question</option>
                            <option>Refunds and Returns</option>
                            <option>Incident</option>
                            <option>Feature Request</option>
                            <option>Problem</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Groups</label>
                        <select id="formrow-inputType" class="form-select">
                            <option></option>
                            <option >Refunds</option>
                            <option>Escalation</option>
                            <option>Support</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Source</label>
                        <select id="formrow-inputType" class="form-select">
                            <option></option>
                            <option >Phone</option>
                            <option>Form</option>
                            <option>Email</option>
                            <option>Whatsap</option>
                            <option>FaceBook</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Company</label>
                        <select id="formrow-inputType" class="form-select">
                            <option></option>
                            <option >Project Code</option>
                            
                        </select>
                    </div>
                    </form>
                </div>
                    <button href="#" class="btn btn-secondary btn-block">APPLY</button>
                </div>
                
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ticketlistitem from '@/components/TicketListItem.vue';

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

label{
    font-size: 12px;
}
.btn{
    margin-left: 10px;
    margin-bottom: 10px;
}
i{
    padding-right:5px;

}

</style>