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
    async getCourse ({commit}, id) {
      try {
        const { data } = await axios.get(`/api/web/course?organization_id=${id}`)
        commit('SET_ROWS', data.data)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
    async getQuestion ({commit}, id) {
      try {
        const { data } = await axios.get(`/api/web/get_question/${id}`)
        commit('SET_ROWS', data.data)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
    async destroy (store, id) {
      try {
        const { data } = await axios.delete(`api/web/course/${id}`)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
    async store (store, payload) {
      try {
        const { data } = await axios.post('api/web/course', payload)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
    async store_question (store, payload) {
      try {
        const { data } = await axios.post('api/web/store_question', payload)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
    async show ({commit}, id) {
      try {
        const { data } = await axios.get(`api/web/detail_course/${id}`)
        return Promise.resolve(data)
      } catch (error) {
        return Promise.reject(error.response)
      }
    },
    async update (store, payload) {
      try {
        const { data } = await axios.put(`api/web/course/${payload.id}`, payload)
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