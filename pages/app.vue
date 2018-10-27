<template>
  <div>
      <headerApp/>
      <contentApp/>
  </div>
</template>

<script>
import headerApp from '~/components/headerApp.vue'
import contentApp from '~/components/contentApp.vue'

export default {
  components: {
    headerApp,
    contentApp
  }
}
</script>
