<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const currentSlide = ref(0)

  const slides = [
    {
      id: 0,
      type: 'portrait-landscape',
      images: [
        '/investors/partners-1-portrait-1.jpg',
        '/investors/partners-1-landscape-1.jpg',
      ],
    },
    {
      id: 1,
      type: 'square-square',
      images: [
        '/investors/partners-2-square-1.jpg',
        '/investors/partners-2-square-2.jpg',
      ],
    },
    {
      id: 2,
      type: 'square-square',
      images: [
        '/investors/partners-3-square-1.jpg',
        '/investors/partners-3-square-2.jpg',
      ],
    },
    {
      id: 3,
      type: 'triple-portrait',
      images: [
        '/investors/partners-4-portrait-1.jpg',
        '/investors/partners-4-portrait-2.jpg',
        '/investors/partners-4-portrait-3.jpg',
      ],
    },
  ]

  let interval

  onMounted(() => {
    interval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, 5000)
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
            alt=""
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

        <!-- Square + Square layout -->
        <div
          v-else-if="slides[currentSlide].type === 'square-square'"
          class="layout layout-square-square"
        >
          <BasePicture
            v-for="(img, i) in slides[currentSlide].images"
            :key="i"
            :src="img"
            alt=""
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

        <!-- Triple Portrait layout -->
        <div
          v-else-if="slides[currentSlide].type === 'triple-portrait'"
          class="layout layout-triple-portrait"
        >
          <BasePicture
            v-for="(img, i) in slides[currentSlide].images"
            :key="i"
            :src="img"
            alt=""
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

        <!-- Landscape layout -->
        <div
          v-else-if="slides[currentSlide].type === 'landscape'"
          class="layout layout-landscape"
        >
          <BasePicture
            :src="slides[currentSlide].images[0]"
            alt=""
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
    //height: 400px;
  }

  .layout-portrait-landscape {
    grid-template-columns: 1fr;
  }

  .layout-square-square {
    grid-template-columns: 1fr;

    .slide-image {
      object-fit: cover;
      object-position: 0 center;
    }
  }

  .layout-triple-portrait {
    grid-template-columns: 1fr;

    .slide-image {
      height: 300px;
      object-fit: cover;
      object-position: 0 center;
    }
  }

  .layout-landscape {
    display: flex;
    width: 100%;
    height: 400px;
  }

  .slide-image, .slide-image :deep(img) {
    width: 100%;
    height: auto;
    min-height: 100%;
    object-fit: cover;
    //object-position: top center;
  }

  @media (min-width: 768px) {
    .layout {
      height: 490px;
    }
    .layout-portrait-landscape {
      grid-template-columns: 1fr 2fr;
    }
    .layout-square-square {
      grid-template-columns: 1fr 1fr;
    }
    .layout-triple-portrait {
      grid-template-columns: 1fr 1fr 1fr;
      .slide-image {
        height: auto;
      }
    }
    .layout-landscape {
      height: 490px;
    }
  }
</style>
