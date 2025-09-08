<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, Autoplay } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  import type { Testimonial } from '@/data/testimonials'
  import {
    testimonials,
    fsboTestimonials,
    p4cTestimonials,
  } from '@/data/testimonials'

  const props = defineProps<{
    type?: 'default' | 'fsbo' | 'p4c'
  }>()

  // Choose correct testimonial list
  const selectedTestimonials: Testimonial[] = (() => {
    switch (props.type) {
      case 'fsbo':
        return fsboTestimonials
      case 'p4c':
        return p4cTestimonials
      default:
        return testimonials
    }
  })()
</script>

<template>
  <section class="section-testimonials">
    <div class="container">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        :pagination="{ el: '.custom-pagination', clickable: true }"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        class="w-full"
      >
        <SwiperSlide v-for="(testimonial, i) in selectedTestimonials" :key="i">
          <div class="slide">
            <!-- Left Column -->
            <div class="slide-col-left">
              <div v-if="testimonial.rating !== -1" class="rating">
                <span
                  v-for="star in 5"
                  :key="star"
                  :class="{ active: star <= testimonial.rating }"
                >
                  ★
                </span>
              </div>
              <h4 class="name">{{ testimonial.name }}</h4>
              <p v-if="testimonial.source" class="source">
                {{ testimonial.source }}
              </p>
            </div>
            <!-- Right Column -->
            <div class="slide-col-right">
              <p v-if="testimonial.quote" class="quote">
                “{{ testimonial.quote }}
              </p>
              <h3>
                <span v-if="!testimonial.quote">“</span
                ><span>{{ testimonial.lead }}</span>
              </h3>
              <div class="testimonial-body">
                <p
                  v-for="(line, index) in testimonial.body.split('\n')"
                  :key="index"
                  class="testimonial-body-line"
                >
                  <span>{{ line }}</span
                  ><span
                    v-if="index === testimonial.body.split('\n').length - 1"
                    >”</span
                  >
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="controls" v-if="selectedTestimonials.length > 1">
        <div class="arrow custom-prev">←</div>
        <div class="custom-pagination"></div>
        <div class="arrow custom-next">→</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-testimonials {
    position: relative;
    background-color: var(--OffWhite);
    //border-top: 6px solid var(--Blue);
    border-bottom: 6px solid var(--Copper);
    padding: 50px 0 80px;
  }

  .container {
    position: relative;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1088px;
  }

  .slide {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 20px 20px 30px 30px;
    background-color: rgba(87, 93, 96, 0.06);
    color: var(--DarkBlue);

    &::after {
      content: '';
      position: absolute;
      bottom: 30px;
      left: 0;
      right: 30px;
      height: 60px;
      pointer-events: none;
      background: linear-gradient(
        to top,
        rgba(230, 230, 231, 1) 10%,
        rgba(230, 230, 231, 0) 100%
      );
    }

    @media (min-width: 768px) {
      flex-direction: row;
      padding: 35px 20px 35px 35px;
      &::after {
        bottom: 35px;
      }
    }
  }

  .slide-col-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-right: 0;
    z-index: 1;

    @media (min-width: 768px) {
      border-right: 1px solid var(--DarkBlue);
      width: 33.3333%;
      padding-right: 20px;
    }
  }

  .slide-col-right {
    position: relative;
    padding: 0 15px 35px 0;
    height: 400px;
    max-height: 400px;
    overflow: auto;

    @media (min-width: 768px) {
      width: 66.6666%;
      padding-left: 20px;
      align-content: center;
    }
  }

  .rating {
    font-size: 20px;
    span {
      margin: 0 5px;
      color: #ccc;
      &.active {
        color: var(--Copper);
      }
    }
  }

  .name {
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .source {
    color: #575d60;
    text-align: center;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.72px;
  }

  .quote {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.72px;
  }

  h3 {
    color: var(--Copper);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
    letter-spacing: 0.66px;
    margin: 1rem 0;
  }

  .testimonial-body-line {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.72px;
    margin-bottom: 0.5rem;
  }

  .controls {
    display: flex;
    position: relative;
    width: 100%;
    top: 50px;
  }

  .custom-pagination {
    display: flex;
    justify-content: center;
  }

  .arrow {
    display: flex;
    position: absolute;
    padding: 20px;
    bottom: -30px;
    font-size: 28px;
    cursor: pointer;

    &.custom-prev {
      left: -10px;
    }
    &.custom-next {
      right: -10px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .custom-pagination .swiper-pagination-bullet {
    background-color: #999;
    opacity: 1;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    background-color: #f97316;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 33px;
      line-height: 42px;
    }
    .name {
      font-size: 20px;
    }
    .source {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
