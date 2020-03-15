<template>
  <div>
    <h3>History</h3>
    <ul id="list" class="list">
      <Transaction 
        v-for="transaction in transactionList" 
        :key="transaction._id" 
        :amount="transaction.amount"
        :text="transaction.text"
        :id="transaction._id"
      />
    </ul>
  </div>
</template>

<script>
import Transaction from "@/components/Transaction";

export default {
  name: "TransactionList",
  components: {
    Transaction
  },
  created() {
    this.$store.dispatch('getTransactions')
  },
  computed: {
    transactionList() {
      return this.$store.getters.transactions;
    }
  }
};
</script>

<style>
</style>