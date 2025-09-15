<script setup>
  import { ref } from 'vue'

  const showBenefits = ref(true)

  // const toggleBenefits = () => {
  //   showBenefits.value = !showBenefits.value
  // }
  const steps = [
    {
      title: 'Detailed Assessment',
      text: 'We evaluate your needs and property to understand your goals.',
    },
    {
      title: 'Customized Strategy',
      text: 'We craft a tailored plan with clear options to maximize value.',
    },
    {
      title: 'Decisive Action',
      text: 'We execute with integrity, according to what you value most, with a no B.S. approach.',
    },
    {
      title: 'Seamless Closing',
      text: 'Our various solutions ensure a smooth, stress-free transaction.',
    },
  ]
</script>

<template>
  <div>
    <SectionHero variant="investors">
      <section class="investors-intro">
        <div class="section-one">
          <h1>Sell Your Investment Property with <span>Confidence</span></h1>
          <p>
            Ready to sell your investment property? Whether you're a landlord,
            commercial property owner, or investor, we specialize in helping you
            achieve a seamless and profitable sale. Our expertise spans single
            family homes, multifamily homes, real estate portfolios,
            campgrounds, motels, inns, and RV parks. With a focus on maximizing
            your returns, we offer tailored solutions to meet your unique goals.
          </p>
        </div>

        <div class="section-two">
          <h2>Why Choose Us?</h2>
          <p>
            We understand the needs of savvy investors—part-time landlords,
            retirees, short-term/long-term rental investors, and commercial
            asset managers. Our innovative approach leverages <span>cash</span>,
            <span>traditional financing</span>, <span>creative financing</span>,
            <span>private capital</span>, and <span>syndication</span>, to
            deliver unmatched flexibility.
          </p>
        </div>

        <div class="section-three">
          <div class="toggle-header">
            <h3>Key Benefits <span>for Sellers</span></h3>
<!--            <svg-->
<!--              class="chevron"-->
<!--              :class="{ open: showBenefits }"-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="20"-->
<!--              height="20"-->
<!--              viewBox="0 0 24 24"-->
<!--              fill="none"-->
<!--              stroke="currentColor"-->
<!--              stroke-width="2"-->
<!--              stroke-linecap="round"-->
<!--              stroke-linejoin="round"-->
<!--            >-->
<!--              <polyline points="6 9 12 15 18 9" />-->
<!--            </svg>-->
          </div>

          <transition name="expand">
            <div v-if="showBenefits" class="five-col-grid">
              <div class="grid-item">
                <h4>Maximized Returns</h4>
                <p>
                  Achieve full or near-full asking price with innovative deal
                  structures.
                </p>
              </div>
              <div class="grid-item">
                <h4>Flexible Options</h4>
                <p>
                  Discover ways to structure terms to fit your unique financial
                  goals.
                </p>
              </div>
              <div class="grid-item">
                <h4>Tax Advantages</h4>
                <p>
                  Unlock potential capital gains and tax benefits tailored to
                  your situation.
                </p>
              </div>
              <div class="grid-item">
                <h4>Hassle-Free Process</h4>
                <p>
                  We have 2 in-house transaction coordinators and can close
                  quickly and efficiently.
                </p>
              </div>
              <div class="grid-item">
                <h4>More Possibilities</h4>
                <p>
                  Create a unique opportunity for generating continuous passive
                  income.
                </p>
              </div>
            </div>
          </transition>
        </div>

        <div class="section-four">
          <div>
            <h2>Our <em>Proven</em> Process</h2>
            <p>
              We take a strategic, value-driven approach to every sale, ensuring
              your vision becomes reality. Here’s how we do it:
            </p>
          </div>

          <div>
            <div class="timeline">
              <div class="timeline-item" v-for="(step, i) in steps" :key="i">
                <div class="circle">{{ i + 1 }}</div>

                <div class="line" v-if="i < steps.length - 1"></div>

                <div class="content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionHero>

    <SectionRecentPartner />

    <SectionRequest>
      <template #heading> <span>Trust Us</span> to Deliver </template>

      <template #text>
        With our expertise and innovative approach, we unlock the full potential
        of your property, guaranteeing maximum value in any market. Let us help
        you sell with confidence and achieve your investment goals.
      </template>

      <template #cta>
        <NuxtLink to="/contact" class="link"
          >Request Our Proof of Performance!</NuxtLink
        >
      </template>
    </SectionRequest>

    <SectionRealPeople variant="partner" />
  </div>
