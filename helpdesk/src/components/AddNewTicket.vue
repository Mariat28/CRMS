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
                <form>
                    <p>All Fields marked with * are compulsory</p>
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label form-group-required" Required>Name
                            <font-awesome-icon icon="asterisk" class="required fa-2x"/>
                        </label>
                        <input type="text" class="form-control" name="name" id="formrow-firstname-input" v-model="ticket.name">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email"  id="formrow-email-input" v-model="ticket.email">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-company-input" class="form-label">Company</label>
                        <input type="text" class="form-control" name="company" id="formrow-company-input" v-model="ticket.company">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-subject-input" class="form-label" required>Subject</label>
                        <input type="text" class="form-control" name="subject" id="formrow-subject-input" v-model="ticket.subject">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputType" class="form-label">Type</label>
                        <select id="formrow-inputType" class="form-select" v-model="ticket.type">
                            <option >Refund</option>
                            <option>Question</option>
                            <option>Satisfaction</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputSource" class="form-label">Source</label>
                        <select id="formrow-inputSource" class="form-select" v-model="ticket.source">
                            <option>Phone</option>
                            <option>Form</option>
                            <option>Email</option>

                        </select>
                       
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ">
                            <div class="mb-3">
                                <label for="formrow-inputStatus" class="form-label">status</label>
                                <select id="formrow-inputStatus" class="form-select" v-model="ticket.status">
                                    <option selected>Open</option>
                                    <option>Pending</option>
                                    <option>Closed</option>
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
                                <label for="formrow-group" class="form-label">Group</label>
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
                        <textarea required class="form-control" name="description" rows="8" v-model="ticket.description"></textarea>
                        </div>
                    </div>
                    <div>
                        <a
                            href="javascript: void(0);" @click="addTicket"
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
                <div class="bg-secondary bg-soft">
                    <div class="text-primary p-3">
                        <h5 class="text-primary text-center">Contact Details</h5>
                       
                        
                    </div>
                    
                </div>
                  <div class="row contact-div">
                        <div class="details-div col-md-9">
                            <p>Name: <strong>{{ticket.name}}</strong></p>
                            <p>Email: <strong>{{ticket.email}} </strong></p>
                            <p>Phone: <strong>{{ticket.phone}}</strong></p>

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
export default {
  name: "AddNewTicket",
  data(){
      return {
          ticket: {}
      }
  },
  methods:{
      addTicket(){
    this.$toast.success("Ticket successfully added..!",{

   action : {
        text : 'Cancel',
        onClick : (e, toastObject) => {
            toastObject.goAway(0);
        }
    },
    });
    
    setTimeout(this.$toast.clear, 3000);
    
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
.icons{
    font-size: 55px;
    float: right;
    margin-top: 30px;
}
.details-div{
    margin-top: 20px;
    color: grey;
}
strong{
    margin-left: 30px;
}
.contact-div{
    margin-top: 30px;
}
.contact-card{
    border-radius: 25px;
    width:320px;
    height: 300px;
    margin-left: 30px;
    
}
</style>
