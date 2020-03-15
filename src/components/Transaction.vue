<template>
  <li :class="plusMinus">
    {{ text }}
    <span>{{sign}}${{Math.abs(amount)}}</span>
    <button class="delete-btn" @click="deleteTrx(id)">x</button>
  </li>
</template>

<script>
export default {
  name: "Transaction",
  props: {
    id: String,
    amount: Number,
    text: String
  },
  computed: {
    sign() {
      return this.amount < 0 ? "-" : "+";
    },
    plusMinus() {
      return this.amount < 0 ? "minus" : "plus";
    }
  },
  methods: {
    deleteTrx(id) {
      // this.$store.commit("DELETE_TRANSACTION", id);
      this.$store.dispatch('deleteTransaction', id)
    }
  }
};
</script>

<style>
</style>