<template>
  <section class="section-contact">
    <div class="container">
      <div class="contact-heading">
        <div class="phone">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 41"
            fill="none"
          >
            <path
              d="M25.0833 8.93345C26.7112 9.25106 28.2073 10.0472 29.3801 11.22C30.5529 12.3928 31.349 13.8889 31.6666 15.5168M25.0833 2.26678C28.4654 2.64251 31.6193 4.15708 34.027 6.5618C36.4348 8.96652 37.9533 12.1185 38.3333 15.5001M36.6666 28.8001V33.8001C36.6685 34.2643 36.5734 34.7237 36.3875 35.149C36.2015 35.5743 35.9288 35.9561 35.5868 36.2699C35.2447 36.5837 34.8409 36.8226 34.4012 36.9713C33.9615 37.12 33.4956 37.1752 33.0333 37.1335C27.9047 36.5762 22.9783 34.8237 18.65 32.0168C14.623 29.4579 11.2089 26.0437 8.64997 22.0168C5.83327 17.6688 4.08037 12.7184 3.5333 7.56678C3.49165 7.1059 3.54643 6.64139 3.69414 6.20283C3.84185 5.76427 4.07925 5.36127 4.39125 5.01949C4.70324 4.67771 5.08298 4.40463 5.50629 4.21765C5.9296 4.03068 6.3872 3.93389 6.84997 3.93345H11.85C12.6588 3.92549 13.443 4.21192 14.0562 4.73934C14.6695 5.26676 15.0701 5.9992 15.1833 6.80012C15.3943 8.40023 15.7857 9.97133 16.35 11.4835C16.5742 12.08 16.6227 12.7283 16.4898 13.3516C16.3569 13.9749 16.0481 14.547 15.6 15.0001L13.4833 17.1168C15.8559 21.2894 19.3107 24.7442 23.4833 27.1168L25.6 25.0001C26.0531 24.552 26.6252 24.2432 27.2485 24.1103C27.8718 23.9773 28.5201 24.0259 29.1166 24.2501C30.6288 24.8144 32.1999 25.2057 33.8 25.4168C34.6096 25.531 35.349 25.9388 35.8775 26.5626C36.4061 27.1864 36.6869 27.9827 36.6666 28.8001Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>603-691-1364</span>
        </div>

        <div class="divider"></div>

        <div class="email">
          <a href="mailto:admin@unlockedhomeproject.com?subject=Inquiry">
            admin@unlockedhomeproject.com
          </a>
        </div>
      </div>

      <h2>
        <span class="highlight">Contact Us</span> to see how we can best serve
        you
      </h2>

      <FormSwitcher :theme="theme" />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    theme: {
      type: String,
      default: 'light',
    },
  })
</script>

<style scoped lang="scss">
  .section-contact {
    border-top: 6px solid var(--Copper);

    .container {
      padding: 35px 15px;
      margin: 0 auto;
      max-width: 1088px;
    }
  }

  .contact-heading {
    display: block;
    text-align: center;
    padding: 30px 0;
    border-top: 1px solid var(--Blue);
    border-bottom: 1px solid var(--Blue);
  }

  .phone {
    svg {
      display: inline-block;
      margin: 0 1rem 0 0;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
    span {
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 122.631%;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }
  }

  .divider {
    display: none;
  }

  .email {
    margin-top: 1rem;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 1.15px;
  }

  h2 {
    text-align: center;
    padding: 0 0 30px;
    margin: 30px 0;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    border-bottom: 1px solid var(--Blue);

    .highlight {
      color: var(--Copper);
    }
  }

  @media (min-width: 768px) {
    .section-contact {
      .container {
        padding: 70px 30px;
      }
    }

    .contact-heading {
      display: flex;
      text-align: left;
      justify-content: space-between;
      padding: 30px 0;
    }

    .phone {
      svg {
        width: 32px;
        height: 32px;
      }
      span {
        font-size: 18px;
      }
    }

    .divider {
      display: block;
      width: 1px;
      border-right: 1px solid var(--Blue);
    }

    .email {
      align-content: center;
      margin: 0;
      font-size: 18px;
    }

    h2 {
      text-align: left;
      font-size: 38px;
    }
  }

  @media (min-width: 900px) {
    .contact-heading {
      padding: 30px 30px;
    }

    h2 {
      font-size: 48px;
    }

    .phone {
      svg {
        width: 40px;
        height: 40px;
      }
      span {
        font-size: 28px;
      }
    }

    .email {
      font-size: 23px;
    }
  }
</style>
