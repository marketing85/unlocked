<script setup>
  import { slider } from '#build/ui'

  const residentialProperties = [
    { name: 'Chandler Street, Nashua, NH', units: 4 },
    { name: 'Kimball Street, Manchester, NH', units: 2 },
    { name: 'Emerson Street, Haverhill, MA', units: 4 },
    { name: 'Summit View Drive, Moultonborough, NH', units: null },
    { name: 'Province Lake Road, Wakefield, NH', units: null },
    { name: 'Gulliver Drive, Sanford, ME', units: null },
    { name: 'Meadow Glen Drive, Moltonborough, NH', units: null },
    { name: 'Main Street, Gorham, NH', units: null },
    { name: 'Sullivan Drive, Hudson, NH', units: null },
    { name: 'Cannon Drive, Nashua, NH', units: null },
    { name: 'Berkshire Road, Nashua, NH', units: null },
  ]

  const commercialProperties = [
    {
      name: 'Inn 32',
      description:
        '<span>19 bedroom inn</span> with one 4 bedroom suite, and one 2 bedroom suite, located at Main St in North Woodstock, New Hampshire.',
    },
    {
      name: 'Inn at Mount Snow',
      description:
        '<span>16 room hotel</span> that we converted into a 20 room boutiqueski destination located at Vermont Rte 100, West Dover, Vermont.',
    },
    {
      name: '22 Maple Street',
      description:
        'West Lebanon, NH - a <span>14 unit building</span> with buildable lot ($2 mil)',
    },
  ]
  const propertySlides_1 = [
    '/investors/inn32_1.jpg',
    '/investors/inn32_2.jpg',
    '/investors/inn32_3.jpg',
    '/investors/inn32_4.jpg',
  ]
  const propertySlides_2 = [
    '/investors/winnipesaukee_1.jpg',
    '/investors/winnipesaukee_2.jpg',
  ]
</script>

<template>
  <section class="section-recent-partner">
    <div class="container">
      <h2>Recent partnered acquisitions</h2>

      <div class="section-row">
        <div class="two-col-grid">
          <div class="grid-item">
            <h4>Residential</h4>
            <ul>
              <li v-for="(p, index) in residentialProperties" :key="index">
                {{ p.name }}
                <span v-if="p.units">{{ p.units }} unit</span>
              </li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Commercial</h4>
            <ul>
              <li v-for="(p, index) in commercialProperties" :key="index">
                <div>
                  <strong>{{ p.name }}</strong
                  ><br />
                  <div v-html="p.description" class="desc"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="section-row endorsement-1">
        <h3>
          Positive Endorsements from property owners who have sold to us
          creatively
        </h3>

        <div class="row-item two-col-grid">
          <div class="grid-item">
            <h4>Christina P.</h4>
            <p>
              “About a year ago my husband and I made the tough decision to sell
              our business and home. After an unsuccessful and stressful
              experience with a realtor we were introduced to Jonathan and his
              team at Unlocked Home Project.
            </p>
          </div>
          <div class="grid-item">
            <PropertySlider
              :slides="propertySlides_1"
              label="Read more about the Inn"
              link="http://inn32.com/"
            />
          </div>
        </div>

        <div class="row-item">
          <p>
            Jonathan was both professional and caring about our situation of
            needing to sell our establishment.
          </p>
          <p>
            Jonathan helped our sale go through with creative financing terms
            that were great for both us and our final team of buyers.
          </p>
          <p>
            Jonathan kept things on track when I had to have an emergency
            surgery and needed to push our closing day out by two months.
          </p>
          <p>
            During the final days of our sale, things became  complicated with
            our property having some DOT setback questions and the original
            realtor trying to weasel his way back in for financial gain. Even
            with those things occurring, throughout the entire process
            communication was open and tension free.
          </p>
          <p>
            I definitely recommend selling your property whether a home or
            business with Jonathan and his team. You’ll be glad when you decide
            to use Unlocked Home Project.”
          </p>
        </div>
      </div>

      <div class="section-row endorsement-2">
        <h4>Jessie D.</h4>
        <div class="two-col-grid">
          <div class="grid-item">
            <video controls width="100%" poster="/investors/video-poster.jpg">
              <source src="/investors/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="grid-item">
            <PropertySlider
              :slides="propertySlides_2"
              label="Lake Winnipesaukee Airbnb"
            />
          </div>
        </div>

        <div class="row-item">
          <p>
            “Jon and the team at UHP helped me move on from a vacation home of
            mine that just didn’t make sense for me anymore financially…I
            actually made a lot more off the sale than I would have if I had
            sold traditionally with a realtor, because of the
            creative/unconventional sale strategies they presented to me . . .
            if you have a house that you just want to let go of privately and as
            easily as possible, definitely reach out to these guys first!“
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-recent-partner {
    padding: 50px 0;
    background-color: var(--OffWhite);
  }
  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }
  h2 {
    color: var(--DarkBlue);
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 auto 36px;
  }
  h3 {
    color: var(--DarkBlue);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 128.6%;
    letter-spacing: 1.75px;
    text-transform: uppercase;
  }
  h4 {
    color: var(--Copper);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin: 0 0 16px;
  }
  p {
    color: var(--DarkBlue);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.8px;
    margin: 0 0 16px;
  }
  .section-row {
    padding: 36px 0;
    border-top: 1px solid var(--Copper);
    .row-item {
      margin: 36px 0 0;
    }
  }
  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }
  .grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      justify-content: space-between;
      margin: 0 0 16px;
      span,
      .desc ::v-deep(span) {
        color: var(--Blue);
      }
    }
  }

  @media (min-width: 900px) {
    .section-recent-partner {
      padding: 60px 0 70px;
    }
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 25px;
    }
    .two-col-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 80px;
      align-items: center;
    }
    .endorsement-2 {
      .two-col-grid {
        gap: 36px;
      }
      video {
        height: 100%;
      }
    }
  }
</style>
