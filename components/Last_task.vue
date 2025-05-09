<template>
    <div class="container">
      <div class="left">
        <h1>Список</h1>
        <ul>
          <li>Первый элемент</li>
          <li>Второй элемент</li>
          <li>Третий элемент</li>
        </ul>
      </div>
  
      <div class="middle">
        <img src="/pictures/cat.jpg" alt="cat">
        <h1 class="title">Заголовок</h1>
        <p>{{ currentText }}</p>
        <button @click="changeText">Кнопка, меняющая текст сверху</button>
      </div>
  
      <div class="right">
        <p>Текст для правого блока</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const texts = ["Первый текст", "Второй текст", "Третий текст"]
  const index = ref(0)
  const currentText = ref(texts[index.value])
  
  function changeText() {
    index.value = (index.value + 1) % texts.length
    currentText.value = texts[index.value]
  }
  </script>
  
  <style scoped>
  /* Твой CSS */
  </style>
  