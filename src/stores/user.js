import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref([]);
  const userRepositories = ref([]);
  const loading = ref(false);

  return { user, userRepositories, loading };
});
