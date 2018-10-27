<template>
  <div>
    <span class="title">Contato</span>
    <ul class="list-style-none contact">
      <li>{{ url }}</li>
      <li>{{ contact }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://jobs.netflix.com/',
      contact: 'jobs@netflix.com.br',
    }
  }
}
</script>
