<template>
  <div class="sidebar" v-show="$store.state.sidebar">

        <div class="box">
          <div class="form-group">
            <label for="">Width</label>
            <input class="form-control" type="text" name="width" v-model="app.width">
          </div>
          <div class="form-group">
            <label for="">Height</label>
            <input class="form-control" type="text" name="height" v-model="app.height">
          </div>
        </div>

        <div class="box">
          <div class="form-group">
            <label for="">Background URL</label>
            <input class="form-control" type="text" name="width" v-model="app.backgroundUrl">
          </div>

          <div class="form-group">
            <label for="">Background size</label>
            <div class="container">
              <input type="radio" name="bgSize" value="cover" checked v-model="app.backgroundSize">
              <label for="">Cover</label>
            </div>
            <div class="container">
              <input type="radio" name="bgSize" value="contain" v-model="app.backgroundSize">
              <label for="">Contain</label>
            </div>
            <div class="container">
              <input type="radio" name="bgSize" value="fill" v-model="app.backgroundSize">
              <label for="">Fill</label>
            </div>
          </div>

          <div class="form-group">
            <label for="">Background align</label>
            <div class="container">
              <input type="radio" name="bgAlign" value="center" v-model="app.backgroundAlign">
              <label for="">Center</label>
            </div>
            <div class="container">
              <input type="radio" name="bgAlign" value="left" v-model="app.backgroundAlign">
              <label for="">Left</label>
            </div>
            <div class="container">
              <input type="radio" name="bgAlign" value="right" v-model="app.backgroundAlign">
              <label for="">Right</label>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="form-group">
            <label for="">Background color</label>
            <input class="form-control" type="text" name="bgColor" v-model="app.backgroundColor">
          </div>
          <div class="form-group">
            <label for="">Text color</label>
            <input class="form-control" type="text" name="txtColor" v-model="app.textColor">
          </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['app'])
  }
}
</script>
