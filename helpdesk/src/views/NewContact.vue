<template>
  <div>
    <CreateContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateContact from '@/components/AddNewContact.vue'

export default {
  name: 'NewContact',
  components: {
    CreateContact,
  }
}
</script>
