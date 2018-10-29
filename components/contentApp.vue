<template>
  <div class="container wrap">
    <sidebar/>

    <div class="size-container">
      <div class="content-app--menu container align-center" v-show="!$store.state.scrollGoingToBottom">
        <menu-tools></menu-tools>
      </div>
      <div class="content-app--container flex-basis-600 flex-grow-1" :class="{ dark : $store.state.dark }">
        <div class="container-logo box-selection" style="top: 60px; left: 60px; width: 230px">
          <box-component-image></box-component-image>
        </div>
        <div class="container-company box-selection" style="top: 150px; left: 60px; width: 230px">
          <box-component-roles></box-component-roles>
        </div>
        <div class="container-contact box-selection" style="top: 280px; left: 60px; width: 230px">
          <box-component-contact></box-component-contact>
        </div>
        <div class="container-contact box-selection" style="top: 150px; left: 320px; width: 430px;">
          <box-component-markdown></box-component-markdown>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BoxComponentImage from '~/components/BoxComponentImage'
import BoxComponentMarkdown from '~/components/BoxComponentMarkdown'
import BoxComponentRoles from '~/components/BoxComponentRoles'
import BoxComponentContact from '~/components/BoxComponentContact'
import MenuTools from '~/components/MenuTools'
import sidebar from '~/components/sidebar'

export default {
  components: {
    BoxComponentImage,
    BoxComponentMarkdown,
    BoxComponentRoles,
    BoxComponentContact,
    MenuTools,
    sidebar
  }
}
</script>

<style lang="scss">
.size-container {
  max-width: 100%;
  width: 800px;
  margin: 0 auto;
  margin-bottom: 34px;
  padding: 8px;
  box-sizing: border-box;
}

.content-app--menu {
  border-radius: 4px;
  margin-bottom: 8px;
  text-align: center;
  color: #fff;
}

.content-app--container {
  min-height: 550px;
  position: relative;
  border: 1px solid #000;
  color: #000;
  background: #fff;
  transition: 0.3s;
  overflow: auto;

  a {
    color: #000;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.edit {
    border: 1px dashed red;
    padding: 5px;
  }
}

.role {
  font-size: 2rem;
  font-weight: bold;
}

.container-company {
}

.box-selection {
  position: relative;
  &::after {
    content: 'Clique 2 vezes para editar';
    display: block;
    position: absolute;
    bottom: calc(100% + 4px);
    left: -1px;
    background: #000;
    border-radius: 2px;
    color: #fff;
    white-space: nowrap;
    padding: 4px 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12px;
    visibility: hidden;
  }
  &:hover {
    border: 1px dashed #000;
    &::after {
      visibility: visible;
    }
  }
}
</style>
