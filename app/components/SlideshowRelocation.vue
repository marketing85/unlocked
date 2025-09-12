<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const currentSlide = ref(0)

  const slides = [
    {
      id: 0,
      type: 'portrait-landscape',
      images: ['/relief/relocation1.jpg', '/relief/relocation2.jpg'],
    },
    {
      id: 1,
      type: 'two-col',
      images: ['/relief/relocation3.jpg', '/relief/relocation4.jpg'],
    },
    {
      id: 2,
      type: 'single',
      images: ['/relief/relocation5.jpg'],
    },
  ]

  let interval

  onMounted(() => {
    interval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, 4000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })
</script>

<template>
  <div class="slideshow">
    <transition name="fade" mode="out-in">
      <div :key="currentSlide" class="slide">
        <!-- Portrait + Landscape layout -->
        <div
          v-if="slides[currentSlide].type === 'portrait-landscape'"
          class="layout layout-portrait-landscape"
        >
          <BasePicture
            v-for="(img, i) in slides[currentSlide].images"
            :key="i"
            :src="img"
            alt="Relief image"
            class="slide-image"
            width="1100"
            height="1467"
          />

<!--          <img-->
<!--            v-for="(img, i) in slides[currentSlide].images"-->
<!--            :key="i"-->
<!--            :src="img"-->
<!--            alt=""-->
<!--            class="slide-image"-->
<!--          />-->
        </div>

        <!-- Two equal columns -->
        <div
          v-else-if="slides[currentSlide].type === 'two-col'"
          class="layout layout-two-col"
        >
          <BasePicture
            v-for="(img, i) in slides[currentSlide].images"
            :key="i"
            :src="img"
            alt="Relief image"
            class="slide-image"
            width="1100"
            height="1467"
          />
<!--          <img-->
<!--            v-for="(img, i) in slides[currentSlide].images"-->
<!--            :key="i"-->
<!--            :src="img"-->
<!--            alt=""-->
<!--            class="slide-image"-->
<!--          />-->
        </div>

        <!-- Single image -->
        <div
          v-else-if="slides[currentSlide].type === 'single'"
          class="layout layout-single"
        >
          <BasePicture
            :src="slides[currentSlide].images[0]"
            alt="Relief image"
            class="slide-image"
            width="1100"
            height="1467"
          />
<!--          <img-->
<!--            :src="slides[currentSlide].images[0]"-->
<!--            alt=""-->
<!--            class="slide-image"-->
<!--          />-->
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .slideshow {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide {
    width: 100%;
  }

  .layout {
    display: grid;
    gap: 16px;
    height: 400px;
  }
  @media (min-width: 768px) {
    .layout {
      height: 490px;
    }
  }

  .layout-portrait-landscape {
    grid-template-columns: 1fr 2fr;
  }

  .layout-two-col {
    grid-template-columns: 1fr 1fr;

    .slide-image {
      object-fit: cover;
      object-position: 0 center;
    }
  }

  .layout-single {
    display: flex;
    width: 100%;
    height: 400px;
  }
  @media (min-width: 768px) {
    .layout-single {
      height: 490px;
    }
  }

  .slide-image, .slide-image :deep(img) {
    width: 100%;
    height: auto;
    min-height: 100%;
    object-fit: cover;
    //object-position: top center;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
  }
  .slide-image:hover, .slide-image :deep(img:hover) {
    filter: grayscale(0%);
  }
</style>
