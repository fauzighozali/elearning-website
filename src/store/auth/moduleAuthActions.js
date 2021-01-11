/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from '../../http/requests/auth/jwt/index.js'
import router from '@/router'

export default {
  loginJWT ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      jwt.login(payload.userDetails.username, payload.userDetails.password, payload.userDetails.isWeb)
        .then(response => {          
          if (response) {
            localStorage.setItem('accessToken', response.accessToken)
            commit('UPDATE_USER_INFO', response, {root: true})
            commit('SET_BEARER', response.accessToken)
            resolve(response)
          } else {
            reject({message: 'Wrong Username or Password'})
          }
        })
        .catch(error => { reject(error) })
    })
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      jwt.refreshToken().then(response => { resolve(response) })
    })
  }
}
