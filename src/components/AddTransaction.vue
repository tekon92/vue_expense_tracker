<template>
  <div>
    <h3>Add new transaction</h3>
    <form id="form" v-on:submit.prevent="onSubmit">
      <div class="form-control">
        <label for="text">Text</label>
        <input type="text" v-model="text" id="text" placeholder="Enter text..." />
      </div>
      <div class="form-control">
        <label for="amount">
          Amount
          <br />(negative - expense, positive - income)
        </label>
        <input type="number" v-model="amount" id="amount" placeholder="Enter amount..." />
      </div>
      <button class="btn">Add transaction</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTransaction",
  data() {
    return {
      id: 0,
      text: "",
      amount: 0
    };
  },
  methods: {
    onSubmit() {
      // e.preventDefault(e);
      if (this.text.trim() === "" || this.amount == 0) {
        alert("please add a text and amount");
      } else {
        const newTransaction = {
          id: Math.floor(Math.random() * 1000000000),
          text: this.text,
          amount: +this.amount
        }
        // console.log(newTransaction)
        this.$store.dispatch("addTransaction", newTransaction);

        this.text = ''
        this.amount = 0
      }
    }
  }
};
</script>

<style>
</style>