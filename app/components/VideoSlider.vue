<script setup>
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination } from 'swiper/modules'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  const slides = [
    {
      src: 'https://www.youtube.com/embed/EpIAfcSXQk8',
      title: 'An interview with Jonathan Stratton',
    },
    {
      src: 'https://www.youtube.com/embed/-LVHOkc3Zi0?list=PLwWoVBr5668aTYkWTnd7q5BT1wr6M2Bnp',
      title: 'An interview with Kristin Halls',
    },
  ]

  const prevEl = ref(null)
  const nextEl = ref(null)
</script>

<template>
  <div class="slider-wrapper">
    <Swiper
      :modules="[Navigation, Pagination]"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :loop="true"
      class="custom-swiper"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <div class="video">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            :src="slide.src"
            :title="slide.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="video-label">{{ slide.title }}</div>
      </SwiperSlide>
    </Swiper>
    <div class="slider-controls">
      <button ref="prevEl" class="nav-arrow left">←</button>
      <div class="swiper-pagination"></div>
      <button ref="nextEl" class="nav-arrow right">→</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .slider-wrapper {
    position: relative;
    width: 320px;
    border-radius: 12px;
    overflow: hidden;
  }

  .video {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 20px;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  .video-label {
    margin: 16px 0;
    color: var(--Copper);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.72px;
  }

  .custom-swiper {
    width: 100%;
    //max-width: 320px;
    margin: 0 auto;
    border-radius: 12px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 12px;
  }

  .slider-controls {
    display: flex;
    align-items: center;
    justify-self: center;
    gap: 27px;
  }

  .swiper-pagination {
    position: relative;

    :deep(.swiper-pagination-bullet-active) {
      background-color: #4b4a4a;
    }
  }

  .nav-arrow {
    position: relative;
    top: -8px;
    padding: 10px;
    align-self: baseline;
    color: var(--Blue);
    font-size: 25px;
    line-height: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.8px;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  .nav-arrow:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  //   .nav-arrow.left {
  //     left: 12px;
  //   }
  //   .nav-arrow.right {
  //     right: 12px;
  //   }
</style>
