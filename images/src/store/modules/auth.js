import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

// "initial state"
const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  // "!!" easy way to turn something into a boolean
  // ex: !!null => false, ex: !!'asasd213' => true
  // notice the state object being passed into 'isLoggedIn' is
  // not the same 'state' defined above. could be some updated
  // state from a later point in time.
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', ''));

    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);

    router.push('/');
  },
  logout: ({ commit }) => {
    // dont directly call a mutation function instead use
    // the commit(calls a mutation func) function provided
    // by the vuex instance.
    // 2nd arg of commit is the value of token we need to set
    // when user logs out.
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
