<template>
  <div class="loading"></div>
</template>

<style scoped>
.loading {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 5px solid #a59f9f;
  border-top-color: #817777;
  margin: 0 auto;
  margin-bottom: 30px;
  animation: loading 2s linear infinite;
}

@keyframes loading {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
