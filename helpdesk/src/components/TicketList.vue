<template>
<div class="content">
    <div id="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <div class="actions mb-3">
                      <input type="checkbox" class="form-check-input select-check" id="exampleCheck1" @click="selectAll"><span>Select All</span>
                    <a class="btn btn-light border-secondary btn-sm d-none" id="action"><i class="fa fa-user-plus"></i>Assign</a>
                    <a class="btn btn-light border-secondary btn-sm d-none" id="action"> <i class="fa fa-ban"></i>Close</a>
                    <a class="btn btn-light border-secondary btn-sm d-none" id="action"><i class="fa fa-object-group"></i>Merge</a>
                    <a class="btn btn-light border-secondary btn-sm d-none" id="action"><i class="fa fa-trash-alt"></i>Delete</a>
                    <a class="text-danger d-none" id="cancel-link" @click="deselect">Cancel</a>

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
import ticketlistitem from "@/components/TicketListItem.vue";

export default {
  name: "AllTicketList",
  props: {
    tickets: Object
  },
  components: {
    ticketlistitem
  },
  methods: {
    selectAll() {
      let check = document.getElementsByClassName("form-check-input");
      for (let i = 0; i < check.length; i++) {
        if (check[i].type == "checkbox") {
          check[i].checked = true;
        }
      }
      let actions = document.querySelectorAll(".btn.d-none");
      for (let x = 0; x <= actions.length; x++) {
        actions[x].classList.remove("d-none");
        document.getElementById("cancel-link").classList.remove("d-none");
      }
    },
    deselect(){
         let check = document.getElementsByClassName("form-check-input");
      for (let i = 0; i < check.length; i++) {
        if (check[i].type == "checkbox") {
          check[i].checked = false;
        }
      }
      let actions = document.querySelectorAll(".btn.btn-light");
      for (let x = 0; x <= actions.length; x++) {
        actions[x].classList.add("d-none");
        document.getElementById("cancel-link").classList.add("d-none");
      }
    }
  }
};
</script>

<style scoped>
label {
  font-size: 12px;
}
.btn {
  margin-left: 10px;
  margin-bottom: 10px;
}
i {
  padding-right: 5px;
}
.select-check {
  margin-top: 3px;
}
#cancel-link {
  margin-left: 10px;
}
#cancel-link:hover {
  cursor: pointer;
}
</style>