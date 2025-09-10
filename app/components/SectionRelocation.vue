<script setup>
  import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, A11y } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  const activeProgram = ref(null)
  const swiperRef = ref(null)
  const onSwiper = (s) => (swiperRef.value = s)

  const openModal = async (programId) => {
    document.body.classList.add('modal-open')

    activeProgram.value =
      gridPrograms.find((p) => p.id === programId) || extraPrograms[programId]

    await nextTick()

    // Re-measure once visible
    requestAnimationFrame(() => {
      if (swiperRef.value) {
        swiperRef.value.updateSize()
        swiperRef.value.updateSlides()
        swiperRef.value.update()
        swiperRef.value.slideTo(0, 0)
      }
    })
  }

  const closeModal = () => {
    document.body.classList.remove('modal-open')

    activeProgram.value = null
  }

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  const featurePages = computed(() => {
    const ap = activeProgram.value
    if (!ap || !ap.features?.length) return { first: null, pages: [] }

    // Separate special first slide (if any)
    const first = ap.features.find((f) => f.special) || null
    const rest = ap.features.filter((f) => !f.special)

    // chunk remaining features into pages (2 items first, then 3 items)
    const sizes = [2, 3]
    const pages = []
    let i = 0,
      s = 0
    while (i < rest.length) {
      const size = sizes[s] ?? sizes[sizes.length - 1]
      pages.push(rest.slice(i, i + size))
      i += size
      s++
    }

    return { first, pages }
  })

  const swiperModules = [Navigation, A11y]

  const gridPrograms = [
    {
      id: 'HOME',
      name: 'Home Search Assistance Program',
      icon: '/icon-home.png',
      details: [
        'Exclusive access to unlisted rental properties across our local networks',
        'Overcoming challenges with affordability, placement with pets, poor credit, and rental applications',
        'Connections to affordable housing programs, subsidized rentals, or housing for the elderly',
      ],
    },
    {
      id: 'MOVE',
      name: 'Pack-And-Move Program',
      icon: '/icon-move.png',
      details: [
        'Our team can help pack - and we have access to discounted or free packing supplies!',
        'We can move your stuff, coordinate a pod, handle junk/trash removal, take things to donation centers, and more.',
      ],
    },
    {
      id: 'JOB',
      name: 'Job Search Program',
      icon: '/icon-job.png',
      details: [
        'We help with your job search by identifying local jobs with increased income potential',
        'Guidance provided throughout the hiring process',
        "Need help writing strong cover letters? We've got it covered!",
      ],
    },
  ]

  const extraPrograms = {
    CASH: {
      id: 'CASH',
      title: `Unlocked Direct Cash Plus Program`,
      name: `Sell <span>Directly</span> To Us`,
      label: `How It Works`,
      details: `Our foundational services are here to take the stress out of selling your home. Sell quickly, easily, and with maximum support and flexibility.`,
      features: [
        {
          title: 'SIMPLIFIED COORDINATING PROCESS',
          text: `Our team of transactions coordinators (T.C's) work hand-In-hand with you and the title company, taking <span>more off your plate and making every transaction the easiest</span> and the most stress free as possible.`,
        },
        {
          title: 'FLEXIBLE MOVE-OUT OPTIONS',
          text: `For eligible sellers, we offer <span>flexible post-sale</span> solutions-such as extended stay options or move-out timelines-customized to your situation.`,
        },
        {
          title: 'CASH AND/OR CREATIVE OFFERS',
          text: `Receive fair, <span>all-cash offers</span> with <span>no delays</span> from financing contingencies, appraisals, or inspections. 
            If an offer is not the right fit, explore how our <span>unique creative financing solutions</span> can unlock even more value for your home.`,
        },
        {
          title: 'NO REPAIRS/NO INSPECTIONS',
          text: `We purchase your home in its <span>current condition</span>, allowing you to avoid the expense and inconvenience of repairs or renovations.`,
        },
        {
          title: 'NO CLOSING COSTS/COMMISSIONS',
          text: `<span>Avoid realtor fees and commissions</span> with our direct-buy process.`,
        },
      ],
    },
    SMART: {
      id: 'SMART',
      title: `Unlocked Smart Listings Program`,
      name: `<span>List It</span> On The Market`,
      features: [
        {
          special: true,
          title: '',
          text: `If selling through our Direct Cash Plus Program is not the right fit for you, we can partner with a <span>licensed realtor</span> on our team who specializes in financial hardship and challenging listings to help sell your home on the <span>Multiple Listing Service (MLS)</span>. 
          During this time, you get the benefit of both our team and a dedicated realtor—essentially a <span>2-for-1</span> deal—working together to serve you. 
          Our goal is to find a buyer who can offer more than what you'd typically receive from an off-market sale. If we succeed, you sell at a better price. 
          <span class="blue">If no stronger offer is found by the end of the listing period, we’ll guide you through other creative, last-resort options.</span>`,
          summary: `<span>Ideal for:</span> Sellers who want to explore the market for a better deal but need the assurance of a guaranteed solution within a specific timeframe.`,
        },
        {
          title: 'PARTNER WITH REALTORS WHO UNDERSTAND YOUR UNIQUE SITUATION!',
          text: ``,
          items: [
            `Collaborate with <span>top licensed realtors</span> who understand your needs.`,
            `Have advocates for your best interests throughout the process, specializing in crafting a <span>personalized strategy</span> for your situation.`,
          ],
        },
        {
          title: 'MAXIMUM MLS EXPOSURE',
          text: ``,
          items: [
            `<span>Get listed on the MLS</span> and top premiere platforms.`,
            `<span>Get top tier market research and listing strategies.</span>`,
            `Your home receives a <span>highly custom presentation, no generic listings.</span>`,
          ],
        },
        {
          title: 'ELEVATED STAGING & MARKETING STRATEGY',
          text: ``,
          items: [
            `Utilize <span>advanced marketing tools</span> to distinguish your property.`,
            `Access <span>professional staging</span>, HD photography, video tours, etc. Use the same strategies as top-producing agents to position your property.`,
          ],
        },
        {
          title: 'PROJECT MANAGEMENT SUPPORT',
          text: ``,
          items: [
            `<span>We coordinate</span> minor cleanups, touch-ups, and contractor quotes.`,
            `We manage timelines and prep tasks to <span>lessen your stress.</span>`,
            `Consider it as "light project management" <span>done for you.</span>`,
          ],
        },

        {
          title: 'TRUSTED GUIDANCE & FLEXIBILITY',
          text: ``,
          items: [
            `Our TC team <span>manages paperwork, disclosures, and deadlines.</span>`,
            `If listing on the MLS doesn’t yield the results you’re looking for within a certain time frame, <span>we’ll sell for you off-market</span> with out Direct Cash Plug Program.`,
          ],
        },
      ],
    },
  }
