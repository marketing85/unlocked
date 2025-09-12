<script setup>
  import BulletPanel from '@/components/base/BulletPanel'
  import SectionFSBOTestimonial from '~/components/SectionFSBOTestimonial.vue'
</script>

<template>
  <div>
    <SectionHero>
      <section class="fsbo-intro">
        <div class="top-section">
          <div class="two-col-grid">
            <div class="text-col">
              <h1 class="heading">For Sale By Owner Division</h1>
              <p class="text-body">
                Welcome to Unlocked Home Project’s For Sale By Owner (FSBO)
                Division, where empowered homeowners take control of their sale.
                Sometimes, selling with a trusted real estate agent is the
                way-to-go, but in 2025, more and more homeowners are choosing to
                save on agent commissions and take matters into their own hands.
                Here, we'll guide you through why FSBO works, how our platform
                supports you, and proven steps to maximize your sale price while
                minimizing stress.
              </p>
            </div>

            <!-- Background image box -->
            <div
              class="image-col"
            >
              <BasePicture
                loading="eager"
                fetchpriority="high"
                src="/fsbo/office.jpg"
                alt="FSBO Office"
                width="702"
                height="936"
              />

<!--              <img src="/fsbo/office.jpg" alt="FSBO Office">-->
            </div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="two-col-grid">
            <div class="text-col">
              <h2>How Our Business Model Works</h2>
              <BulletPanel>
                We can buy FSBO homes directly, or we can sell to one of our
                trusted partners through our Unlocked Direct Cash Plus Program
              </BulletPanel>
              <BulletPanel>
                We have an email list of active buyers in New England that want
                to buy properties
              </BulletPanel>
              <BulletPanel>
                Our services provide many similar benefits to an agent, but you
                don’t pay us commissions - we get paid on the buyer’s side,
                through a finder's fee within our own network.
              </BulletPanel>
            </div>
            <div class="image-col">
              <img src="/fsbo/piggy-bank.gif" alt="Piggy Bank" />
            </div>
          </div>
        </div>
      </section>
    </SectionHero>
    <SectionFSBOTestimonial />
    <SectionFSBOMyths />
    <SectionRequest>
      <template #text>
        <strong
          >Ready to sell smarter? Reach out to our team today to see if our
          process is the right fit for you.</strong
        >
      </template>

      <template #cta>
        <NuxtLink to="/contact" class="link">Get Unlocked Today</NuxtLink>
      </template>
    </SectionRequest>
  </div>
</template>

<style lang="scss" scoped>
  .fsbo-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
  }

  .heading {
    margin: 0 0 33px;
    color: var(--OffWhite);
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }

  .text-body {
    color: var(--OffWhite);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.8px;
  }

  .top-section {
    padding: 0 0 50px;

    .image-col img, .image-col :deep(img) {
      border-radius: 8px;
      border: 2px solid var(--Blue);
      width: 100%;
      height: auto;
      aspect-ratio: 3/4;
    }
  }

  .bottom-section {
    padding: 50px 0 0;
    border-top: 1px solid var(--Copper);

    h2 {
      margin: 0 0 40px;
      color: var(--OffWhite);
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 128.6%;
      letter-spacing: 1.75px;
      text-transform: uppercase;
    }
    .image-col {
      display: flex;
      align-items: center;
      justify-content: center;

      .video {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .fsbo-intro {
      max-width: 1088px;
      padding: 55px 0 91px 0;
    }
    .bottom-section {
      .two-col-grid {
        grid-template-columns: 2fr 1fr;
        gap: 80px;
      }
    }
    .top-section {
      .two-col-grid {
        grid-template-columns: 2fr 1fr;
        gap: 80px;
      }
      .image-col {
        aspect-ratio: unset;
      }
    }
  }

  @media (min-width: 1120px) {
    .heading {
      font-size: 48px;
    }
    .text-body {
      font-size: 20px;
      line-height: 38px;
    }
  }
</style>
