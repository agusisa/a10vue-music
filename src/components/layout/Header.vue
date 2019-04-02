<template lang="pug">
  section.hero.is-success.is-medium
    // Hero head: will stick at the top
    .hero-head
      header.navbar
        .container
          .navbar-brand
            a.navbar-item
              |A10 Music
            span.navbar-burger.burger(data-target='navbarMenuHeroC')
              span
              span
              span
          #navbarMenuHeroC.navbar-menu
            .navbar-end
              a.navbar-item.is-active
                | Home
              a.navbar-item
                | Examples
              a.navbar-item
                | Documentation
              span.navbar-item
                a.button.is-success.is-inverted
                  span.icon
                    i.fab.fa-github
                  span Download
    // Hero content: will be in the middle
    .hero-body
      .container.has-text-centered
        h1.title
          | Title
        h2.subtitle
          | Subtitle
    // Hero footer: will stick at the bottom
    .hero-foot
      nav.tabs.is-boxed.is-fullwidth
        .container
          ul
            li.is-active
              a Overview
            li
              a Modifiers
            li
              a Grid
            li
              a Elements
            li
              a Components
            li
              a Layout
          a10-player.centeredPlayer

        

</template>

<script>
  import a10Player from '@/components/Player.vue'

  export default {
    name: "A10Header",
    components: { a10Player },
  }
</script>

<style lang="sass" scoped>
  .centeredPlayer 
    text-align: center;
</style>


