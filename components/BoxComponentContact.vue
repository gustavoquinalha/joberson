<template>
  <div class="box-component-contact">
    <span class="title">Contato</span>
    <ul class="list-style-none contact">
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        <a v-if="item.type == 'url'" :href="item.text">{{ item.text }}</a>
        <span v-else>{{ item.text }}</span>
      </li>
    </ul>
    <div class="addItem">
      <input
        type="text"
        placeholder="Precione ENTER para adicionar"
        @keydown.13="add"
        v-model="contact"
        @blur="contact = ''"
      >
    </div>
  </div>
</template>

<script>

const REGEXP = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm)
const getType = (value) => value.match(REGEXP) ? 'url' : 'email'

export default {
  data() {
    return {
      contact: '',
      items: [{
        text: 'https://jobs.netflix.com/',
        type: 'url'
      }, {
        text: 'jobs@netflix.com.br',
        type: 'email'
      }]
    }
  },
  methods: {
    add() {
      if (this.contact) {
        this.items.push({
          text: this.contact,
          type: getType(this.contact)
        });
        this.contact = ''
      }
    }
  }
}
</script>

<style lang="scss">
  .box-component-contact {
    .addItem {
      opacity: 0;
      transition: opacity .3s;
    }

    &:hover {
      .addItem {
        opacity: 1;
      }
    }
  }
</style>
