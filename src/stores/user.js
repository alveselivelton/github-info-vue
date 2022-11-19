import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  let user = ref([]);
  let userRepositories = ref([]);

  return { user, userRepositories };
});
