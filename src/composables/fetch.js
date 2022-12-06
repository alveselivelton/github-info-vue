import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";

export const useFetch = () => {
  const store = useUserStore();

  const { user, userRepositories, loading } = storeToRefs(store);

  const api = "https://api.github.com/users/";
  const headers = {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
    },
  };

  const getUser = async (username) => {
    try {
      const res = await fetch(`${api}${username}`, headers);
      const data = await res.json();
      user.value = data;
    } catch (error) {
      console.log(error);
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

  const getAllDataUser = async (username) => {
    loading.value = true;
    await getUserRepositories(username);
    await getUser(username);
    loading.value = false;
  };

  return { getAllDataUser };
};
