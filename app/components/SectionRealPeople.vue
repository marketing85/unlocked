<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    variant: {
      type: String,
      default: 'default',
    },
  })
</script>

<template>
  <section class="real-people" :class="variant">
    <div class="container">
      <!-- Default layout -->
      <div v-if="variant === 'default'" class="grid">
        <div class="image-col">
          <img src="/unlocked-home-people.jpg" alt="Real people" />
        </div>
        <div class="text-col">
          <h2>Real <span>People.</span></h2>
          <h2>Real <span>Support.</span></h2>
          <h2>Real <span>Solutions.</span></h2>
        </div>
      </div>

      <!-- Partner layout -->
      <div v-else-if="variant === 'partner'" class="partner-layout">
        <h2>
          Real <span>people</span>. Real <span>partnerships</span>. Real
          <span>impact</span>.
        </h2>
        <SlideshowInvestors />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .real-people {
    display: flex;
    padding: 80px 0;
    flex-direction: column;
    align-items: center;
    gap: 66px;
    align-self: stretch;
    background-color: var(--DarkBlue);

    &.partner {
      padding: 60px 0;
      background-color: var(--OffWhite);
    }
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    img {
      margin: 0 auto;
    }
  }

  h2 {
    text-align: center;
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 45px);
    font-style: normal;
    font-weight: 600;
    line-height: 167%;
    letter-spacing: 2.25px;
    text-transform: uppercase;

    span {
      color: var(--Copper);
    }
  }

  .partner {
    h2 {
      color: var(--DarkBlue);
      font-size: clamp(20px, 4vw, 25px);
      font-style: normal;
      font-weight: 600;
      line-height: 128.6%;
      letter-spacing: 1.75px;
      text-transform: uppercase;
      margin: 0 auto 36px;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: 66px;
      align-items: center;
    }

    h2 {
      text-align: left;
    }
  }

  @media (min-width: 880px) {
    .real-people {
      padding: 121px 0 143px 0;

      &.partner {
        padding: 77px 0 68px 0;
      }
    }
    .container {
      padding: 0;
    }
    .two-col-grid {
      grid-template-columns: 1fr 1.8fr;
      align-items: stretch;
      img {
        height: 100%;
      }
    }
  }
</style>
