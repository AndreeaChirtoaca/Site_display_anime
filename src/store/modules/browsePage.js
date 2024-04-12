import axios from "axios";
const browsePage = {
  state: {
    cards: null
  },
  mutations: {
    saveCards: function (state, data) {
      state.cards = data;
    }
  },
  actions: {
    fetchCards: function (context) {
      axios
        .get("https://kitsu.io/api/edge/anime?page[limit]=20")
        .then((response) => {
          //console.log(response.data.data);
          context.commit("saveCards", response.data.data);
        });
    }
  }
};
export default browsePage;
