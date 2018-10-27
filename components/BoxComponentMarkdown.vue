<template>
  <div class="editable">
    <vue-markdown
      v-if="!edit"
      :source="content"
      @dblclick.native="toggleEdit(1)"
    ></vue-markdown>
    <textarea
      v-else
      ref="editableTextarea"
      cols="60"
      rows="20"
      :value="content"
      @input="setContent"
      @blur="toggleEdit(0)"
    ></textarea>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      edit: false,
      content: `# Requisitos

- Experiência em banco de dados PostgreSQL, MongoDB e Cassandra.
- Experiência com ferramentas de ETL e integração de dados.
- Conhecimento em Power BI.

# Atividades

- Apoiar o time de desenvolvimento
- Definir a melhor tecnologia de banco de dados
- Monitorar a saúde do banco de dados
- Apoiar o time de BI – Bussiness Inteligence
- Criar e disponibilizar relatórios para as diversas
`
    }
  },
  methods: {
    toggleEdit(value) {
      this.edit = value
      if (value) {
        this.$nextTick(() => {
          this.$refs.editableTextarea.focus()
        })
      }
    },
    setContent(event) {
      this.content = event.target.value
    }
  }
}
</script>
