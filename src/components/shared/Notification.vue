<template lang="pug">
  .containter
    .columns
      .column.is-5.offset-5
        .notification.is-danger
          slot(name="body") Algo anda mal
</template>

<style lang="sass" scoped>
  .notification 
    margin: 10px;
  
</style>
