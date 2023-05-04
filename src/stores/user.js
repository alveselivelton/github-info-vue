import { ref } from "vue";
import { defineStore } from "pinia";

const api = "https://api.github.com/users/";

const headers = {
  method: "GET",
  headers: {
    Accept: "application/vnd.github+json",
  },
};

export const useUserStore = defineStore("user", () => {
  const user = ref([]);
  const userRepositories = ref([]);
  const loading = ref(false);

  const getUser = async (username) => {
    loading.value = true;
    try {
      const res = await fetch(`${api}${username}`, headers);
      const data = await res.json();
      user.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  const getUserRepositories = async (username) => {
    try {
      const res = await fetch(`${api}${username}/repos`, headers);
      const data = await res.json();
      userRepositories.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    userRepositories,
    loading,
    getUser,
    getUserRepositories,
  };
});
