import Vue from 'vue'
import vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(vuex)
const store = new vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules
})
export default store

