<template>
  <ul class="list-style-none container align-center wrap" v-show="$store.state.edit">
    <li class="icon-menu active">
      <div class="menu-block">
        <div class="menu-dropdown menu-tooltip">
          Editar componentes
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    </li>
    <li class="icon-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
      <div class="menu-block menu-size-input drop-padding">
        <div class="menu-dropdown">
          <div class="container align-items-center margin-bottom-20">
            <label for="">Width</label>
            <input type="text" class="form-control" name="width" v-model="width">
            <span>px</span>
          </div>
          <div class="container align-items-center">
            <label for="">Height</label>
            <input type="text" class="form-control" name="height" v-model="height">
            <span>px</span>
          </div>
        </div>
      </div>
    </li>
    <li class="icon-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        <div class="menu-block drop-padding">
        <div class="menu-dropdown">
          <div class="form-group">
            <label for="">Background URL</label>
            <input type="text" class="form-control" name="width" v-model="backgroundUrl">
          </div>
        </div>
      </div>
      </li>
    <li class="icon-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" x="0px" y="0px" viewBox="0 0 18 18" style="enable-background:new 0 0 18 18;" xml:space="preserve"><path d="M16.5,9c0-4.1-3.4-7.5-7.5-7.5v15C13.1,16.5,16.5,13.1,16.5,9z"/><circle style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" class="st0" cx="9" cy="9" r="7.5"/></svg>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> -->
      <div class="menu-block drop-padding">
        <div class="menu-dropdown">
          <div class="form-group margin-bottom-20">
            <label for="">Background color</label>
            <input type="text" class="form-control" name="width" v-model="backgroundColor">
          </div>
          <div class="form-group">
            <label for="">Text color</label>
            <input type="text" class="form-control" name="width" v-model="textColor">
          </div>
        </div>
      </div>
    </li>
    <li class="icon-menu" @click="$store.commit('setDark', !$store.state.dark)">
      <svg v-show="$store.state.dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      <svg v-show="!$store.state.dark" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      <div class="menu-block">
        <div class="menu-dropdown menu-tooltip">
         <span v-show="$store.state.dark">Tema normal</span>
         <span v-show="!$store.state.dark">Tema dark</span>
        </div>
      </div>
    </li>
    <li class="icon-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
      <div class="menu-block">
        <div class="menu-dropdown menu-tooltip">
          Resetar
        </div>
      </div>
    </li>
  </ul>
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
