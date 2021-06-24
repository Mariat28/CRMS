<template>
  <div>
    <TopBar/>
    <SideBar/>
    <CreateContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateContact from '@/components/AddNewContact.vue'
import SideBar from '@/components/SideBar.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'NewContact',
  components: {
    SideBar,
    TopBar,
    CreateContact,
  }
}
</script>
