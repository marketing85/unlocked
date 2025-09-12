<template>
  <picture>
    <source v-if="withSet"
            type="image/webp"
            :srcset="buildSet(src, 'webp')"
            :sizes="sizes || '100vw'" />
    <source v-if="withSet"
            :type="fallbackType"
            :srcset="buildSet(src, 'original')"
            :sizes="sizes || '100vw'" />
    <source v-else type="image/webp" :srcset="swapExt(src, 'webp')" />
    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      :decoding="decoding"
      :width="width"
      :height="height"
      :fetchpriority="fetchpriority"
    />
  </picture>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    src: string
    alt?: string
    widths?: string     // e.g. "480,960,1600"
    sizes?: string
    loading?: 'lazy' | 'eager'
    decoding?: 'async' | 'auto' | 'sync'
    width?: number | string
    height?: number | string
    fetchpriority?: 'high' | 'low' | 'auto'
  }>(), {
    alt: '',
    loading: 'lazy',
    decoding: 'async',
  })

  const fallbackType = computed(() =>
    props.src.endsWith('.png') ? 'image/png' : 'image/jpeg'
  )
  const withSet = computed(() => !!props.widths)

  function swapExt(path: string, ext: 'webp') {
    return path.replace(/\.(jpe?g|png)$/i, '.webp')
  }

  function buildSet(path: string, format: 'webp' | 'original') {
    const sizes = (props.widths || '')
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)

    if (!sizes.length) return ''

    const base = path.replace(/(\.(jpe?g|png))$/i, '')
    const origExt = path.split('.').pop()

    return sizes.map(w => {
      if (format === 'webp') {
        return `${base}-${w}.webp ${w}w`
      }
      return `${base}-${w}.${origExt} ${w}w`
    }).join(', ')
  }
</script>
