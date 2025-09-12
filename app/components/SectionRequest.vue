<script setup></script>

<template>
  <section class="section-request">
    <div class="container">
      <h2 v-if="$slots.heading">
        <slot name="heading" />
      </h2>

      <div v-if="$slots.text" class="text">
        <slot name="text" />
      </div>

      <div v-if="$slots.cta" class="cta">
        <slot name="cta" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/css/mixins' as m;

  .section-request {
    padding: 50px 20px;
    border-top: 6px solid var(--Copper, #e38c3b);

    //background:
    //  radial-gradient(
    //    73.56% 48.47% at 50% 50%,
    //    rgba(0, 0, 0, 0.55) 0%,
    //    rgba(0, 0, 0, 0) 88.7%
    //  ),
    //  linear-gradient(
    //    0deg,
    //    rgba(103, 185, 223, 0.84) 0%,
    //    rgba(103, 185, 223, 0.84) 100%
    //  ),
    //  linear-gradient(0deg, var(--Blue, #67b9df) 0%, var(--Blue, #67b9df) 100%),
    //  url('/agents/agents-background-image.jpg') lightgray 50% / cover no-repeat;

    background-blend-mode: multiply, normal, color, normal;

    @include m.bg-with-webp(
        '/agents/agents-background-image',
          (radial-gradient(
              73.56% 48.47% at 50% 50%,
              rgba(0, 0, 0, 0.55) 0%,
              rgba(0, 0, 0, 0) 88.7%
          ),
          linear-gradient(
              0deg,
              rgba(103, 185, 223, 0.84) 0%,
              rgba(103, 185, 223, 0.84) 100%
          ),
          linear-gradient(0deg, var(--Blue, #67b9df) 0%, var(--Blue, #67b9df) 100%),),
        'jpg',
        50% 50%,
        cover,
        no-repeat
    );
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 30px 20px;
    background-color: var(--DarkBlue);
  }

  h2 {
    color: var(--Blue);
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.88px;
    text-transform: uppercase;
    margin: 0 auto 27px;
  }

  .text {
    margin: 0 0 27px;
    color: var(--OffWhite);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.8px;

    :deep(strong) {
      font-weight: 700;
    }
  }

  .cta {
    display: flex;
    justify-content: center;
  }

  :deep(.link) {
    display: flex;
    padding: 6px 34px;
    max-width: 424px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    background: linear-gradient(
      91deg,
      #67b9df -19.02%,
      #a4e2ff 63.6%,
      #78c5e8 113.17%
    );
    background-size: 200% auto;
    color: var(--DarkBlue);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    transition: all 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  :deep(.link:hover) {
    background-position: right center;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1120px) {
    .section-request {
      padding: 84px 0;
    }

    .container {
      padding: 40px 44px 47px;
    }

    .text {
      font-size: 20px;
      line-height: 31px;
    }

    :deep(.link) {
      font-size: 15px;
      line-height: 34px;
    }

    h2 {
      max-width: 840px;
      font-size: 22px;
      line-height: 31px;
    }
  }
</style>
