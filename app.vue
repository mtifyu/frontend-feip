<script setup>
import MyComponent from './components/MyComponent.vue';
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
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
</style>
