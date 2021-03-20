<template>
  <header class="header">
      <h1>examplechat</h1>
      <button class="link-button" @click="redirect('https://github.com/PhoenixGames-Phoenix/examplechat')"><img src="../../assets/github.png" class="link-img"></button>
  </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        redirect(url) {
            window.location.href = url;
        }
    }
}
</script>

<style scoped>
    .header {
        display: inline-block;
        text-align: center;
        background-color: #2c3e50;
        color: #42b983;
        width: 100%;
    }
    .header h1 {
        display: inline;
        padding-right: 5px;
        font-size: 32px;
    }
    .link-button {
      font-size: 32px;
      border: none;
      outline: none;
      border-radius: 20px;
      background: none;
      color: white;
      display: inline;
    }
</style>