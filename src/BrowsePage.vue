<template>
  <div class="browsePage">
    <div class="title">
      <h1>Anime</h1>
    </div>
    <div class="list">
      <SearchCard
        v-for="(card, index) in cards"
        :key="index"
        :nameCard="card.attributes.canonicalTitle"
        :imageCard="card.attributes.posterImage.original"
        :idCard="card.id"
        :ratingCard="card.attributes.ratingRank"
        :descriptionCard="card.attributes.synopsis"
      ></SearchCard>
    </div>
  </div>
</template>

<script>
import SearchCard from "./components/SearchCard";
export default {
  name: "BrowsePage",
  components: {
    SearchCard,
  },
  data: function () {
    return {};
  },
  created: function () {
    this.$store.dispatch("fetchCards");
  },
  computed: {
    cards: function () {
      return this.$store.state.mostPopular.cards;
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  border: 1px solid black;
  height: 2cm;
  background-color: rgba(150, 137, 137, 0.829);
}
.list {
  margin: 10px 20px 10px 20px;
  box-shadow: 0 0 27px rgb(231, 166, 142);
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px 5px 0px 5px;
}
</style>
