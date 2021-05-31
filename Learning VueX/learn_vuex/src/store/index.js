import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    counter: 0,
    colorCode: "blue",
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
      console.log("Random Number", randomNumber);
    },
    decreaseCounter(state) {
      state.counter--;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      console.log("increaseCounter (action)");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    decreaseCounter() {
      console.log("decreaseCounter (action)");
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
