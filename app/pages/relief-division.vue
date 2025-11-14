<script setup>
  usePageMeta({
    title: 'Mortgage and Foreclosure Relief Division | Get Help Now',
    description: 'The Relief Division specializes in urgent, confidential assistance for homeowners facing foreclosure or mortgage distress. Find customized debt and property solutions.',
    path: 'relief-division',
  });
</script>

<template>
  <div>
    <SectionHero variant="relief">
      <section class="relief-division-intro">
        <div class="section-one">
          <h1>
            <span>Unlocking</span> Options. <br />
            <span class="blue">Supporting</span> Every Move.
          </h1>
          <h3>Helping you find <span>relief</span> during uncertain times.</h3>
        </div>
      </section>
    </SectionHero>

    <SectionHearFromUs />

    <SectionRequest>
      <template #heading>
        <span
          >Behind on your mortgage payments? Is the mortgage company giving you
          grief?</span
        >
      </template>

      <template #text>
        <p class="mb-5">
          If you are worried about your home going to auction, we can help! Our
          number one goal is to make sure that no one ends up kicked out on the
          street. Our clients have peace of mind knowing we are protecting them
          and advocating for them every step of the way.
        </p>

        <p>
          We offer information, resources, and close ongoing 1 on 1 support to
          assist you in navigating pre foreclosure situations. Our dedicated
          team makes it as-stress free as possible to work together in finding a
          solution for your unique circumstances.
        </p>
      </template>

      <template #cta>
        <NuxtLink to="/contact" class="link">Contact us today</NuxtLink>
      </template>
    </SectionRequest>

    <SectionRelocation />

    <SectionTestimonials type="p4c" />
  </div>
</template>

<style lang="scss" scoped>
  .relief-division-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
  }

  h1 {
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 48px);
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    margin: 0 0 23px;

    span {
      color: var(--Copper);
    }
  }

  h3 {
    color: var(--OffWhite);
    font-size: clamp(18px, 4vw, 25px);
    font-style: normal;
    font-weight: 600;
    line-height: 128.6%;
    letter-spacing: 1.75px;
    text-transform: uppercase;

    span {
      color: var(--Copper);
    }
  }

  .section-one {
    display: flex;
    padding: 20px 20px 30px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgba(19, 33, 41, 0.8);
  }

  .blue {
    color: var(--Blue);
  }

  @media (min-width: 768px) {
    .section-one {
      padding: 30px 25px 39px 25px;
    }
  }
</style>
