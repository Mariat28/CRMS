<template>
  <div>
    <CreateTicket/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTicket from '@/components/AddNewTicket.vue'

export default {
  name: 'NewTicket',
  components: {
    CreateTicket
  }
}
</script>
