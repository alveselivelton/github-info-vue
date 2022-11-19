<script setup>
import { onMounted, ref } from "vue";
import { useFetch } from "../composables/fetch";

const username = ref("");
const inputRef = ref(null);

onMounted(() => inputRef.value.focus());

const { getAllDataUser } = useFetch();

const handleSubmit = () => {
  getAllDataUser(username.value);
  username.value = "";
  inputRef.value.focus();
};
</script>

<template>
  <header class="header-container">
    <h1>GitHub Info</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">Usuário: </label>
      <input
        type="text"
        id="username"
        v-model="username"
        ref="inputRef"
        required
      />
      <button type="submit">Buscar</button>
    </form>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
}

form {
  margin-top: 10px;
  padding-top: 10px;
}

form label {
  font-size: 20px;
}

form input {
  padding: 5px;
  text-align: left;
  outline: none;
}

form button {
  padding: 6px 10px;
  margin-left: 5px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: #2cc219;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
}

form button:hover {
  background-color: #1ca723;
}

@media (max-width: 348px) {
  .header_container {
    padding-bottom: 20px;
  }

  .header-container form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .header-container form button {
    width: 25%;
  }

  .header-container form input {
    width: 90%;
  }
}
</style>
