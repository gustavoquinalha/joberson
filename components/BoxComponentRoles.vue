<template>
  <div>
    <span class="title">Vaga de</span>
    <br>
    <span
      class="role" 
      v-if="!edit"
      @dblclick="toggleEdit(1)"
    >{{ role }}</span>
    <input
      v-else
      type="text"
      ref="input"
      v-model="role"
      placeholder="Cargo"
      @blur="toggleEdit(0)"
      @keydown.13="toggleEdit(0)">
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: 'User Interface Designer',
      edit: false
    }
  },
  methods: {
    toggleEdit(value) {
      this.edit = value
      if (value) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    }
  }
}
</script>
