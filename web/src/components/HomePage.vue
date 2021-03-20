<template>
  <div>
    <Header />
    <div class="title">
        <h1>examplechat</h1>
        <p class="sub">examplechat is an example chat app built using node.js, vue and flutter</p>
    </div>
    <button class="chatnow-button">Chat</button>
  </div>
</template>

<script>
import Header from './layouts/Header.vue';

export default {
  components: { Header },
  name: "HomePage",
}
</script>

<style scoped>
  .title {
    padding-top: 50px;
  }
  .title h1 {
    padding-bottom: 20px;
  }
  .sub {
    font-size: 20px;
  }
  .chatnow-button {
    color: white;
    background-image: linear-gradient(to right bottom, orange, red);
    outline: none;
    border: none;
    font-size: 24px;
    padding: 10px;
    border-radius: 12px;
  }
</style>