</template>

<style lang="scss" scoped>
  .investors-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
    gap: 20px;
  }

  h1 {
    color: var(--OffWhite);
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    margin: 0 0 23px;

    span {
      color: var(--Copper);
    }
  }

  h2 {
    color: var(--Copper);
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  h3 {
    color: var(--Blue);
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2.8px;
    text-transform: uppercase;

    span {
      color: var(--OffWhite);
    }
  }

  p {
    color: var(--OffWhite);
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.8px;

    span {
      color: var(--Blue);
    }
  }

  .section-one {
    display: flex;
    padding: 20px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 8px solid #e38c3b;
    background-color: rgba(19, 33, 41, 0.8);
  }

  .section-two {
    display: flex;
    padding: 80px 0 44px 0;
    flex-direction: column;
    text-align: left;
  }

  .section-three {
    display: flex;
    padding: 7px 12px;
    margin: 0 auto 44px;
    flex-direction: column;
    width: 100%;
    border-radius: 7px;
    background: rgba(87, 93, 96, 0.23);

    // &:hover {
    //   animation: shake 0.4s;
    // }

    .toggle-header {
      position: relative;
      padding: 10px 15px;
      //cursor: pointer;
    }

    .chevron {
      position: absolute;
      display: inline-block;
      vertical-align: middle;
      right: 0;
      color: var(--OffWhite);
      transform-origin: center;
      transition: transform 0.3s ease;
      top: 30%;
      font-size: 30px;
      line-height: 1;
      height: 30px;
    }

    .chevron.open {
      transform: rotate(180deg);
    }
  }

  .section-four {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
    align-items: start;
    margin: 0 auto 30px;

    > div {
      &:first-child {
        margin-top: 70px;
      }
    }
  }

  .timeline {
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    .timeline-item {
      position: relative;
    }
    .circle {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      left: 0;
      top: 0;
      width: 47px;
      height: 47px;
      border-radius: 50%;
      border: 1px solid var(--Blue);
      background: rgba(87, 93, 96, 0.33);
      color: var(--OffWhite);
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 122.631%;
      letter-spacing: 0.96px;
      text-transform: uppercase;
    }
    .line {
      position: absolute;
      top: 47px;
      left: 23px;
      width: 1px;
      height: calc(100% - 47px);
      background: var(--Blue);
    }
    .content {
      padding: 0 0 20px;
      margin-left: 70px;
    }
    h4 {
      color: var(--Copper);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px;
      letter-spacing: 1.28px;
      text-transform: uppercase;
    }
    p {
      color: var(--OffWhite);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0.64px;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 27px;
  }

  .five-col-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 14px;
    margin: 10px 0 0;

    .grid-item {
      display: flex;
      padding: 18px 14px 24px 14px;
      flex-direction: column;
      align-items: left;
      gap: 11px;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 6px;
      border: 1px solid var(--Copper);
      background: var(--Color, rgba(87, 93, 96, 0.33));
      color: var(--OffWhite);
    }

    h4 {
      font-size: 16px;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0.76px;
      text-transform: uppercase;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.68px;
    }
  }

  .expand-enter-active,
  .expand-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
  }
  .expand-enter-from,
  .expand-leave-to {
    max-height: 0;
    opacity: 0;
  }
  .expand-enter-to,
  .expand-leave-from {
    max-height: 1000px;
    opacity: 1;
  }

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 48px;
    }
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 20px;
      line-height: 33px;
    }

    .investors-intro {
      padding: 15px 0 60px 0;
    }

    .section-one {
      padding: 30px 25px 39px 25px;
    }

    .section-two {
      padding: 140px 0 44px 0;
    }

    .section-three {
      padding: 7px 12px;
      margin: 0 auto 44px;
    }

    .section-four {
      grid-template-columns: 35% 65%;
    }

    .timeline {
      margin: 40px auto;
      padding-left: 40px;
    }

    .five-col-grid {
      .grid-item {
        align-items: center;
      }

      h4 {
        font-size: 19px;
      }

      p {
        font-size: 17px;
      }
    }
  }

  @media (min-width: 1024px) {
    .five-col-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
