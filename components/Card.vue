<template>
<div class="card">
    <p>Card content</p>
</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use '@/assets/scss/mixins' as *;
.card {
    @include box-style;
    width: 190px;  
}
</style>