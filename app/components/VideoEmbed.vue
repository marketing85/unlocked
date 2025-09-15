<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    src: string
    title: string
  }>()

  const loading = ref(true)
</script>

<template>
  <div class="video-wrapper">
    <!-- Spinner while loading -->
    <div v-if="loading" class="spinner">
      <div class="loader"></div>
    </div>

    <!-- YouTube iframe -->
    <iframe
      :src="src"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      @load="loading = false"
    ></iframe>
  </div>
</template>

<style scoped>
  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 20px;
  }

  iframe {
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
