<template>
  <section
    :class="`${variant}-hero`"
    class="hero-section relative w-full overflow-hidden"
  >
    <video
      v-if="variant === 'default'"
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/video-home-loop.webm" type="video/webm" />
      <source src="/video-home-loop.mov" type="video/quicktime" />
    </video>

    <div v-else-if="variant === 'investors'" class="hero-image investors-bg"></div>
    <div v-else-if="variant === 'relief'" class="hero-image relief-bg"></div>
    <div v-else-if="variant === 'basic'" class="basic"></div>

    <div v-if="variant === 'default'" class="absolute inset-0 bg-black/70"></div>

    <div class="hero-content">
      <BaseHeader />
      <slot />
    </div>
  </section>
</template>

<script setup>
  import { useHead } from '#imports'

  const props = defineProps({
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'investors', 'relief', 'basic'].includes(value),
    },
  })

  const preloadHref =
    props.variant === 'investors'
      ? '/hero-background-investors.webp'
      : props.variant === 'relief'
        ? '/hero-background-relief.webp'
        : null

  useHead({
    link: preloadHref ? [{ rel: 'preload', as: 'image', href: preloadHref }] : []
  })
</script>

<style lang="scss" scoped>
  @use '@/assets/css/mixins' as m;

  .hero-section {
    background-color: var(--DarkBlue);
    min-height: 60vh;
    border-bottom: 6px solid var(--Blue);

    &.relief-hero {
      min-height: auto;
      border-bottom: 6px solid var(--Copper);
      padding: 0 0 60px;
    }
    &.basic-hero {
      min-height: auto;
      border-bottom: 6px solid var(--Copper);
      padding: 0 0 60px;
    }
  }

  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .investors-bg {
    @include m.bg-with-webp(
        '/hero-background-investors',
        linear-gradient(to top, var(--DarkBlue), transparent),
        'jpg',
        0 0,
        contain,
        no-repeat
    );
  }

  .relief-bg {
    @include m.bg-with-webp(
        '/hero-background-relief',
        linear-gradient(to top, var(--DarkBlue), transparent),
        'jpg',
        center,
        cover,
        no-repeat
    );
  }

  .hero-content {
    position: relative;
    padding: 0 30px;
    margin: 0 auto;
    max-width: 1608px;
    z-index: 10;
  }

  @media (min-width: 768px) {
    .hero-content {
      padding: 0 60px;
    }
    .hero-section {
      min-height: 80vh;
      &.relief-hero,
      &.basic-hero {
        min-height: auto;
      }
    }
  }
</style>
