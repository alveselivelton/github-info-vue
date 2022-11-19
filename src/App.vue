<script setup>
import TheHeader from "./components/TheHeader.vue";
import CardData from "./components/CardData.vue";
import { useUserStore } from "./stores/user";
import { storeToRefs } from "pinia";

const store = useUserStore();
const { user } = storeToRefs(store);
</script>

<template>
  <div class="container">
    <TheHeader />
    <CardData v-if="user.name" />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  max-width: 600px;
}

@media (max-width: 630px) {
  .container {
    width: 90%;
  }
}
</style>
