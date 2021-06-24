<template>
  <div>
    <header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="index.html" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="assets/images/logo.svg" alt="" height="22">
                    </span>
                    <span class="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="17">
                    </span>
                </a>
                <a href="index.html" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="assets/images/logo-light.svg" alt="" height="22">
                    </span>
                    <span class="logo-lg">
                        <img src="assets/images/logo-light.png" alt="" height="19">
                    </span>
                </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                <svg @click="toggleSidebar" id="toggler" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" class="app-icon app-icon--dark cursor-pointer"><path d="M70.4 87.9H30.3c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3h40.1c4 0 7.3-3.3 7.3-7.3-.1-4-3.3-7.3-7.3-7.3zm27.8-30.8h-68c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3h68c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3zM30.3 40.6h68c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3h-68c-4 0-7.3 3.3-7.3 7.3 0 4.1 3.3 7.3 7.3 7.3z"></path></svg>
                <!--<i class="fa fa-fw fa-bars" @click="toggleSidebar" id="toggler"></i>-->
            </button>

            <!-- App Search-->
            <!-- <form class="app-search d-none d-lg-block">
                <div class="position-relative">
                    <input type="text" class="form-control" placeholder="Search...">
                    <span class="bx bx-search-alt"></span>
                </div>
            </form> -->

            <div class="dropdown dropdown-menu-right d-none d-lg-block ms-2">
                <button type="button" class="btn header-item waves-effect "  data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                    <span key="t-megamenu">{{ currentTicketCategory }}</span>
                    <i class="mdi mdi-chevron-down"></i> 
                </button>
                <div class="dropdown-menu " aria-labelledby="tickets-menu">
                <router-link to="/NewTickets">
                    <a class="dropdown-item" data-value="New Tickets" @click="fetchTickets('New Tickets')">New Tickets</a>
                </router-link>
                <router-link to="/AllTickets">
                    <a class="dropdown-item" @click="fetchTickets('All Tickets')">All Tickets</a>
                </router-link>
                <router-link to="/OpenTickets">
                    <a class="dropdown-item" data-value="Open Tickets" @click="fetchTickets('Open Tickets')">Open Tickets</a>
                </router-link>
                <router-link to="/PendingTickets">
                    <a class="dropdown-item" data-value="Pending Tickets" @click="fetchTickets('Pending Tickets')">Pending Tickets</a>
                </router-link>
                <router-link to="/Ticketsassingedtome">
                    <a class="dropdown-item" data-value="Tickets assigned to me" @click="fetchTickets('Tickets assigned to me')">Tickets assigned to me</a>
                </router-link>
                <router-link to="/ClosedTickets">
                    <a class="dropdown-item" data-value="Closed Tickets" @click="fetchTickets('Closed Tickets')">Closed Tickets</a>
                </router-link>
                </div>
            </div>
        </div>

        <div class="d-flex">

            <div class="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-magnify"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown">
        
                    <form class="p-3">
                        <div class="form-group m-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="dropdown dropdown-menu-right d-none d-lg-block ms-1" id="add-new">
                <a role="button" class="btn header-item dropdown-toggle noti-icon waves-effect"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="line-height:50px">
                 Add New
                </a>
                    <div class="dropdown-menu " aria-labelledby="add-new">
                <router-link to="/addnewticket">
                        <a class="dropdown-item">Add new Ticket</a>
                </router-link>
                <router-link to="/addnewcontact">
                        <a class="dropdown-item" href="#">New Contact</a>
                </router-link>
                    </div>
                
            </div>

            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i class="bx bx-fullscreen"></i>
                </button>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="bx bx-bell bx-tada"></i>
                    <span class="badge bg-danger rounded-pill">6</span>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-notifications-dropdown">
                    <div class="p-3">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="m-0" key="t-notifications"> Notifications </h6>
                            </div>
                            <div class="col-auto">
                                <a href="#!" class="small" key="t-view-all"> View All</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar style="max-height: 230px;">
                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="avatar-xs me-3">
                                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                                        <i class="bx bx-cart"></i>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1" key="t-your-order">Your order is placed</h6>
                                    <div class="font-size-12 text-muted">
                                        <p class="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-2 border-top d-grid">
                        <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                            <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span> 
                        </a>
                    </div>
                </div>
            </div>
<!-- profile -->
            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <!--<img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                        alt="Header Avatar">-->
                    <span class="d-none d-xl-inline-block ms-1" key="t-henry">User</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    <!-- item-->
                    <a class="dropdown-item" href="#"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                    <a class="dropdown-item" href="#"><i class="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                    <a class="dropdown-item d-block" href="#"><span class="badge bg-success float-end">11</span><i class="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                    <a class="dropdown-item" href="#"><i class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span key="t-lock-screen">Lock screen</span></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#"><i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span></a>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
                    <i class="bx bx-cog bx-spin"></i>
                </button>
            </div>

        </div>
    </div>
</header>  
  </div>  
</template>
<script>
import Emitter from 'tiny-emitter'

export default {
    name:'TopBar',
    data(){
        return {
            currentTicketCategory: '',
            emitter: new Emitter()
        }
    },
    watch(){
        this.currentTicketCategory
    },
    methods:{
        toggleSidebar(){
            let toggler = document.getElementById("toggler");
            toggler.classList.add("sidebar-enable");  
            toggler.classList.add("vertical-collpsed"); 

        },
        fetchTickets(category){
            this.currentTicketCategory = category
        },
        updateDropDown(){
            if(this.$router.currentRoute._value.path == '/home' || this.$router.currentRoute._value.path == '/NewTickets'){
                this.currentTicketCategory = `New Tickets`
            }
            else{
                this.currentTicketCategory = `${this.$router.currentRoute._value.name}`
            }
        }
    },
    created() {
        this.currentTicketCategory = `New Tickets`
    },
    mounted() {
        this.updateDropDown()

        this.emitter.on('updateTheDropDowns', function(nodata){
            this.currentTicketCategory = "New Tickets"
            console.log("Event Captured" + nodata)
        })
    },
}
</script>

<style scoped>
.dropdown-item:hover {
    cursor: pointer;
}
svg{
    width: 22px;
    height: 22px;
    fill: #555b6d;
}
a{
    color:black;
}
</style>