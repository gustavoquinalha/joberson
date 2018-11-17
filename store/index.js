export const state = () => ({
  scrollGoingToBottom: false,
  template: false,
  sidebar: false,
  edit: true,
  dark: false,
  width: 800,
  height: 600,
  backgroundUrl: '',
  backgroundSize: 'cover',
  backgroundAlign: 'center',
  backgroundColor: '#000',
  textColor: '#fff',
})

export const mutations = {
  setWidth(state, value) {
    state.width = value
  },
  setHeight(state, value) {
    state.height = value
  },
  setBackgroundUrl(state, value) {
    state.backgroundUrl = value
  },
  setBackgroundAlign(state, value) {
    state.backgroundAlign = value
  },
  setBackgroundColor(state, value) {
    state.backgroundColor = value
  },
  setBackgroundSize(state, value) {
    state.backgroundSize = value
  },
  setTextColor(state, value) {
    state.textColor = value
  },
  setDark(state, value) {
    state.dark = value
  },
  editMood(state, value) {
    state.edit = value
    state.template = false
  },
  showTemplate(state, value) {
    state.template = value
    state.edit = false
  },
  showSidebar(state, value) {
    state.sidebar = value
  },
  setScrollGoingToBottom(state, value) {
    state.scrollGoingToBottom = value
  }
}
