<script setup>
  usePageMeta({
    title: 'Terms and Conditions | Unlocked Home Project',
    description: 'Read the Terms and Conditions for use of the Unlocked Home Project website and services. Outlining user agreements and legal disclaimers.',
    path: 'terms',
  });
</script>

<template>
  <div>
    <SectionHero variant="basic">
      <section class="basic-intro">
        <div class="section-one">
          <h1><span>Terms</span> And <span class="blue">Conditions</span></h1>
        </div>
      </section>
    </SectionHero>

    <section class="sheet">
      <div class="sqs-html-content">
        <p>Effective Date: January 6, 2025</p>
        <p class="sqsrte-large">1. Introduction</p>
        <p>
          By accessing or using our services, including receiving SMS
          communications, you agree to comply with and be bound by these Terms
          and Conditions. If you do not agree with these terms, please do not
          engage with our services.
        </p>
        <p class="sqsrte-large">2. Consent for SMS Communication</p>
        <p>
          By providing your consent to receive SMS communications, you
          acknowledge and agree to receive text messages from Unlocked Home
          Properties, Unlocked Creative Real Estate, and any other Unlocked
          related brands, at the phone number you provide. Information obtained
          as part of the SMS consent process will not be shared with third
          parties.
        </p>
        <p class="sqsrte-large">3. Types of SMS Communications</p>
        <p>
          If you have consented to receive text messages, you may receive SMS
          communications related to the following:
        </p>
        <ul data-rte-list="default">
          <li>
            <p>
              Customers and Guests: Updates regarding your property or
              properties, deliveries, or other relevant information.
            </p>
          </li>
          <li>
            <p>
              Job Applicants: Information about your application status,
              onboarding materials, or other employment-related updates.
            </p>
          </li>
        </ul>
        <p class="sqsrte-large">4. Standard Messaging Disclosures</p>
        <ul data-rte-list="default">
          <li>
            <p>
              Message Frequency: Frequency of messages may vary depending on
              your interactions with us.
            </p>
          </li>
          <li>
            <p>
              Standard messaging rates will be charged by your mobile service
              provider.
            </p>
          </li>
          <li>
            <p>Text or reply “HELP” for assistance.</p>
          </li>
          <li>
            <p>
              You can opt-out of receiving SMS messages at any time by texting
              "STOP" to the number from which you received the message.
            </p>
          </li>
        </ul>
        <p>
          For assistance, you can email us at
          <a href="mailto:support@phoenixafterglow.com">support@</a
          ><a href="mailto:support@unlockedhomeproject.com?" target=""
            >unlockedhomeproject.c</a
          ><a href="mailto:support@phoenixafterglow.com">om</a> or visit our
          <a href="/privacy-policy" target="">Privacy Policy</a>.
        </p>
        <p data-rte-preserve-empty="true"></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .basic-intro {
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
  .sheet {
    display: flex;
    margin: 40px 30px;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    background-color: #ffffff;
  }

  p {
    font-size: 16px;
    margin: 0 auto 8px;
    overflow-wrap: anywhere;

    &.sqsrte-large {
      margin: 20px 0 8px;
      font-size: 22px;
      font-weight: 700;
    }
  }

  @media (min-width: 1100px) {
    .sheet {
      margin: 80px auto;
    }
    p {
      font-size: 18px;
    }
  }
</style>
