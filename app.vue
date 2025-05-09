<script setup>
import MyComponent from './components/MyComponent.vue';
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import Last_task from './components/Last_task.vue';
</script>
<template>
  <div>
    <Header />
    <Banner />
    <MyComponent />
    <div class="cards">
      <Card />
      <Card />
    </div>
    <Last_task />
    <Footer />
  </div>
</template>

<style lang="scss">
.cards{
  display: flex;
  flex-direction: row;
}
:root {
   --font-title: 'Montserrat', sans-serif;
   --font-text: 'Open Sans', sans-serif;

   font-family: var(--font-text);
}
.container {
    display: flex;
    flex-direction: row;
    gap: 5px;
}
.left {
    background-color: #e9edc9;
    width: 500px;
    height: 636px;
    display: flex;
    align-items: center;
}
.middle {
    background-color: #fefae0;
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.middle img {
    width: 200px;
}
.right {
    background-color: #faedcd;
    width: 500px;
    display: flex;
    align-items: center;
}
</style>
