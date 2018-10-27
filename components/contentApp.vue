<template>
  <div>
    <div class="size-container">
        <div class="content-app--menu container align-center">
          <menu-tools></menu-tools>
        </div>
        <div class="content-app--container" :class="{ dark : $store.state.dark }">
          <div class="container-logo" style="top: 60px; left: 60px;">
            <box-component-image></box-component-image>
          </div>
          <div class="container-company" style="top: 150px; left: 60px;">
            <box-component-roles></box-component-roles>
          </div>
          <div class="container-contact" style="top: 280px; left: 60px;">
            <box-component-contact></box-component-contact>
          </div>
          <div class="container-contact" style="top: 150px; left: 320px; width: 430px;">
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

export default {
  components: {
    BoxComponentImage,
    BoxComponentMarkdown,
    BoxComponentRoles,
    BoxComponentContact,
    MenuTools
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

  > div {
    position: absolute;
    top: 0;
    left: 0;
  }

  &.edit {
    border: 1px dashed red;
    padding: 5px;
  }

  &.dark {
    color: #fff;
    background: #000;
  }
}

.icon-menu {
  user-select: none;
  margin: 4px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  svg {
    transition: 0.3s;
    stroke: #000;
  }
  &:hover,
  &.active {
    background: #000;
    svg {
      stroke: #fff;
      width: 20px;
      height: 20px;
    }
  }
}

.role {
  font-size: 2rem;
  font-weight: bold;
}

.contact {
}

.container-company {
  max-width: 290px;
}
</style>
