import axios from '@/axios'
const state = {}
const mutations = {}
const actions = {
  async companies ({ commit }) {
    try {
      const { data } = await axios.get('api/web/get_company')
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error.response)
    }
  },
  async organizations ({ commit }) {
    try {
      const { data } = await axios.get('api/web/get_organization')
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error.response)
    }
  },
  async detail_admin ({ commit }) {
    try {
      const { data } = await axios.get('api/web/detail_admin')
      return Promise.resolve(data)
    } catch (error) {
      return Promise.reject(error.response)
    }
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}