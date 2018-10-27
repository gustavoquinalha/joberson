<template>
  <img :src="logo" :width="logoWidth">
</template>

<script>
export default {
  data() {
    return {
      logo: 'https://cdn.svgporn.com/logos/netflix.svg',
      logoWidth: '180'
    }
  }
}
</script>
