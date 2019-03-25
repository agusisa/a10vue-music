<template lang="pug">
  #app
    a10-header

    a10-loader(v-show="isLoading")

    section.section()
      nav.navbar.has-shadow
        .container.is-expanded
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text", 
                placeholder="Buscar canciones",
                v-model="searchQuery", 
                @keyup.enter="search")
            .control.is-expanded
              .field.has-addons
                a.button.is-info.is-large(@click="search") Buscar
                a.button.is-danger.is-large(@click="clear") &times
      .container
        p {{ searchMessage }}
      .container.results(v-show="isClear")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            a10-track(:track="t")
      
    a10-footer
          
</template>

<script>
import trackService from "@/services/track";
import A10Footer from "@/components/layout/Footer.vue";
import A10Header from "@/components/layout/Header.vue";
import A10Track from "@/components/Track.vue";
import A10Loader from "@/components/shared/Loader.vue";

export default {
  name: "App",
  components: { A10Footer, A10Header, A10Track, A10Loader },
  data() {
    return {
      isLoading: false,
      isClear: false,
      searchQuery: "",
      tracks: []
    };
  },
  created() {
    return {
      // isLoading: "false"
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    searchQuery(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) return

      this.isLoading = true

      trackService.search(this.searchQuery).then(res => {
        console.log(res)
        this.isLoading = false
        this.isClear = true;
        this.tracks = res.tracks.items
      });
    },
    clear(){
      if (!this.searchQuery) return
      this.searchQuery = ''
        this.isClear = false
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
  margin-top: 50px;
}
</style>