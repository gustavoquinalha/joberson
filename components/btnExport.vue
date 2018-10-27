<template>
  <button
    class="btn"
    @click="exportar"
  >
    <svg
      style="margin-right:5px"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-download"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Exportar
  </button>
</template>

<script>
import * as htmlToImage from 'html-to-image'

export default {
  methods: {
    exportar() {
      htmlToImage.toJpeg(document.querySelector('.content-app--container'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a')
          link.download = 'joberson.jpeg'
          link.href = dataUrl
          link.click()
        })
        .catch(console.error)
    }
  }
}
</script>