</script>

<template>
  <section class="section-relocation">
    <div class="container">
      <h2>Fresh Start <span>Relocation</span> Program</h2>
      <p>
        We’re here to make your transition to a new home as seamless as possible
        with these tailored services:
      </p>

      <div class="three-col-grid">
        <div
          v-for="program in gridPrograms"
          :key="program.id"
          class="grid-item cursor-pointer transition-transform ease-in-out duration-200 hover:-translate-y-1 hover:bg-[rgba(184,115,51,0.2)]"
          @click="openModal(program.id)"
        >
          <img :src="program.icon" :alt="program.name" class="icon" />
          <p>{{ program.name }}</p>
        </div>
      </div>

      <SlideshowRelocation />

      <div class="relief-solutions">
        <div class="row row-one">
          <div class="two-col-grid">
            <div class="grid-item">
              <h2>UNLOCKED RELIEF <span>SELLING SOLUTIONS</span></h2>
              <p>
                Our company offers a unique and revolutionary low-stress
                approach to providing relief in challenging situations.
              </p>
            </div>
            <div class="grid-item">
              <div class="item-group">
                <img
                  src="/icon-cost.png"
                  alt="Zero out of pocket costs"
                  class="icon"
                />
                <h3>Zero out of pocket costs</h3>
              </div>
              <div class="item-group">
                <img
                  src="/icon-maximize.png"
                  alt="Maximize your cash payout"
                  class="icon"
                />
                <h3>Maximize your cash payout</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-two">
          <div class="item-group">
            <img
              src="/icon-strategic.png"
              alt="STRATEGIC SELLING"
              class="icon"
            />
            <div>
              <h3>STRATEGIC <span>SELLING</span></h3>
              <p>
                Our goal is to maximize your proceeds so you can have more cash
                in hand to get back on your feet. We guarantee your peace of
                mind with top-tier, secure, high-value cash offers or
                cutting-edge market strategies.
              </p>
            </div>
          </div>
        </div>
        <div class="row row-three">
          <div class="two-col-grid">
            <!-- clicking opens new modal for Direct Cash Plus Program -->
            <div class="grid-item big-button" @click="openModal('CASH')">
              <div class="item-group">
                <img
                  src="/icon-listing.png"
                  alt="Direct Cash Plus Program"
                  class="icon"
                />
                <h3>UNLOCKED DIRECT CASH PLUS PROGRAM</h3>
              </div>
              <p>
                Sell your home <span>directly to us off-market</span>, quickly
                and easily with no showings, appraisals, inspections, or
                uncertainty of deals falling through.
              </p>
            </div>
            <!-- clicking opens new modal for Smart Listings Program -->
            <div class="grid-item big-button" @click="openModal('SMART')">
              <div class="item-group">
                <img
                  src="/icon-partner.png"
                  alt="Smart Listings Program"
                  class="icon"
                />
                <h3>UNLOCKED SMART LISTINGS PROGRAM</h3>
              </div>
              <p>
                We partner with a licensed realtor on our team who specializes
                in financial hardship and challenging listings to help sell your
                home on the <span>Multiple Listing Service (MLS)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <transition name="fade">
      <div
        v-if="activeProgram"
        class="modal fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        @click.self="closeModal"
      >
        <transition name="slide-up">
          <div class="modal-body">
            <button @click="closeModal" class="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M26.25 8.75L8.75 26.25M8.75 8.75L26.25 26.25"
                  stroke="#E38C3B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Default programs (HOME, MOVE, JOB) -->
            <div v-if="['HOME', 'MOVE', 'JOB'].includes(activeProgram.id)">
              <div class="modal-header">
                <img
                  :src="activeProgram.icon"
                  :alt="activeProgram.name"
                  class="icon"
                />
                <h3>{{ activeProgram.name }}</h3>
              </div>
              <ul>
                <li v-for="(item, index) in activeProgram.details" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Direct Cash Plus Program -->
            <div v-else-if="activeProgram.id === 'CASH'" class="mega-modal">
              <div class="modal-header">
                <h3>
                  <div class="title">{{ activeProgram.title }}</div>
                  <div v-html="activeProgram.name" class="heading"></div>
                </h3>
              </div>
              <div class="mega-modal-content">
                <div class="label">{{ activeProgram.label }}</div>
                <p v-html="activeProgram.details" class="intro-text"></p>

                <div class="features feature-swiper">
                  <Swiper
                    v-if="featurePages.pages.length || featurePages.first"
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :autoHeight="true"
                    :observer="true"
                    :observe-parents="true"
                    :observe-slide-children="true"
                    @swiper="onSwiper"
                    :navigation="{
                      nextEl: '.custom-next',
                      prevEl: '.custom-prev',
                    }"
                  >
                    <!-- special first slide -->
                    <SwiperSlide v-if="featurePages.first">
                      <div class="feature-stack special-slide">
                        <h5 v-if="featurePages.first.title">
                          {{ featurePages.first.title }}
                        </h5>
                        <p v-html="featurePages.first.text"></p>
                        <p
                          v-if="featurePages.first.summary"
                          v-html="featurePages.first.summary"
                        ></p>
                      </div>
                    </SwiperSlide>

                    <!-- remaining pages -->
                    <SwiperSlide
                      v-for="(page, pIdx) in featurePages.pages"
                      :key="pIdx"
                    >
                      <div class="feature-stack">
                        <div
                          v-for="(feature, fIdx) in page"
                          :key="fIdx"
                          class="feature-item"
                        >
                          <h5>{{ feature.title }}</h5>
                          <p v-html="feature.text"></p>
                          <ul v-if="feature.items?.length">
                            <li v-for="(item, idx) in feature.items" :key="idx">
                              {{ item }}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div class="nav-wrapper">
                    <button class="custom-prev nav-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M0.849562 7.0424C0.459037 7.43293 0.459037 8.06609 0.849562 8.45662L7.21352 14.8206C7.60405 15.2111 8.23721 15.2111 8.62774 14.8206C9.01826 14.4301 9.01826 13.7969 8.62774 13.4064L2.97088 7.74951L8.62774 2.09266C9.01826 1.70213 9.01826 1.06897 8.62774 0.678444C8.23721 0.287919 7.60405 0.287919 7.21352 0.678444L0.849562 7.0424ZM13.9424 7.74951L13.9424 6.74951L1.55667 6.74951L1.55667 7.74951L1.55667 8.74951L13.9424 8.74951L13.9424 7.74951Z"
                          fill="#E38C3B"
                        />
                      </svg>
                      <span>Prev</span>
                    </button>

                    <button class="custom-next nav-btn">
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M13.6504 7.04265C14.041 7.43317 14.041 8.06634 13.6504 8.45686L7.28648 14.8208C6.89595 15.2113 6.26279 15.2113 5.87226 14.8208C5.48174 14.4303 5.48174 13.7971 5.87226 13.4066L11.5291 7.74976L5.87226 2.0929C5.48174 1.70238 5.48174 1.06921 5.87226 0.678688C6.26279 0.288163 6.89595 0.288163 7.28648 0.678688L13.6504 7.04265ZM0.557617 7.74976L0.557617 6.74976L12.9433 6.74976L12.9433 7.74976L12.9433 8.74976L0.557617 8.74976L0.557617 7.74976Z"
                          fill="#E38C3B"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Smart Listings Program -->
            <div v-else-if="activeProgram.id === 'SMART'" class="mega-modal">
              <div class="modal-header">
                <h3>
                  <div class="title">{{ activeProgram.title }}</div>
                  <div v-html="activeProgram.name" class="heading"></div>
                </h3>
              </div>
              <div class="mega-modal-content">
                <p v-html="activeProgram.details" class="intro-text"></p>

                <div class="features feature-swiper">
                  <Swiper
                    v-if="featurePages.pages.length || featurePages.first"
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :autoHeight="true"
                    :observer="true"
                    :observe-parents="true"
                    :observe-slide-children="true"
                    @swiper="onSwiper"
                    :navigation="{
                      nextEl: '.custom-next',
                      prevEl: '.custom-prev',
                    }"
                  >
                    <!-- special first slide -->
                    <SwiperSlide v-if="featurePages.first">
                      <div class="feature-stack special-slide">
                        <h5 v-if="featurePages.first.title">
                          {{ featurePages.first.title }}
                        </h5>
                        <p v-html="featurePages.first.text"></p>
                        <p
                          v-if="featurePages.first.summary"
                          v-html="featurePages.first.summary"
                        ></p>
                      </div>
                    </SwiperSlide>

                    <!-- remaining pages -->
                    <SwiperSlide
                      v-for="(page, pIdx) in featurePages.pages"
                      :key="pIdx"
                    >
                      <div class="feature-stack">
                        <div
                          v-for="(feature, fIdx) in page"
                          :key="fIdx"
                          class="feature-item"
                        >
                          <h5>{{ feature.title }}</h5>
                          <p v-html="feature.text"></p>
                          <ul v-if="feature.items?.length">
                            <li
                              v-for="(item, idx) in feature.items"
                              :key="idx"
                              v-html="item"
                            ></li>
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div class="nav-wrapper">
                    <button class="custom-prev nav-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M0.849562 7.0424C0.459037 7.43293 0.459037 8.06609 0.849562 8.45662L7.21352 14.8206C7.60405 15.2111 8.23721 15.2111 8.62774 14.8206C9.01826 14.4301 9.01826 13.7969 8.62774 13.4064L2.97088 7.74951L8.62774 2.09266C9.01826 1.70213 9.01826 1.06897 8.62774 0.678444C8.23721 0.287919 7.60405 0.287919 7.21352 0.678444L0.849562 7.0424ZM13.9424 7.74951L13.9424 6.74951L1.55667 6.74951L1.55667 7.74951L1.55667 8.74951L13.9424 8.74951L13.9424 7.74951Z"
                          fill="#E38C3B"
                        />
                      </svg>
                      <span>Prev</span>
                    </button>

                    <button class="custom-next nav-btn">
                      <span>Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M13.6504 7.04265C14.041 7.43317 14.041 8.06634 13.6504 8.45686L7.28648 14.8208C6.89595 15.2113 6.26279 15.2113 5.87226 14.8208C5.48174 14.4303 5.48174 13.7971 5.87226 13.4066L11.5291 7.74976L5.87226 2.0929C5.48174 1.70238 5.48174 1.06921 5.87226 0.678688C6.26279 0.288163 6.89595 0.288163 7.28648 0.678688L13.6504 7.04265ZM0.557617 7.74976L0.557617 6.74976L12.9433 6.74976L12.9433 7.74976L12.9433 8.74976L0.557617 8.74976L0.557617 7.74976Z"
                          fill="#E38C3B"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
  .section-relocation {
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    background-color: var(--DarkBlue);
    border-top: 6px solid var(--Copper);
    border-bottom: 9px solid var(--Blue);
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h2 {
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 20px;

    span {
      color: var(--Copper);
    }
  }

  p {
    color: var(--OffWhite);
    font-size: 16px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0.8px;
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 35px;
    margin: 20px 0 40px;

    .grid-item {
      display: flex;
      padding: 27px 9px;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      flex: 1 0 0;
      align-self: stretch;
      border: 1px solid var(--Copper);
      text-align: center;
    }

    .icon {
      width: 59px;
      height: 59px;
      aspect-ratio: 1/1;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .relief-solutions {
    margin: 46px auto;
    .row {
      padding: 40px 0;
      border-top: 1px solid var(--Copper);
    }

    .row-one {
      text-align: center;
      .two-col-grid {
        gap: 30px;
      }
      .icon {
        width: 82px;
        height: 82px;
        aspect-ratio: 1/1;
      }
      h3 {
        color: var(--Blue);
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 128.6%;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        padding: 10px 0 0;
      }
    }

    .row-two,
    .row-three {
      color: var(--OffWhite);
      text-align: center;
      .icon {
        width: 92px;
        height: 92px;
        aspect-ratio: 1/1;
        margin: 0 auto;
      }
      h3 {
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 128.6%;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        margin: 0 0 17px;
        span {
          color: var(--Copper);
        }
      }
      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0.64px;
        span {
          color: var(--Blue);
        }
      }
      .two-col-grid {
        gap: 57px;
      }
      .grid-item {
        display: flex;
        padding: 13px;
        flex-direction: column;
        align-items: center;
        gap: 13px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 7px;
        background: rgba(87, 93, 96, 0.15);
      }
    }
  }

  .item-group {
    display: flex;
    flex-direction: column;
    margin: 0 auto 20px;
    .icon {
      margin: 0 auto;
    }
  }

  .big-button {
    cursor: pointer;
    transition:
      transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
      box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1);

    &:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);

      .icon {
        transform: rotate(-15deg) scale(1.1);
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      }
    }
  }

  /* Ensure icons have smooth transform */
  .big-button .icon {
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    transform-origin: center;
  }

  .modal {
    padding: 0 10px;
    .modal-body {
      position: relative;
      color: var(--DarkBlue);
      background-color: var(--OffWhite);
      width: 100%;
      max-width: 1088px;
      padding: 50px 15px;
      align-items: flex-start;
      gap: 22px;

      max-height: 90vh; // never taller than the viewport
      overflow-y: auto; // allow scrolling inside the modal
      overflow-x: hidden; // prevent sideways scroll from swiper
    }

    .title {
      display: flex;
      padding: 3px 7px;
      align-items: flex-start;
      width: fit-content;
      margin: 0 0 10px;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 122.631%;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      background: rgba(103, 185, 223, 0.72);
    }

    .modal-header {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 0 15px;
      margin: 0 0 15px;
      border-bottom: 1px solid var(--Copper);
    }

    .icon {
      width: 49px;
      height: 49px;
      aspect-ratio: 1/1;
      margin: 0 18px 0 0;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      line-height: 122.631%;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    ul {
      list-style: outside;
      padding-left: 25px;
      margin: 26px 0 13px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.68px;
    }

    li {
      margin: 0 0 10px;
      &::marker {
        font-size: 20px;
        vertical-align: middle;
      }
      &:last-child {
        margin: 0;
      }
    }

    p {
      color: var(--DarkBlue);
    }

    .close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;

      svg {
        width: 30px;
        height: 30px;
        path {
          stroke: var(--Copper);
        }
      }
    }
  }

  .mega-modal {
    .modal-header {
      border: 0;
      padding: 0;
      margin: 0 auto 26px;
    }
    h3 {
      color: var(--DarkBlue);
      .heading {
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        line-height: 122.631%;
        letter-spacing: 2px;
        text-transform: uppercase;
        :deep(span) {
          color: var(--Blue);
        }
      }
    }

    p {
      font-size: 16px;
      line-height: 120%;
    }

    .swiper {
      width: 100%; // container fluid
    }
    .swiper-slide {
      width: auto !important; // let it shrink naturally
      max-width: 100%; // don’t overflow screen
      box-sizing: border-box;
    }
    .nav-btn {
      display: flex;
      align-items: center;
      gap: 2px;
      transition: background-color 0.15s ease-out;
      svg {
        width: 12px;
        height: 12px;
        path {
          transition: fill 0.15s ease-out;
        }
      }
      span {
        color: var(--Copper);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: color 0.15s ease-out;
      }
      &:hover {
        background-color: var(--Copper);
        span {
          color: white;
        }
        svg {
          path {
            fill: white;
          }
        }
      }
    }
  }

  .mega-modal-content {
    color: var(--DarkBlue);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 1.4px;

    .label {
      display: flex;
      padding: 3px 7px;
      margin: 0 0 8px;
      align-items: flex-start;
      background: var(--Copper);
      width: fit-content;
      color: var(--DarkBlue);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 122.631%;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .intro-text {
      text-transform: uppercase;
    }
  }

  .features {
    padding: 0;
    margin: 26px auto 0;

    :deep(.swiper) {
      width: 100%;
      max-width: 100%;
    }

    :deep(.swiper-slide) {
      width: 100% !important;
      max-width: 100%;
    }

    .feature-stack {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .special-slide {
      p {
        color: #132129;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.64px;
        &:last-child {
          padding: 15px 0 0;
          border-top: 1px solid #575d60;
        }
        :deep(span) {
          color: var(--Copper);
          font-weight: 600;
          &.blue {
            color: var(--Blue);
          }
        }
      }
    }

    .feature-item {
      display: block;
      padding: 16px;
      border-radius: 7px;
      background: rgba(87, 93, 96, 0.11);

      p {
        font-weight: 400;
        text-transform: none;
      }

      :deep(span) {
        color: var(--Blue);
        font-weight: 500;
      }
    }
    h5 {
      margin: 0 0 8px;
      color: var(--Copper);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
  }

  .nav-wrapper {
    position: relative;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    pointer-events: none;

    .nav-btn {
      position: relative;
      background: transparent;
      border: none;
      cursor: pointer;
      pointer-events: all;
      border: 1px solid var(--Copper);
      border-radius: 50px;
      padding: 5px 8px;
    }

    .swiper-button-disabled {
      opacity: 0;
      pointer-events: none;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: transform 0.3s ease-out;
  }
  .slide-up-enter-from {
    transform: translateY(50px);
  }
  .slide-up-leave-active {
    transition: transform 0.3s ease-in;
  }
  .slide-up-leave-to {
    transform: translateY(50px);
  }

  @media (min-width: 880px) {
    .section-relocation {
      padding: 100px 0 70px 0;
    }
    .item-group {
      flex-direction: row;
      margin: 0 auto 20px;
      .icon {
        margin: 0 auto;
      }
    }
    p {
      font-size: 20px;
      line-height: 33px;
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .relief-solutions {
      .row-one {
        text-align: left;
        .two-col-grid {
          grid-template-columns: 1.4fr 1fr;
          gap: 106px;
        }
        h3 {
          padding: 10px 0 0 32px;
        }
      }
      .row-two,
      .row-three {
        text-align: left;
        .icon {
          margin: 0 30px 0 0;
        }
      }
    }

    .row-three {
      .two-col-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .modal {
      padding: 0;
      .modal-body {
        max-width: 1088px;
        padding: 39px 70px;
      }
      .title {
        padding: 0 11px;
        font-size: 16px;
      }
      .icon {
        width: 49px;
        height: 49px;
      }
      h3 {
        font-size: 20px;
      }
      ul {
        font-size: 17px;
      }
      .close-btn {
        right: 20px;
        top: 15px;

        svg {
          width: 35px;
          height: 35px;
        }
      }
    }

    .mega-modal {
      padding: 0 40px;
      h3 {
        .heading {
          font-size: 40px;
          line-height: 122.631%;
          letter-spacing: 4px;
        }
      }
      p {
        font-size: 20px;
        line-height: 120%;
      }
      .mega-modal-content {
        font-size: 20px;
        line-height: 120%;

        .label {
          display: flex;
          padding: 0 7px;
          font-size: 15px;
          line-height: 122.631%;
        }
      }
    }

    .features {
      margin: 26px auto;
      .feature-item {
        padding: 16px 32px;
      }
      h5 {
        margin: 0;
        font-size: 20px;
        line-height: 35px;
      }
    }

    .nav-wrapper {
      position: absolute;
      bottom: 85px;
      padding: 0 16px;
      .custom-prev {
        left: 8px;
      }
      .custom-next {
        right: 8px;
      }
    }
  }

  @media (min-width: 1100px) {
    .container {
      padding: 0;
    }
  }
</style>
