<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    src: { type: String, required: true },
    poster: { type: String, default: '' },
    type: { type: String, default: 'video/mp4' },
    controls: { type: Boolean, default: true },
  })

  const loading = ref(true)

  const handleCanPlay = () => {
    loading.value = false
  }
</script>

<template>
  <div class="video-wrapper">
    <div v-if="loading" class="spinner">
      <div class="loader"></div>
    </div>
    <video
      :controls="controls"
      width="100%"
      :poster="poster"
      @canplaythrough="handleCanPlay"
    >
      <source :src="src" :type="type" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .loader {
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top: 4px solid var(--Blue);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
