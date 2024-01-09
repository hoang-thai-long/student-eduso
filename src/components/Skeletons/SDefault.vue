<template>
    <div class="skeleton"></div>
</template>
<style lang="scss">

.skeleton{
    width: 100%;
    padding: 10px;
    animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>