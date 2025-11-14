<script setup lang="ts">
  usePageMeta({
    title: 'Creative Solutions for Homeowners in Complex Situations',
    description: 'Facing foreclosure, probate, or difficult property challenges? Unlocked Home Project provides expert, confidential, and customized solutions for NH and ME homeowners.',
    path: 'homeowners',
  });

  const { data: intro } = await useAsyncData(() =>
    queryCollection('content').path('/home/intro').first()
  )
</script>

<template>
  <div>
    <SectionHero>
      <section class="homeowners-intro">
        <p class="subheading">Working to help Homeowners</p>

        <h1 class="heading">I am a homeowner who is...</h1>

        <div class="three-col-grid">
          <a
            href="https://www.unlockedcashoffers.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="grid-item"
          >
            Looking for a fast cash offer.
          </a>

          <NuxtLink to="/relief-division" class="grid-item">
            Looking for relief or assistance.
          </NuxtLink>

          <NuxtLink to="/for-sale-by-owner" class="grid-item">
            Selling my home for sale by owner.
          </NuxtLink>
        </div>
      </section>
    </SectionHero>
    <SectionTestimonials />
  </div>
</template>

<style lang="scss" scoped>
  .homeowners-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
    gap: 20px;
  }

  .heading {
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }

  .subheading {
    color: var(--Copper);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.68px;
    text-transform: uppercase;
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 27px;
    width: 100%;
  }

  .grid-item {
    display: flex;
    padding: 18px 14px 24px 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 6px;
    border: 1px solid #e38c3b;
    background: rgba(87, 93, 96, 0.33);
    color: var(--OffWhite);
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.76px;
    text-transform: uppercase;
    text-decoration: none; /* remove link underline */
    transition: background 0.2s ease;
  }

  .grid-item:hover {
    background: rgba(103, 185, 223, 0.3);
  }

  @media (min-width: 768px) {
    .homeowners-intro {
      max-width: 1088px;
      padding: 55px 0 91px 0;
      gap: 33px;
    }

    .subheading {
      font-size: 24px;
    }

    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .grid-item {
      font-size: 19px;
      line-height: 27px;
    }
  }
</style>
