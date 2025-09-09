<script setup lang="ts">
  const people = [
    {
      name: 'Jonathan Stratton',
      title: 'Co-Owner | Creative Real Estate Educator / Expert',
      image: '/about/jonathan-stratton.jpg',
      level: 1,
      bio: `As the owner and founder of Unlocked Home Project--a creative real estate acquisitions, dispositions, and investment company--Jonathan Stratton is revolutionizing real estate deals in New England with a focus on education, innovation, and a no-B.S. approach. A devoted father of five, he cherishes family time, outdoor pursuits like hiking New England's trails, and instilling in his children the simple ways of life, independence, strong morals, and ethics—-bringing a grounded, family-first perspective that blends personal values with professional drive. Jonathan delivers unparalleled value through cash and creative solutions for residential and commercial transactions, inspiring innovation, trust, and mutual respect to build a community-oriented industry beyond mere transactions.`,
    },
    {
      name: 'Jordan Stratton',
      title: `Co-Owner | Senior Transaction Coordinator and Relocation Specialist`,
      image: '/about/jordan-stratton.jpg',
      level: 1,
      bio: `As a co-owner and co-founder of Unlocked Home Project, Jordan handles behind-the-scenes operations, supporting both Buyers and Sellers. She assists Sellers with transaction coordinating, home searches, relocations, job placements, and moving logistics. As the key liaison in transactions, she strives for "win-win-win" outcomes, building lasting relationships and optimal scenarios for all. A stay-at-home working mom of five young children--often joking about background chaos on calls--Jordan cherishes family time, outdoor adventures, and teaching her children to love and respect others while showing compassion and understanding.`,
    },
    {
      name: 'Noli Peterson',
      title: `Chief Technology Officer | Underwriting`,
      image: '/about/noli-peterson.jpg',
      level: 1,
      bio: `Known as the "systems and numbers guy," Noli has shifted towards the technical side of Real Estate, focusing on integrating efficiencies that benefit clients and partners. With a strong background in both real estate and technology, he enhances digital platforms and implements system solutions to streamline property transactions. An accomplished entrepreneur, he fosters a culture of collaboration and continuous improvement in the evolving real estate landscape. With extensive experience in sales, property management, and client relations, Noli brings valuable expertise to the team. Outside of work, he enjoys spending time with family and friends, outdoor activities, music, and personal development.`,
    },
    {
      name: 'Jess Brill',
      title: `Executive Manager | Transaction Coordinator`,
      image: '/about/jess.jpg',
      level: 1,
      bio: `As the lead Transaction Coordinator for Unlocked Home Project, Jess is the driving force behind the scenes, orchestrating a seamless and efficient experience at every stage of a property's journey. She collaborates closely with buyers, sellers, agents, title companies, attorneys, and investors, serving as the vital link that ensures alignment from start to finish. Jess expertly manages tight timelines and intricate situations with numerous moving parts, tirelessly advocating for clients to deliver exceptional outcomes, no matter the challenge. She also offers support to clients in financial hardship through our Fresh Start Relocation Program. With a diverse background in real estate operations and project management, Jess applies a strategic approach to optimizing efficiency and supporting company growth. In her spare time, she cherishes every moment of motherhood, exploring with her kids, and hanging out with her cats.`,
    },
    {
      name: 'Kristin Halls',
      title: `Creative Real Estate Specialist II`,
      image: '/about/kristin-halls.jpg',
      level: 2,
      bio: `Kristin serves as the front line for connecting with homeowners who are navigating challenging circumstances. With an empathetic and human-first approach, she specializes in understanding homeowner’s unique needs and providing them with the support and guidance needed. With a background in commercial interior architecture, she came to this side of the real estate world with a desire to connect with and help people. Outside of work, you’ll find Kristin creating vibrant memories with family and friends, planning her next big adventure, or curled up with her dog and Kindle.`,
    },
    {
      name: 'Jonathan Stevens',
      title: `Real Estate Investor and Partner`,
      image: '/about/jonathan-stevens.jpg',
      level: 2,
      bio: `Jonathan Stevens is an accomplished professional with extensive experience in the acquisitions of commercial businesses, real estate investing, and business management. He specializes in building and nurturing relationships between buyers and sellers, ensuring smooth transactions and long-lasting partnerships. With years of expertise across diverse industries—-including hospitality and operations-—Jonathan has developed a keen understanding of what it takes to drive success in complex business ventures.In addition to his professional achievements, Jonathan is deeply committed to his family and dedicated to building a lasting legacy. He takes pride in balancing his career with his personal values, striving to make a positive impact in both his professional and personal life.`,
    },
    // {
    //   name: 'Destiny Lopez',
    //   title: `Acquisitions Specialist`,
    //   image: '/about/destiny.jpg',
    //   level: 2,
    //   bio: `At Unlocked Home Project, Destiny serves as an acquisitions specialist, expertly fostering connections with property owners prepared to sell. With an unwavering enthusiasm for real estate and a keen interest in its transformative potential, Destiny thrives as a vital member of a team dedicated to impactful change. Drawn to UHP by its commitment to value-driven practices, Destiny infuses every interaction with integrity, transparency, and trust, ensuring each exchange is personal, purposeful, and client-focused. This steadfast dedication and people-centric approach consistently elevate the client experience, aligning with a powerful mission to make a difference in the industry.`,
    // },
    {
      name: 'Sabrina Malcolm',
      title: `Acquisitions Associate`,
      image: '/about/sabrina.jpg',
      level: 2,
      bio: `Based in Jamaica, Sabrina serves as an acquisitions specialist with Unlocked Home Project. She began her real estate journey in 2020 during the challenges of the Covid pandemic. With a deep passion for helping others, she takes pride in contributing to this meaningful initiative. Sabrina has been continuously growing and thrives within a team that operates like a family, dedicated to addressing clients’ real estate needs with care and commitment.`,
    },
    {
      name: 'Celina Alvarez',
      title: `Acquisitions Associate`,
      image: '/about/celina.jpg',
      level: 2,
      bio: `Hailing from the southern region of the Philippines, Celina embarked on her real estate journey as a transaction coordinator. Over the past four years, she has embraced various roles within the industry. Celina is dedicated to continuous learning and professional growth, taking pride in leveraging her focus and expertise to support clients in achieving their real estate goals alongside a dedicated team.`,
    },
    {
      name: 'Bryan Alexis Godoy',
      title: `Marketing & Social Media Manager`,
      image: '/about/bryan-godoy.jpg',
      level: 2,
      bio: `Based in the Philippines, Bryan drives Unlocked Home Project’s mission through creative and strategic marketing. He builds campaigns that connect, educate, and empower audiences, increasing awareness of Unlocked Home Project’s unique services across multiple target markets. Bryan is excited to play a part in expanding the company’s reach and impact through initiatives that make a meaningful difference in the lives of others.`,
    },
  ]
