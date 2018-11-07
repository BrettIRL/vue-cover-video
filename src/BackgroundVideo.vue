<template>
<section class="video-section">
  <video 
    class="video"
    :autoplay="autoplay"
    :loop="loop"
    :playsinline="playsinline"
    :muted="muted"
  >
    <source 
      v-for="(source, index) in sources" 
      :key="index" 
      :src="source.src"
      :type="source.type"
    >
    <img v-if="fallbackImg" :src="fallbackImg" alt="HTML 5 video unsupported by browser">
  </video>
  <div class="video-content">
    <slot></slot>
  </div>
</section>
</template>

<script>
export default {
  props: {
    sources: {
      type: Array,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: true
    },
    playsinline: {
      type: Boolean,
      default: false
    },
    fallbackImg: {
      type: String,
      default: null
    }
  },
  name: 'BackgroundVideo'
}
</script>

<style scoped>
.video-section {
  position: relative;
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
