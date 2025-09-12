<script setup>
  import { ref, onMounted, nextTick } from 'vue'
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

  const prevEl = ref(null)
  const nextEl = ref(null)
  const swiperInstance = ref(null)

  function attachNavigation() {
    const s = swiperInstance.value
    const prev = prevEl.value
    const next = nextEl.value
    if (!s || !prev || !next) return

    s.params.navigation = s.params.navigation || {}
    s.params.navigation.prevEl = prev
    s.params.navigation.nextEl = next

    if (s.navigation && typeof s.navigation.destroy === 'function') {
      s.navigation.destroy()
    }

    // initialise/update navigation
    if (s.navigation && typeof s.navigation.init === 'function') {
      s.navigation.init()
      s.navigation.update()
    }
  }

  function onSwiper(swiper) {
    swiperInstance.value = swiper
    // try attaching immediately (if buttons are mounted)
    attachNavigation()
  }

  onMounted(async () => {
    await nextTick()
    attachNavigation()
  })
</script>

<template>
  <div class="slider-wrapper">
    <Swiper
      :modules="[Navigation]"
      :loop="loop"
      @swiper="onSwiper"
      class="custom-swiper"
    >
      <SwiperSlide v-for="(img, i) in slides" :key="i">
        <BasePicture
          :src="img"
          alt="Property image"
          width="603"
          height="289"
        />
<!--        <img :src="img" alt="" />-->
      </SwiperSlide>
    </Swiper>

    <div class="caption">
      <button ref="prevEl" class="custom-prev">←</button>
      <div class="caption-label">
        <template v-if="link">
          <a :href="link" target="_blank" rel="noopener">{{ label }}</a>
        </template>
        <template v-else>
          {{ label }}
        </template>
      </div>
      <button ref="nextEl" class="custom-next">→</button>
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
  }
  .caption-label a:hover {
    opacity: 0.92;
    transform: translateY(-1px);
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
