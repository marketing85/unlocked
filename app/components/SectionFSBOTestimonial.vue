<script setup lang="ts">
  import type { Testimonial } from '@/data/testimonials'
  import { fsboTestimonials } from '@/data/testimonials'

  // Only take the first FSBO testimonial
  const testimonial: Testimonial | undefined = fsboTestimonials[0]
</script>

<template>
  <section class="section-testimonial" v-if="testimonial">
    <div class="container">
      <div class="testimonial-header">
        Testimonial from a homeowner who sold their <span>FSBO</span> through
        Unlocked
      </div>

      <div class="slide">
        <div class="slide-top">
          <h4 class="name">{{ testimonial.name }}</h4>

          <div class="flex">
            <p v-if="testimonial.source" class="source">
              {{ testimonial.source }}
            </p>
            <div v-if="testimonial.rating !== -1" class="rating">
              <span
                v-for="star in 5"
                :key="star"
                :class="{ active: star <= testimonial.rating }"
              >
                ★
              </span>
            </div>
          </div>
        </div>

        <div class="slide-body">
          <p v-if="testimonial.quote" class="quote">“{{ testimonial.quote }}</p>
          <h3>{{ testimonial.lead }}</h3>
          <div class="testimonial-body">
            <p
              v-for="(line, index) in testimonial.body.split('\n')"
              :key="index"
              class="testimonial-body-line"
            >
              {{ line }}”
            </p>
          </div>
        </div>
      </div>

      <img src="/fsbo/for-sale.jpg" alt="For Sale By Owner" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-testimonial {
    position: relative;
    background-color: var(--OffWhite);
    border-bottom: 6px solid var(--Copper);
    padding: 50px 0 80px;

    img {
      width: 100%;
      max-width: 729px;
      margin: 0 auto;
      aspect-ratio: 3/2;
      border-radius: 6px;
      border: 1px solid var(--Blue, #67b9df);
      background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    }
  }

  .testimonial-header {
    padding: 0 0 15px;
    margin: 0 auto 15px;
    border-bottom: 1px solid var(--Blue);
    color: var(--DarkBlue);
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 46px;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    span {
      color: var(--Blue);
    }
  }

  .container {
    position: relative;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1088px;
  }

  .slide {
    display: block;
    padding: 0 0 40px;
    color: var(--DarkBlue);

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .flex {
    display: flex;
    margin: 0 0 30px;
    gap: 20px;
  }

  .source {
    color: #575d60;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.72px;
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

  .quote {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.72px;
  }

  h3 {
    color: var(--Copper);
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
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
</style>
