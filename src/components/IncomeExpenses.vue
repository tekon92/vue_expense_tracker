<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">{{ income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">{{ expense }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'IncomeExpenses',
    computed: {
      income() {
        return this.$store.getters.income
      },
      expense() {
        return this.$store.getters.expense
      }
    }
};
</script>

<style>
</style>