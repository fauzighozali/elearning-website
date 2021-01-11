import axios from '@/axios'
const state = {
  rows: []
}
const mutations = {
  SET_ROWS (state, data) {
    state.rows = data
  }
}
const actions = {
    async index ({commit}, payload) {
        try {
          const { data } = await axios.get(`/api/web/organization/list_by_company?company_id=${payload}`)
          commit('SET_ROWS', data.data)
          return Promise.resolve(data)
        } catch (error) {
          return Promise.reject(error.response)
        }
    },
    async getLeaderboard ({commit}, id) {
      try {
        const { data } = await axios.get(`/api/web/leaderboard?organization_id=${id}`)
        commit('SET_ROWS', data.data)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }