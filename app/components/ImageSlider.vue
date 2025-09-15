<script setup>
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'

  const slides = [
    {
      src: '/agents/slider-image1.jpg',
      alt: 'Earn commissions no matter what',
    },
    { src: '/agents/slider-image2.jpg', alt: 'Close deals quick' },
    { src: '/agents/slider-image3.jpg', alt: 'Provide more solutions' },
  ]

  const prevEl = ref(null)
  const nextEl = ref(null)
</script>

<template>
  <div class="slider-wrapper">
    <Swiper
      :modules="[Navigation]"
      :navigation="{ prevEl: prevEl, nextEl: nextEl }"
      :loop="true"
      class="custom-swiper"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <BasePicture
          :src="slide.src"
          :alt="slide.alt"
          width="1088"
          height="349"
        />
      </SwiperSlide>

      <button ref="prevEl" class="nav-arrow left">←</button>
      <button ref="nextEl" class="nav-arrow right">→</button>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
  .slider-wrapper {
    position: relative;
    width: 100%;
    margin: auto;
    border-radius: 12px;
    overflow: hidden;
  }

  .custom-swiper {
    border-radius: 12px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  .nav-arrow {
    position: absolute;
    display: flex;
    width: 42px;
    height: 42px;
    padding-bottom: 7px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    color: var(--OffWhite);
    background: rgba(19, 33, 41, 0.36);
    border: 1px solid var(--OffWhite);
    border-radius: 50px;
    font-size: 47px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 2.35px;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  .nav-arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }
  .nav-arrow.left {
    left: 12px;
  }
  .nav-arrow.right {
    right: 12px;
  }
</style>
