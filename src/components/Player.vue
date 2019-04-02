<template lang="pug">
  .content
    p.is-128x128
      img(:src="track.album.images[0].url").img
    p
      string {{ track.name }}
      small [{{ track.duration_ms}}]
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
export default {
  data() {
    return {
      track: {}
    };
  },
  created() {
    this.$bus.$on('set-track', (track) => {
      this.track = track
      // console.log(`el track es ${track}`);
      
    })
  }
};
</script>

<style lang="sass" scoped>
img
  width: 124px;
  border-radius: 50%;
</style>
