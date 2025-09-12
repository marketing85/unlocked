<template>
  <section class="core-values">
    <div class="container">
      <h2>Our <span>Core</span> Values</h2>
      <ul class="items">
        <li><span>RADICAL INTEGRITY (NO B.S.)</span></li>
        <li class="blue"><span>TRANSFORMATIVE VALUE</span></li>
        <li><span>UNLOCKED COMMUNITY</span></li>
        <li class="blue"><span>ULTIMATE ACCOUNTABILITY</span></li>
        <li><span>UNMATCHED COMMITMENT</span></li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/css/mixins' as m;

  .core-values {
    position: relative;
    padding: 60px 0 70px;
    background-color: var(--DarkBlue);

    > * { position: relative; z-index: 1; }
  }

  .core-values::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;

    @include m.bg-with-webp(
        '/background-lock-logo',
        null,
        'png',
        left -205px top -120px,
        750px auto,
        no-repeat
    );
  }

  .core-values::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;

    @include m.bg-with-webp(
        '/background-texture-stone',
        null,
        'jpg',
        center center,
        cover,
        repeat
    );

    mix-blend-mode: multiply;
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h2 {
    color: var(--OffWhite);
    font-size: 48px;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    margin: 0 0 40px;
    text-align: center;

    span {
      color: var(--Copper);
      margin: 0 0 40px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-self: center;
    margin: 0 auto;
  }

  li {
    display: flex;
    align-items: center;
    position: relative;
    color: var(--OffWhite);
    padding: 25px 0 25px 70px;
    font-size: 20px;
    font-weight: 600;

    span { z-index: 1; }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: rgba(227, 140, 59, 0.55);
    }

    &.blue::before {
      background: rgba(103, 185, 223, 0.41);
    }
  }

  @media (min-width: 1120px) {
    .core-values {
      padding: 121px 0 143px;
    }

    .core-values::before {
      @include m.bg-with-webp(
          '/background-lock-logo',
          null,
          'png',
          left -220px top -120px,
          1000px auto,
          no-repeat
      );
    }

    .container {
      max-width: 1088px;
      margin: 0 auto;
      padding: 0 15px;
    }

    h2 {
      text-align: left;
    }

    ul {
      display: flex;
      flex-direction: row;
      padding: 0 12px;
    }

    li {
      &::before {
        display: none;
        content: none;
      }
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      flex: 1 0 0;
      margin: 0 -12px;
      padding: 86px 17px;
      aspect-ratio: 1/1;
      height: 233.6px;
      border-radius: 128.653px;
      color: var(--OffWhite);
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      background: rgba(227, 140, 59, 0.55);

      &.blue {
        background: rgba(103, 185, 223, 0.41);
      }
    }
  }
</style>
