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
                        <input type="text" class="form-control" id="formrow-firstname-input">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formrow-email-input">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-company-input" class="form-label">Company</label>
                        <input type="text" class="form-control" id="formrow-company-input">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label" required>Subject</label>
                        <input type="text" class="form-control" id="formrow-firstname-input">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputState" class="form-label">Type</label>
                        <select id="formrow-inputState" class="form-select">
                            <option>Refund</option>
                            <option>Question</option>
                            <option>Satisfaction</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputState" class="form-label">Source</label>
                        <select id="formrow-inputState" class="form-select">
                            <option>Phone</option>
                            <option>Form</option>
                            <option>Email</option>

                        </select>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 ">
                            <div class="mb-3">
                                <label for="formrow-inputCity" class="form-label">status</label>
                                <input type="text" class="form-control" id="formrow-inputCity">
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="mb-3">
                                <label for="formrow-inputState" class="form-label">Priority</label>
                                <select id="formrow-inputState" class="form-select">
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
                                <select id="formrow-group" class="form-select">
                                    <option selected>Escalations</option>
                                    <option>Customer Support</option>
                                    <option>Medium</option>
                                    <option>Urgent</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="formrow-group" class="form-label">Description</label>
                        <div>
                        <textarea required class="form-control" rows="8"></textarea>
                        </div>
                    </div>
                    <div>
                        <a
                            href="javascript: void(0);"
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
            <div class="card col-md-4  col-xxl-4 overflow-hidden">
                    <div class="bg-primary bg-soft">
                  <div class="text-primary p-3">
                    <h5 class="text-primary text-center">Contact Details</h5> 
                </div>
            </div>
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
</style>
