<template>
  <section class="section-reference">
    <div class="container">
      <div class="two-col-grid">
        <div class="text-col">
          <div class="text-body">
            “I am an attorney and owner of a title company. I have done several
            transactions with Unlocked Home Project and they have all been
            seamless. Communications are great. These guys are quick. They can
            purchase a property in what seems like no time flat.
            <span>My experience has been excellent.</span>”
          </div>
          <div class="text-footer">
            <p class="text-author">J.L. Sweeney</p>
            <p class="text-title">
              (Attorney and owner of Sweeney Law title company)
            </p>
          </div>
        </div>

        <!-- Background image box -->
        <div
          class="image-col"
          role="img"
          aria-label="Attorney reference image"
        ></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/css/mixins' as m;

  .section-reference {
    padding: 50px 20px;
    border-top: 6px solid var(--Copper, #e38c3b);
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px; /* slightly smaller gap on mobile */
  }

  .text-body {
    margin: 0 auto 38px;
    color: var(--DarkBlue);
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.96px;

    span {
      color: var(--Copper);
    }
  }

  .text-author {
    color: var(--Copper);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.72px;
  }

  .text-title {
    color: var(--DarkBlue);
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.72px;
  }

  .image-col {
    border-radius: 8px;
    border: 2px solid var(--Blue);
    //background: url('/agents/agents-image.png') lightgray center center / cover
    //  no-repeat;
    width: 100%;
    height: auto;
    aspect-ratio: 217/191;
    @include m.bg-with-webp(
        '/agents/agents-image',
        null,
        'png',
        center center,
        cover,
        no-repeat
    );
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1120px) {
    .section-reference {
      padding: 88px 0 96px;
    }
    .two-col-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 80px;
    }

    .text-body {
      font-size: 24px;
      line-height: 41px;
    }

    .text-title {
      font-size: 18px;
      line-height: 29px;
    }

    .image-col {
      width: 459px;
      height: 404px;
      flex-shrink: 0;
    }
  }
</style>
