<template>
    <div>
      <div class="menu-relative">
        <div class="menu container align-items-center justify-content-between">
          <div>
            <span class="logo">Joberson</span>
          </div>
          <div class="menu__export" :class="{ moqued: !$store.state.scrollGoingToBottom }">
            <button-export></button-export>
          </div>
          <div>
            <ul class="list-style-none container">
              <li> <a href="" class="menu-item active">Criar</a></li>
              <li> <a href="" class="menu-item">Modelos</a></li>
              <li> <a href="" class="menu-item">Github</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="menu-config container column justify-content-center"
        :class="{ moqued: $store.state.scrollGoingToBottom }"
      >
        <div class="config-company">
          <span class="emoji">👉</span>
          <span>Oportunidade na <strong>Netflix</strong></span>
        </div>

        <div class="container wrap config-btn align-items-center justify-content-between">
          <div class="container wrap align-items-center">
            <span class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </span>
            <span class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
            </span>
            <span class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </span>
          </div>
          <button-export></button-export>
        </div>
      </div>
    </div>
</template>

<script>
import ButtonExport from '~/components/ButtonExport'
export default {
  components: {
    ButtonExport
  }
}
</script>


<style lang="scss" scoped>
.menu-relative {
  content: '';
  height: 70px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: block;
}

.menu {
  height: 70px;
  background: #000;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 1;

  &__export {
    opacity: 1;
    transition: opacity .3s .15s;
  }
}

.logo {
  font-weight: bold;
  font-size: 1.5rem;
}

.menu-config {
  background: #000;
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  opacity: 1;
  transition: opacity .3s;
}

.config-company {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.config-btn {
  .btn {
    margin: 4px;
  }
}

.menu-item {
  color: #fff;
  text-decoration: none;
  margin: 4px;
  opacity: 0.5;
  transition: 0.3s;
  &.active,
  &:hover {
    opacity: 1;
  }
}

.moqued {
  opacity: 0;
}
</style>
