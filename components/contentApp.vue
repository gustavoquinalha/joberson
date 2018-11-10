<template>
  <div class="container wrap">
    <sidebar/>

    <div class="size-container">
      <div class="content-app--menu container align-center" v-show="!$store.state.scrollGoingToBottom">
        <menu-tools></menu-tools>
      </div>
      <div class="content-app--container flex-basis-600 flex-grow-1" :class="{ dark : $store.state.dark }" ref="content">









        <div class="container-logo box-selection"
             style="top: 60px; left: 65px; width: 180px; z-index: 1"
             ref="image"
             :class="{ selected: box.image  }"
             @mousedown.prevent="drag('image', $event)">
          <box-component-image></box-component-image>
        </div>


        <div class="container-company box-selection"
             style="top: 150px; left: 65px; width: 230px; z-index: 1"
             ref="roles"
             :class="{ selected: box.roles  }"
             @mousedown.prevent="drag('roles', $event)">
          <box-component-roles></box-component-roles>
        </div>


        <div class="container-contact box-selection"
             style="top: 280px; left: 65px; width: 230px; z-index: 1"
             ref="contact"
             :class="{ selected: box.contact  }"
             @mousedown.prevent="drag('contact', $event)">
          <box-component-contact></box-component-contact>
        </div>


        <div class="container-contact box-selection"
             style="top: 150px; left: 317px; width: 400px; z-index: 1;"
             ref="markdown"
             :class="{ selected: box.markdown  }"
             @mousedown.prevent="drag('markdown', $event)">
          <box-component-markdown></box-component-markdown>
        </div>


      <div class="grid">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
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
  data() {
    return {
      box: {
        image: false,
        roles: false,
        contact: false,
        markdown: false
      }
    }
  },
  methods: {
    select(type) {
      // console.log('clicked')
      // this.box[type] = !this.box[type]
      // console.log(this.box[type])
    },
    drag(type, ev) {
      const border = 2
      const box = this.$refs[type]
      const father = this.$refs['content']
      const positionX = ev.clientX - box.getBoundingClientRect().left
      const positionY = ev.clientY - box.getBoundingClientRect().top
      const onMouseMove = event => {
        let left =
          event.clientX - positionX - father.getBoundingClientRect().left
        let right =
          event.clientY - positionX - father.getBoundingClientRect().right
        let top = event.clientY - positionX - father.getBoundingClientRect().top
        // let bottom = event.clientY - positionX - father.getBoundingClientRect().bottom
        const rightEdge = father.offsetWidth
        const bottomEdge = father.offsetHeight
        // const elWidth = box.
        const boxWidth = box.offsetWidth
        const boxHeight = box.offsetHeight
        console.log(rightEdge, bottomEdge)
        if (left < 0) left = 0
        if (top < 0) top = 0
        if (left > rightEdge) left = rightEdge
        if (top > bottomEdge) top = bottomEdge
        if (left > rightEdge - boxWidth - border)
          left = rightEdge - boxWidth - border
        if (top > bottomEdge - boxHeight - border)
          top = bottomEdge - boxHeight - border
        console.log((55 * 100) / boxWidth)
        console.log(left, bottomEdge - boxHeight - 2)
        console.log(top, rightEdge - boxWidth - 2)
        box.style.left = `${left}px`
        box.style.top = `${top}px`
      }
      const onMouseUp = () => {
        document.removeEventListener('mouseup', onMouseUp)
        document.removeEventListener('mousemove', onMouseMove)
        this.box[type] = false
      }
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
      this.box[type] = true
    }
  },
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
.grid {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #fff;
  color: #444;
  display: none;
}

.line {
  width: 1px;
  height: 100%;
  background: red;
}

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

.box-selection {
  position: absolute;
  &.selected {
    background: rgba(0, 0, 0, 0.3);
    border: 1px dashed #000;
  }
  &.selected::after,
  &::after {
    content: 'Clique 2 vezes para editar';
    border: 1px dashed #000;
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
