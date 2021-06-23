<template>
  <div class="content ">
    <div id="main-content">
      <div class="page-content">
        <div class="container-fluid">
            <div class="row">
          <div class="card col-md-8 col-xxl-8 overflow-hidden">
            <div class="bg-primary bg-soft">
                  <div class="text-primary p-3">
                    <h5 class="text-primary text-center">New Ticket!</h5> 
                </div>
            </div>
            <div class="card-body pt-0 mt-3">
                <form method="POST" @submit.prevent="addTicket">
                    <p>All Fields marked with * are compulsory</p>
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label form-group-required" Required>Contact Name
                            <font-awesome-icon icon="asterisk" class="required fa-2x"/>
                        </label>
                        <input type="text" class="form-control" name="name" id="formrow-firstname-input" v-model="ticket.name">
                        <span class="new-contact-span text-danger d-none " id="cancel-text" @click="showdiv">Cancel</span>
                        <span class="new-contact-span text-primary pr-3" id="new-contact-text" @click="showdiv">Add New Contact</span>
                    </div>
                    <div class="d-none"  id="addcontactdiv">
                    <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email"  id="formrow-email-input" v-model="ticket.email">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-phone-input" class="form-label">Phone</label>
                        <input type="phone" class="form-control" name="phone"  id="formrow-phone-input" v-model="ticket.phone">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-company-input" class="form-label">Company</label>
                        <input type="text" class="form-control" name="company" id="formrow-company-input" v-model="ticket.company">
                    </div>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-subject-input" class="form-label" required>Subject</label>
                        <input type="text" class="form-control" name="subject" id="formrow-subject-input" v-model="ticket.subject">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Type</label>
                        <select id="formrow-inputType" class="form-select" v-model="ticket.type">
                            <option >Refunds</option>
                            <option>Question</option>
                            <option>Incident</option>
                            <option>Feature Request</option>
                            <option>Problem</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputSource" class="form-label">Source</label>
                        <select id="formrow-inputSource" class="form-select" v-model="ticket.source">
                            <option>Phone</option>
                            <option>Form</option>
                            <option>Email</option>
                            <option>Whatsap</option>
                            <option>FaceBook</option>



                        </select>
                       
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ">
                            <div class="mb-3">
                                <label for="formrow-inputStatus" class="form-label">Status</label>
                                <select id="formrow-inputStatus" class="form-select" v-model="ticket.status">
                                    <option>Open</option>
                                    <option>Pending</option>
                                    <option>Resolved</option>
                                    <option>Closed</option>
                                    <option>Waiting on Customer</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <label for="formrow-inputPriority" class="form-label">Priority</label>
                                <select id="formrow-inputPriority" class="form-select" v-model="ticket.priority">
                                    <option selected>Low</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Urgent</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <label for="formrow-group" class="form-label">Department</label>
                                <select id="formrow-group" class="form-select" v-model="ticket.group">
                                    <option selected>Escalations</option>
                                    <option>Customer Support</option>
                                    <option>Medium</option>
                                    <option>Urgent</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-agent-input" class="form-label" required>Agent</label>
                        <input type="text" class="form-control" name="agent" id="formrow-agent-input" v-model="ticket.agent">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-group" class="form-label">Description</label>
                        <div>
                        <textarea required class="form-control" name="body" rows="8" v-model="ticket.body"></textarea>
                        </div>
                    </div>
                    <div>
                        <a
                            @click="addTicket"
                            class="btn form-btn btn-primary waves-effect waves-light w-md" type="submit"
                            >Create<i class="mdi mdi-arrow-right ms-1"></i
                        ></a>
                        <a
                            href="javascript: void(0);"
                            class="btn form-btn mr-3 btn-secondary waves-effect waves-light w-md" type="submit"
                            >Cancel <i class="fa fa-ban p-1"></i></a>
                    </div>
                </form>

            </div>
          </div>
           <!-- col 2 -->
            <div class="card col-md-4 col-xxl-4 overflow-hidden contact-card">
                <div class=" bg-light">
                    <div class="text-primary p-3">
                        <h5 class="text-primary text-center">Contact Details</h5>
                       
                        
                    </div>
                    
                </div>
                  <div class="row contact-div">
                        <div class="details-div col-md-9">
                            <p>Name:</p> <strong>{{ticket.name}}</strong>
                            <p>Email:</p> <strong>{{ticket.email}} </strong>
                            <p>Phone:</p> <strong>{{ticket.phone}}</strong>

                        </div>
                            <div class="col-md-3"><font-awesome-icon icon="user" class="icons text-primary"/></div>
                            </div>
                            <a class="text-center mt-3" href="#">View more<i class="mdi mdi-arrow-right"></i> </a>
            </div>
            </div>
        </div>
        <!-- container-fluid -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
let show=true;
export default {
  name: "AddNewTicket",
  data(){
      return {
          ticket:{ },

      }
  },
  methods:{
      async addTicket(){  
          const endpoint='http://127.0.0.1:8000/api/addticket'
          await axios.post(endpoint, this.ticket).then(()=>{
              console.log(this.ticket); 
          }). catch((err) => console.log(err));
               this.ticket={
                    name:" ",
                    phone:' ',
                    body:' '
               },  
            this.$toast.success("Ticket successfully added..!",{

   action : {
        text : 'Cancel',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
  
    });
    
    setTimeout(this.$toast.clear, 3000);
    
      },
        showdiv(){
            if(show){
            document.getElementById('addcontactdiv').classList.remove('d-none');
            document.getElementById('new-contact-text').classList.add('d-none');
            document.getElementById('cancel-text').classList.remove('d-none');
            show=false;
            }
            else{
              document.getElementById('addcontactdiv').classList.add('d-none');
            document.getElementById('new-contact-text').classList.remove('d-none');
            document.getElementById('cancel-text').classList.add('d-none');
            show=true;  
            }
    }
  }
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin-left: 120px;
}
.required{
    font-size: 9px;
}
.form-btn{
    float: right;
     margin-right: 5px;
}
.new-contact-span{
    float:right;
    margin-top: 5px;
}
.new-contact-span:hover{
    cursor: pointer;
}
.icons{
    font-size: 55px;
    float: right;
    margin-top: 30px;
}
.details-div{
    margin-top: 0px;
    color: grey;
}
strong{
    margin-left: 0px;
}
.contact-div{
    margin-top: 30px;
}
.contact-card{
    border-radius: 25px;
    width:330px;
    height: 300px;
    margin-left: 30px;
    
}
</style>
