import { GetterTree, MutationTree, ActionTree } from 'vuex'
import axios from 'axios'

type User = {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  avatar: string
  gender: string
  phone_number: string
  date_of_birth: string
  address: {
    city: string
    street_name: string
    street_address: string
    zip_code: string
    state: string
    country: string
  }
  subscription: {
    plan: string
  }
}

type Brand = {
  id: number
  brand: string
}

const API_BASE_URL = 'https://random-data-api.com/api/v2'

export const state = () => ({
  selectedUser: undefined as User | undefined,
  userBrands: undefined as Brand[] | undefined,
  loading: true,
})

export type UserState = ReturnType<typeof state>

export const getters: GetterTree<UserState, UserState> = {
  selectedUser: (state) => state.selectedUser,
  userBrands: (state) => state.userBrands,
}

export const mutations: MutationTree<UserState> = {
  setLoading(state: UserState, loading: boolean) {
    state.loading = loading
  },
  setUser(state: UserState, user: User) {
    state.selectedUser = user
  },
  setBrands(state: UserState, brands: Brand[]) {
    state.userBrands = brands
  },
}

export const actions: ActionTree<UserState, UserState> = {
  async fetch({ commit }) {
    commit('setLoading', true)

    try {
      const user = (await axios.get(`${API_BASE_URL}/users`)).data as User
      commit('setUser', user)

      const count = Math.floor(Math.random() * 10)
      const brands = (
        await axios.get(`${API_BASE_URL}/appliances?size=${count}`)
      ).data as Brand[]
      commit('setBrands', count > 1 ? brands : [brands])
    } catch (error) {
      console.error(error)
    }

    commit('setLoading', false)
  },
}
