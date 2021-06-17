<template>
  <div class="content ">
    <div id="main-content">
      <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <!-- col 1 -->
          <div class="card col-md-8 col-xxl-8 overflow-hidden">
            <div class="bg-primary bg-soft">
                  <div class="text-primary p-3">
                    <h5 class="text-primary text-center"> New Contact!</h5> 
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
                    <div>
                        <a
                            href="javascript: void(0);"
                            class="btn form-btn btn-primary waves-effect waves-light w-md" type="submit"
                            >Create<i class="mdi mdi-arrow-right ms-1"></i></a>
                            <a
                            href="javascript: void(0);"
                            class="btn form-btn mr-3 btn-secondary waves-effect waves-light w-md" type="submit"
                            >Cancel <i class="fa fa-ban p-1"></i></a>
                    </div>
                </form>

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
