export const state = () => ({
  scrollGoingToBottom: false,
  template: false,
  sidebar: false,
  edit: true,
  dark: false,
  app: {
    width: 800,
    height: 600,
    backgroundUrl: '',
    backgroundSize: 'cover',
    backgroundAlign: 'center',
    backgroundColor: '#000',
    textColor: '#fff'
  }
})

export const mutations = {
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
