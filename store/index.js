export const state = () => ({
  dark: false,
  scrollGoingToBottom: false
})

export const mutations = {
  setDark(state, value) {
    state.dark = value
  },
  setScrollGoingToBottom(state, value) {
    state.scrollGoingToBottom = value
  }
}