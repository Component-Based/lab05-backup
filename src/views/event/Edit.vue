<template>
  <p>Edit the event here</p>
  <button @click="edit">Edit</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore2'],
  methods: {
    edit() {
      // Assuming successful API call to register them
      this.GStore2.flashMessage = 'The data has been updated'
      setTimeout(() => {
        //After 3 seconds remove it
        this.GStore2.flashMessage = ''
      }, 3000)
      // Set a flash message to appear on the next page loaded which says
      // 'You are succesfully register for' + this.event.title

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
