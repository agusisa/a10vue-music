<template lang="pug">
  #app
    a10-header

    a10-notification(v-show="showNotification")
      p(slot="body") No se encontraron resultados

    a10-loader(v-show="isLoading")

    section.section.bc()
      nav.navbar.has-shadow.bc
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
            a10-track( :class="{ 'is-active': t.id === selectedTrack }",:track="t", @select="setSelectedTrack")
      
    a10-footer
          
</template>

<script>
import trackService from "@/services/track";
import A10Footer from "@/components/layout/Footer.vue";
import A10Header from "@/components/layout/Header.vue";

import A10Track from "@/components/Track.vue";
import A10Notification from '@/components/shared/Notification.vue'
import A10Loader from "@/components/shared/Loader.vue";

export default {
  name: "App",
  components:{ 
    A10Footer: A10Footer,
    A10Header: A10Header,
    A10Track: A10Track,
    A10Loader: A10Loader,
    A10Notification: A10Notification 
  },
  data() {
    return {
      isLoading: false,
      isClear: false,
      searchQuery: "",
      tracks: [],
      selectedTrack: '',
      showNotification: false
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
    },
    showNotification (){
      if (this.showNotification){
        setTimeout(()=>{
          this.showNotification = false;
        },3000)
      }
    }
  },
  created() {
    return {
      // isLoading: "false"
    };
  },
  methods: {
    search() {
      if (!this.searchQuery) return

      this.isLoading = true

      trackService.search(this.searchQuery).then(res => {
        console.log(res)
        this.showNotification = res.tracks.total === 0
        this.isLoading = false
        this.isClear = true;
        this.tracks = res.tracks.items
      });
    },
    clear(){
      if (!this.searchQuery) return
      this.searchQuery = ''
        this.isClear = false
    },
    setSelectedTrack(id){
      this.selectedTrack = id
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.results {
  margin-top: 50px;
}
.is-active {
  border: 3px #23d160 solid;
  span {
    color: #23d160;
  }
}
.bc{
  background-color: #FEEDDD;
}

</style>