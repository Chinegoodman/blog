import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // modules:{
  //
  // },
  state:{
    // number:111,
    footerfixedstatus:false,
    homewraocontent_height:0,
  },
  getters:{
    getfooterfixedstatus(state){
      return state.footerfixedstatus
    },
    gethomewraocontent_height(state){
      return state.homewraocontent_height
    }
  },
  mutations:{
    // plussfun(state){
    //   state.number++
    // },
    muthomewraocontent_height(state,height){
      state.homewraocontent_height = height
    },
    mutfooterfixedchange(state,updata){
      state.footerfixedstatus = updata
    }
  },
  actions:{
    acplussfun(mutations){
      mutations.commit('plussfun')
    },
    acfooterfixedchange(mutations){
      mutations.commit('footerfixedchange')
    }
  }
})
