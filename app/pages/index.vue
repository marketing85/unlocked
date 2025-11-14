<script setup lang="ts">
  usePageMeta({
    title: 'Unlocked Home Project | Revolutionizing Real Estate Solutions',
    description: 'Unlocked Home Project offers personalized, innovative real estate solutions for homeowners in complex situations, agents, and investors across New Hampshire and Maine. Experienced, knowledgeable, trustworthy.',
    path: '',
  });
  const { data: intro } = await useAsyncData(() =>
    queryCollection('content').path('/home/intro').first()
  )
</script>

<template>
  <div>
    <SectionHero>
      <section class="home-intro">
        <h1 class="heading">
          UNLOCKED HOME PROJECT IS <br />
          REVOLUTIONIZING REAL ESTATE.
        </h1>
        <p class="subheading">EXPERIENCED. KNOWLEDGEABLE. TRUSTWORTHY.</p>

        <!-- Intro content -->
        <div class="intro-text">
          <ContentRenderer v-if="intro" :value="intro" />
          <p v-else>Intro content not found.</p>
        </div>

        <p class="cta">
          CLICK BELOW TO LEARN ABOUT THE WAYS WE DELIVER EXCEPTIONAL SERVICE TO
          OUR CLIENTS.
        </p>
        <AudienceCards />
      </section>
    </SectionHero>
    <SectionTestimonials />
    <SectionCoreValues />
    <SectionContactForm />
    <SectionRealPeople />
  </div>
</template>

<style lang="scss" scoped>
  .home-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
    gap: 20px;
  }
  .heading {
    color: var(--Blue);
    letter-spacing: 2.4px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 122.631%; /* 58.863px */
  }
  .subheading {
    color: var(--Copper);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.68px;
    text-transform: uppercase;
    font-size: 22px;
  }
  .intro-text {
    color: var(--OffWhite);
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.8px;
    font-size: 18px;
  }
  .cta {
    color: var(--Copper);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    max-width: 874px;
    font-size: 20px;
  }

  @media (min-width: 768px) {
    .home-intro {
      max-width: 1088px;
      padding: 55px 0 91px 0;
      gap: 33px;
    }
    .heading {
      font-size: 48px;
    }
    .subheading {
      font-size: 24px;
      line-height: 32px;
    }
    .intro-text {
      font-size: 20px;
      line-height: 38px; /* 190% */
    }
    .cta {
      font-size: 20px;
      line-height: 30px;

      max-width: 874px;
    }
  }
</style>
