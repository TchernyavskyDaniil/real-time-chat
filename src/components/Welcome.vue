<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text title-welcome">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" id="name" v-model="name">
          <p v-if="feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal btn-enter">Enter Chat!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: { name: this.name} })
      } else {
        this.feedback = 'You must write your nickname'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }
  
  .title-welcome {
    font-size: 3em;
  }
  
  .btn-enter {
    margin: 30px auto;
  }
</style>
