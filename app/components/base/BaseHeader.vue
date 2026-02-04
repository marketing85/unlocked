<template>
  <header class="base-header relative w-full flex items-center text-white z-50">
    <!-- Logo -->
    <div class="logo font-bold text-xl">
      <NuxtLink to="/">
        <img src="/logo.png" alt="Unlocked" />
      </NuxtLink>
    </div>

    <!-- Overlay -->
    <div
      v-show="drawerOpen"
      @click="closeDrawer"
      class="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
    ></div>

    <!-- Drawer -->
    <aside
      class="fixed top-0 right-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300"
      :class="drawerOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <nav>
        <ul>
          <li class="top-links">
            <NuxtLink to="/" class="link inline">Home</NuxtLink>
            <NuxtLink to="/about" class="link inline">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/agents" class="link">Real Estate Agents</NuxtLink>
          </li>
         <li>
           <a
             href="https://unlockedhomerelief.com/"
             class="link"
             target="_blank"
             rel="noopener noreferrer"
           >
             Relief Division
           </a>
         </li>
          <li>
            <NuxtLink to="/homeowners" class="link">Homeowners</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/real-estate-investors" class="link"
              >Real Estate Investors</NuxtLink
            >
          </li>
          <li>
            <a
              href="https://unlockedlandproject.com/"
              target="_blank"
              class="link"
              >Land Division</a
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="link">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
  </header>

  <!-- Hamburger / Close Button -->
  <div
    ref="hamburger"
    @click="toggleDrawer"
    class="hamburger"
    :class="{
      'is-active': drawerOpen,
      'opacity-0 pointer-events-none': hideHamburger,
    }"
    aria-label="Toggle menu"
  >
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'

  const hideHamburger = ref(false)
  const drawerOpen = ref(false)

  function toggleDrawer() {
    drawerOpen.value = !drawerOpen.value
  }

  function closeDrawer() {
    drawerOpen.value = false
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Escape') closeDrawer()
  }

  function onScroll() {
    hideHamburger.value = window.scrollY > 100
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
    window.addEventListener('keydown', handleKey)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('keydown', handleKey)
  })
</script>

<style lang="scss" scoped>
  .base-header {
    padding: 45px 0;
    background-color: transparent;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 200px;
    height: auto;
    padding: 0;
  }

  aside {
    padding: 120px 40px;
    width: 300px;
    background-color: var(--DarkBlue);
  }

  nav {
    .top-links {
      .link {
        color: var(--OffWhite);
        margin: 0 2rem 0 0;
      }
    }
    li {
      margin: 0 0 60px;
    }
    .link {
      color: var(--Copper);
      font-style: normal;
      font-weight: 800;
      letter-spacing: 3.96px;
      text-transform: uppercase;

      &:hover {
        opacity: 0.85;
      }
    }
  }

  .hamburger {
    position: fixed;
    right: 2rem;
    top: 2rem;
    z-index: 100;
    transition: opacity 0.3s ease; /* transition-opacity duration-300 */

    &.opacity-0 {
      opacity: 0;
    }

    &.pointer-events-none {
      pointer-events: none;
    }

    .line {
      width: 35px;
      height: 3px;
      background-color: var(--Copper);
      display: block;
      margin: 8px auto;
      transition: all 0.3s ease-in-out;
    }

    &.is-active .line:nth-child(2) {
      opacity: 0;
    }

    &.is-active .line:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }

    &.is-active .line:nth-child(3) {
      transform: translateY(-12px) rotate(-45deg);
    }

    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .logo {
      width: 439px;
      height: 127px;
      padding: 16px 23px;
    }

    .hamburger {
      .line {
        width: 50px;
        height: 5px;
      }
      &.is-active .line:nth-child(1) {
        transform: translateY(13px) rotate(45deg);
      }

      &.is-active .line:nth-child(3) {
        transform: translateY(-13px) rotate(-45deg);
      }
    }
  }
</style>
