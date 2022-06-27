import UserApi from '../../api/login'
import { useRouter } from 'vue-router'

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || null
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await UserApi.login(payload)
      console.log(response)
      if (response.data.data.token) {
        commit('setToken', response.data.data.token)
      } else {
        alert('账号或密码错误')
        return
      }
      const router = useRouter()
      router.push({
        path: '/'
      })
    }
  }
}
