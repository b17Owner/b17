export const state = () => ({
    color: 'System'
})

export const mutations = {
  preference(state, color) {
    state.color = color
  },
}
