<template lang="pug">
  .containter
    .columns
      .column.is-5.offset-2
        div(:class="[!typeNotification ? 'notification is-success' : 'notification is-danger']")
          slot(name="body") Algo estuvo mal
</template>

<style lang="sass" scoped>
notification 
  margin: 10px;
</style>

<script>
export default {
  name: "A10Notification",
  props: ['typeNotification']
}
</script>