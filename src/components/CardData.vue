<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";

const store = useUserStore();
const { user, userRepositories } = storeToRefs(store);
</script>

<template>
  <main class="card-container">
    <section class="user">
      <img :src="user.avatar_url" :alt="user.name" />
      <div class="user-info">
        <h2>{{ user.name }}</h2>
        <p v-if="user.bio">{{ user.bio }}</p>
        <p v-else>O usuário não possui Bio</p>
      </div>
    </section>
    <section class="repositories">
      <h3>Repositórios Públicos</h3>
      <ul>
        <li v-for="repository in userRepositories" :key="repository.id">
          <a :href="repository.clone_url" target="_blanck">{{
            repository.name
          }}</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.card-container {
  width: 100%;
  padding-bottom: 20px;
}

.user {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px 25px;
  background-color: #817777;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.user img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}

.user-info h2,
.user-info p {
  color: #ece9e9;
}

.user-info h2 {
  font-size: 24px;
}

.user-info p {
  font-size: 20px;
  margin-top: 5px;
}

.repositories {
  padding-top: 20px;
  background-color: #a59f9f;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.repositories h3 {
  font-size: 24px;
  text-align: center;
  color: #242424;
}

.repositories ul {
  list-style: none;
  margin-top: 10px;
  padding: 10px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.repositories ul li a {
  font-size: 18px;
  text-decoration: none;
  color: #242424;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}

.repositories ul li a:hover {
  color: #000;
  border-bottom: 1px solid #000;
}

@media (max-width: 630px) {
  .user {
    flex-direction: column;
  }

  .user-info,
  .repositories ul li {
    padding: 0 10px;
    text-align: center;
  }
}
</style>
