export default ({ store }) => {
  let scrollGoingToBottom = false

  window.onscroll = function(ev) {
    if (
      !scrollGoingToBottom &&
      (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    ) {
      scrollGoingToBottom = true
      store.commit('setScrollGoingToBottom', true)
    }
    if (scrollGoingToBottom && window.scrollY < 40) {
      scrollGoingToBottom = false
      store.commit('setScrollGoingToBottom', false)
    }
  }
}
