<template>
  <div class="content">
    <div id="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <div class="card overflow-hidden">
            <div class="bg-primary bg-soft">
              <div class="row">
                <div class="col-7">
                  <div class="text-primary p-3 ">
                    <h5 class="text-primary text-center ml-5">Create New Ticket!</h5>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div class="card-body pt-0 mt-3">
                <form>
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label" Required>Contact</label>
                        <input type="text" class="form-control" id="formrow-firstname-input">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-firstname-input" class="form-label" required>Subject</label>
                        <input type="text" class="form-control" id="formrow-firstname-input">
                    </div>
                    <div class="mb-3">
                        <label for="formrow-inputState" class="form-label">Type</label>
                        <select id="formrow-inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                     <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">Email</label>
                        <input type="email" class="form-control" id="formrow-email-input">
                    </div>


                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputCity" class="form-label">City</label>
                                                        <input type="text" class="form-control" id="formrow-inputCity">
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputState" class="form-label">State</label>
                                                        <select id="formrow-inputState" class="form-select">
                                                            <option selected>Choose...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-4">
                                                    <div class="mb-3">
                                                        <label for="formrow-inputZip" class="form-label">Zip</label>
                                                        <input type="text" class="form-control" id="formrow-inputZip">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                                    <label class="form-check-label" for="gridCheck">
                                                      Check me out
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" class="btn btn-primary w-md">Submit</button>
                                            </div>
                                        </form>
                <div class="mt-4">
                    <a
                        href="javascript: void(0);"
                        class="btn btn-primary waves-effect waves-light btn-sm"
                        >Add Ticket <i class="mdi mdi-arrow-right ms-1"></i
                    ></a>
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
  margin-left: 240px;
}
</style>