</script>

<template>
  <div>
    <SectionHero>
      <section class="section-contact">
        <h1>About <span>Us</span></h1>

        <div class="two-col-grid">
          <div class="text-col">
            <p>
              Unlocked Home Project is a revolutionary team of local real estate
              experts, professionals and strategic partners, headquartered in
              the Lakes Region of New Hampshire, primarily serving New Hampshire
              and Maine. Our passion is to provide transformative value to
              homeowners, agents, and our partners by offering innovative &
              creative real estate solutions that can create mutually beneficial
              opportunities for all. This mission stems from serving our
              communities and creating housing opportunities for those in need.
            </p>
          </div>

          <div class="image-col">
            <img src="/about/about.jpg" alt="About Unlocked Home" />
          </div>
        </div>

        <div class="subtext">
          As a family business, each member of our team is committed to
          delivering <span>unmatched results</span> and going the
          <span>extra mile</span> to make a difference in the lives we touch.
        </div>

        <div class="team-section">
          <h2>Our <span>Team</span></h2>

          <div class="team-grid">
            <div v-for="person in people" :key="person.name" class="team-card">
              <img :src="person.image" :alt="person.name" />
              <div class="overlay">
                <div class="overlay-content">
                  <div class="always-show">
                    <h3>{{ person.name }}</h3>
                    <p class="title">{{ person.title }}</p>
                  </div>
                  <!-- keep this bio off screen to the bottom. until hover -->
                  <p class="bio">
                    {{ person.bio }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionHero>
  </div>
</template>

<style lang="scss" scoped>
  .section-contact {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
  }
  h1 {
    margin: 0 auto 20px;
    color: var(--OffWhite);
    font-size: clamp(36px, 4vw, 48px);
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    span {
      color: var(--Copper);
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
    margin: 0 auto 30px;
  }

  .text-col {
    color: var(--OffWhite);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.8px;
  }

  .image-col {
    border-radius: 8px;
    border: 2px solid var(--Blue);
    overflow: hidden;
    width: 100%;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 3 / 2.25;
      object-position: top;
    }
  }

  .subtext {
    color: var(--OffWhite);
    font-family: Montserrat;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 152%;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    span {
      color: var(--Copper);
    }
  }

  .team-section {
    margin: 63px auto 0;
    padding: 63px 0 0;
    border-top: 1px solid var(--Blue);
    width: 100%;
  }

  h2 {
    margin: 0 0 63px;
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 48px);
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    span {
      color: var(--Copper);
    }
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  .team-card {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;
    color: var(--OffWhite);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0) 100%
      );

      .overlay-content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .always-show {
        margin-top: auto;
      }

      h3 {
        font-size: 18px;
        font-weight: 600;
        margin: 0;
      }

      .title {
        color: var(--Copper);
        font-size: 14px;
        margin: 4px 0 0 0;
      }

      .bio {
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.4;
        opacity: 0;
        height: 0;
        overflow: auto;
        transition:
          height 0.2s ease,
          opacity 0.5s ease;
      }
    }

    &:hover .overlay {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.65) 100%
      );
      justify-content: flex-start;
    }

    &:hover .always-show {
      margin-top: 0;
    }

    &:hover .overlay .bio {
      opacity: 1;
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    .section-contact {
      max-width: 1088px;
      padding: 55px 0 91px 0;
    }
    .team-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1014px) {
    h1 {
      margin: 0 0 30px;
    }
    .two-col-grid {
      grid-template-columns: 1fr 1fr;
      gap: 80px;
    }
  }
</style>
