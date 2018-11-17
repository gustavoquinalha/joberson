<template>
  <div class="sidebar" v-show="$store.state.sidebar">

        <div class="box">
          <div class="form-group">
            <label for="">Width</label>
            <input class="form-control" type="text" name="width" v-model="width">
          </div>
          <div class="form-group">
            <label for="">Height</label>
            <input class="form-control" type="text" name="height" v-model="height">
          </div>
        </div>

        <div class="box">
          <div class="form-group">
            <label for="">Background URL</label>
            <input class="form-control" type="text" name="width" v-model="backgroundUrl">
          </div>

          <div class="form-group">
            <label for="">Background size</label>
            <div class="container">
              <input type="radio" name="bgSize" value="cover" checked v-model="backgroundSize">
              <label for="">Cover</label>
            </div>
            <div class="container">
              <input type="radio" name="bgSize" value="contain" v-model="backgroundSize">
              <label for="">Contain</label>
            </div>
            <div class="container">
              <input type="radio" name="bgSize" value="fill" v-model="backgroundSize">
              <label for="">Fill</label>
            </div>
          </div>

          <div class="form-group">
            <label for="">Background align</label>
            <div class="container">
              <input type="radio" name="bgAlign" value="center" v-model="backgroundAlign">
              <label for="">Center</label>
            </div>
            <div class="container">
              <input type="radio" name="bgAlign" value="left" v-model="backgroundAlign">
              <label for="">Left</label>
            </div>
            <div class="container">
              <input type="radio" name="bgAlign" value="right" v-model="backgroundAlign">
              <label for="">Right</label>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="form-group">
            <label for="">Background color</label>
            <input class="form-control" type="text" name="bgColor" v-model="backgroundColor">
          </div>
          <div class="form-group">
            <label for="">Text color</label>
            <input class="form-control" type="text" name="txtColor" v-model="textColor">
          </div>
        </div>

    </div>
</template>

<script>
export default {
  computed: {
    width: {
      get() {
        return this.$store.state.width
      },
      set(value) {
        this.$store.commit('setWidth', value)
      }
    },
    height: {
      get() {
        return this.$store.state.height
      },
      set(value) {
        this.$store.commit('setHeight', value)
      }
    },
    backgroundUrl: {
      get() {
        return this.$store.state.backgroundUrl
      },
      set(value) {
        this.$store.commit('setBackgroundUrl', value)
      }
    },
    backgroundColor: {
      get() {
        return this.$store.state.backgroundColor
      },
      set(value) {
        this.$store.commit('setBackgroundColor', value)
      }
    },
    backgroundAlign: {
      get() {
        return this.$store.state.backgroundAlign
      },
      set(value) {
        this.$store.commit('setBackgroundAlign', value)
      }
    },
    backgroundSize: {
      get() {
        return this.$store.state.backgroundSize
      },
      set(value) {
        this.$store.commit('setBackgroundSize', value)
      }
    },
    textColor: {
      get() {
        return this.$store.state.textColor
      },
      set(value) {
        this.$store.commit('setTextColor', value)
      }
    },
  }
}
</script>
