<template>
  <div>
    <h4>Your Balance</h4>
    <h1 id="balance">${{ balance }}</h1>
  </div>
</template>

<script>
export default {
  name: "Balance",
  computed: {
    balance() {
      return this.$store.getters.balance
    }
  }
};
</script>

<style>
</style>