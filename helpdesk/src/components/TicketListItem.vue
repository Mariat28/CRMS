<template>
  <div class="ticket-item-container">
    <div class="card">
      <!--<div class="card-header bg-transparent border-bottom">
                        Quote
                    </div>-->
      <div class="row">
        <div
          style="display: flex; align-items: center; justify-content: center"
          class="col-1"
        >
          <div style="display: flex">
            <div
              style="margin-left: 15px; margin-right: 10px"
              class="form-check"
            >
              <input
                style="width: 16px; height: 16px"
                class="form-check-input"
                type="checkbox"
                id="remember"
              />
            </div>
            <div class="customer-avatar">
              {{ ticket.firstname[0] }}{{ ticket.lastname[0] }}
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="card-body">
            <p
              v-if="ticket.status != 'Closed'"
              class="ticket-actions-container"
            >
              <TicketAction
                actionMessage="Overdue"
                :style="{ color: '#c82124', 'background-color': '#ffecf0' }"
              />
              <TicketAction
                actionMessage="Customer responded"
                :style="{ color: '#2c5cc5', 'background-color': '#e5f2fd' }"
              />
            </p>

            <blockquote
              v-if="ticket.status != 'Closed'"
              class="card-blockquote mb-0"
            >
              <p
                @mouseover="showTicketDetails($event)"
                v-if="!ticket.isRead"
                style="font-weight: 600; width: 55% !important"
              >
                {{ ticket.subject }}
              </p>
              
              <p @mouseover="showTicketDetails($event)" v-if="ticket.isRead" style="width: 55% !important">
                {{ ticket.subject }}
              </p>
              <footer class="font-size-12 mt-0">
                {{ ticket.firstname }} {{ ticket.lastname }}
                <span
                  style="
                    font-weight: bold;
                    font-size: 18px;
                    position: relative;
                    bottom: 2px;
                    margin-left: 3px;
                    margin-right: 3px;
                  "
                  >.</span
                >
                Created 2 days ago
                <span
                  style="
                    font-weight: bold;
                    font-size: 18px;
                    position: relative;
                    bottom: 2px;
                    margin-left: 3px;
                    margin-right: 3px;
                  "
                  >.</span
                >
                <span class="text-dark">Over due by 21 hours</span>
              </footer>
            </blockquote>

            <!--Only if the ticket is marked as closed-->
            <blockquote
              v-if="ticket.status == 'Closed'"
              class="card-blockquote mb-0"
            >
              <p
                @mouseover="showTicketDetails($event)"
                v-if="ticket.isRead"
                style="color: #74788d59"
              >
                {{ ticket.subject }}
              </p>
              <footer
                class="font-size-12 mt-0"
                style="color: #74788d59 !important"
              >
                {{ ticket.firstname }} {{ ticket.lastname }}
                <span
                  style="
                    font-weight: bold;
                    font-size: 18px;
                    position: relative;
                    bottom: 2px;
                    margin-left: 3px;
                    margin-right: 3px;
                    color: #74788d59 !important;
                  "
                  >.</span
                >
                Created 2 days ago
                <span
                  style="
                    font-weight: bold;
                    font-size: 18px;
                    position: relative;
                    bottom: 2px;
                    margin-left: 3px;
                    margin-right: 3px;
                    color: #74788d59 !important;
                  "
                  >.</span
                >
                <span class="text-dark" style="color: #74788d59 !important"
                  >Resolved on 22nd/06/2021</span
                >
              </footer>
            </blockquote>
          </div>
        </div>
        <div class="col">
          <div
            style="display: flex; align-items: center; justify-content: center"
            class="col"
          >
            <div class="card-body">
              <div style="display: flex; flex-direction: column">
                <select
                  style="width: 120px; outline: none; border: none"
                  class="custom-select custom-select-sm"
                >
                  <option selected>Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </select>
                <select
                  style="width: 120px; outline: none; border: none"
                  class="custom-select custom-select-sm"
                >
                  <option selected>Accounting</option>
                  <option value="1">Technical</option>
                  <option value="2">Finance</option>
                </select>
                <select
                  style="width: 120px; outline: none; border: none"
                  class="custom-select custom-select-sm"
                >
                  <option selected>{{ ticket.status }}</option>
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

    <div
      class="card details hide-details"
      @mouseleave="hideTicketDetails($event)"
    >
      <div
        class="card-title"
        style="border-bottom: 1px solid #74788d21; padding: 0px 20px"
      >
        <div class="agent" style="font-size: 12px; font-weight: 600">
          {{ ticket.createdBy }}
          <span style="font-weight: 300; font-size: 11px">
            submitted a new ticket
          </span>
        </div>
        <div
          style="
            font-weight: 400;
            font-size: 11px;
            colro: #74788d;
            padding: 5px 0px 10px 0px;
          "
          class="timestamp"
        >
          2 days ago (Sunday, 20 Jun 2021 at 2:45 PM)
        </div>
      </div>
      <div
        style="
          margin-bottom: 10px !important;
          border-bottom: 1px solid #74788d21;
        "
        class="details-body"
      >
        <p style="padding: 0px 20px !important; font-size: 12px">
          If you don't see the Sign in another way link, it means that you
          haven't set up any other verification methods. You'll have to contact
          your administrator for help signing into your account.
        </p>
      </div>
      <div class="details-action" style="padding: 0px 10px">
        <div class="reply">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            class="nucleus-icon nucleus-icon--small nucleus-icon--primary"
            aria-hidden="true"
            role="img"
          >
            <path
              d="M6.313 12.929l9.442-9.246c.478-.468.488-1.236.022-1.716s-1.231-.49-1.709-.022L2.499 13.273c-.226.22-.366.529-.366.87s.14.649.366.87l11.569 11.328c.478.468 1.243.458 1.709-.022s.456-1.248-.022-1.716l-9.442-9.246h15.769c2.67 0 4.834 2.174 4.834 4.855v9.508c0 .67.541 1.214 1.209 1.214s1.209-.543 1.209-1.214v-9.508c0-4.022-3.247-7.283-7.252-7.283H6.313z"
            ></path>
          </svg>
          Reply
        </div>
        <div class="add-note">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            class="nucleus-icon nucleus-icon--small nucleus-icon--primary"
            aria-hidden="true"
            role="img"
          >
            <path
              d="M7.822 1.6h16.356c2.258 0 4.089 1.808 4.089 4.038v20.19c0 2.23-1.831 4.038-4.089 4.038H7.822c-2.258 0-4.089-1.808-4.089-4.038V5.638c0-2.23 1.831-4.038 4.089-4.038zm0 2.423c-.903 0-1.636.723-1.636 1.615v20.19c0 .892.732 1.615 1.636 1.615h16.356c.903 0 1.636-.723 1.636-1.615V5.638c0-.892-.732-1.615-1.636-1.615H7.822zm2.234 3.634h11.888a1.21 1.21 0 110 2.422H10.056a1.21 1.21 0 110-2.422zm0 6.865h11.888a1.21 1.21 0 110 2.422H10.056a1.21 1.21 0 110-2.422zm0 6.865h11.888a1.21 1.21 0 110 2.422H10.056a1.21 1.21 0 110-2.422z"
            ></path>
          </svg>
          Add note
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TicketAction from "@/components/TicketAction.vue";
import axios from 'axios';
export default {
  name: "TicketListItem",
  components: {
    TicketAction,
  },
  props: {
    ticket: Object,
  },
  
       data(){
        return {
            ticketList:[],
        }
    },
  methods: {
    showTicketDetails(e) {
      e.srcElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextSibling.classList.toggle(
        "hide-details"
      );
    },
    async created(){
        const data=axios
        .get('http://127.0.0.1:8000/api/ticketList')
        .then(response=>( this.ticketList =  response.data));
        this.ticketList.push(data);
    
    }, 
    methods:{
         hideDetails(e){
        e.srcElement.parentElement.parentElement.parentElement.parentElement.parentElement.nextSibling.classList.add(
        "hide-details"
      );
    },
    disableDetails(e){
        if("hide-details" in e.srcElement.nextSibling.classList) {
           //do nothin
        }
        else{
             e.srcElement.nextSibling.classList.add("hide-details")
        }
    },
    hideTicketDetails(e) {
      e.srcElement.classList.add("hide-details");
    },
    },
}}
</script>

<style scoped>
.card-body blockquote footer {
  color: #74788d !important;
  font-size: 10px;
}
.ticket-actions-container {
  margin-bottom: 2px;
}
select,
option {
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
.ticket-item-container {
  position: relative;
}
.ticket-item-container .details {
  position: absolute;
  width: 100%;
}
blockquote:hover {
  cursor: pointer;
  opacity: 0.8;
}
.details {
  width: 45% !important;
  left: 10%;
  padding: 10px 0px 0px 0px;
  background: #fff;
  top: 60px;
  border-radius: 0 5px 5px 5px;
  border: 1px solid #74788d41;
  z-index: 5;
}
.details-action {
  display: flex;
  justify-content: flex-end;
}
.reply,
.add-note {
  padding: 10px 10px;
}
.reply:hover,
.add-note:hover {
    cursor: pointer;
    opacity: 0.9;
}
.hide-details {
  display: none;
}

svg {
  width: 10px;
  height: 10px;
}
</style>