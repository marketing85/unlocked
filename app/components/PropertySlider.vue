<script setup>
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  const props = defineProps({
    slides: { type: Array, required: true },
    label: { type: String, required: true },
    link: { type: String, default: null },
    loop: { type: Boolean, default: true },
  })

  const uid = Math.random().toString(36).substring(2, 9)

  const navigationOptions = {
    prevEl: `.custom-prev-${uid}`,
    nextEl: `.custom-next-${uid}`,
  }
</script>

<template>
  <div class="slider-wrapper">
    <Swiper
      :modules="[Navigation]"
      :loop="loop"
      :navigation="navigationOptions"
      class="custom-swiper"
    >
      <SwiperSlide v-for="(img, i) in slides" :key="i">
        <img :src="img" alt="" />
      </SwiperSlide>
    </Swiper>

    <div class="caption">
      <button :class="['custom-prev', `custom-prev-${uid}`]">←</button>
      <div class="caption-label">
        <template v-if="link">
          <a :href="link" target="_blank">{{ label }}</a>
        </template>
        <template v-else>
          {{ label }}
        </template>
      </div>
      <button :class="['custom-next', `custom-next-${uid}`]">→</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .slider-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .custom-swiper {
    width: 100% !important;
    height: auto !important;
    .swiper-slide {
      width: 100% !important;
      height: auto !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }

  .caption {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--Copper);
    color: black;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .caption-label a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
    &:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }
  }

  .custom-prev,
  .custom-next {
    padding: 10px 20px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: var(--OffWhite);
  }
</style>
