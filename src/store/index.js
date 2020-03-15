import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = "http://localhost:5000/api/v1";
// const api = '/api/v1/transactions'

export default new Vuex.Store({
  state: {
    transactions: [],
    loading: true
  },
  getters: {
    balance: state => {

      return state.transactions
        .map(transaction => transaction.amount)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    },
    income: state => {
      return state.transactions
        .map(transaction => transaction.amount)
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
    },
    expense: state => {
      return (state.transactions
        .map(transaction => transaction.amount)
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2)
    },
    transactions: state => {
      return state.transactions
    }
  },
  mutations: {
    GET_TRANSACTIONS(state, payload) {
      state.loading = false
      state.transactions = payload
    },
    DELETE_TRANSACTION(state, payload) {
      // let i = state.transactions.map(transaction => transaction.id).indexOf(payload)
      // state.transactions.splice(i, 1)
      state.transactions = state.transactions.filter(transaction => transaction._id !== payload)
    },
    ADD_TRANSACTION(state, payload) {
      // state.transactions.push(payload)
      state.transactions = [...state.transactions, payload]
    }
  },
  actions: {
    async getTransactions({ commit }) {
      await Vue.axios.get('transactions').then(result => {
        commit('GET_TRANSACTIONS', result.data.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    async deleteTransaction({ commit }, id) {
      await Vue.axios.delete(`transactions/${id}`).then(() => {
        commit('DELETE_TRANSACTION', id)
      }).catch(error => {
        throw new error(`API ${error}`)
      })
    },
    async addTransaction({ commit }, transaction) {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      await Vue.axios.post('transactions', transaction, config).then(result => {
        // console.log(result)
        commit('ADD_TRANSACTION', result.data.data)
      }).catch(error => {
        throw new error(`API ${error}`)
      })
    }
  },
  modules: {
  }
})
