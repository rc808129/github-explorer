const BASE_URL = "https://api.github.com";


export const searchUsers = async (query) => {
  const res = await fetch(`${BASE_URL}/search/users?q=${query}`);
  const data = await res.json();
  return data.items;
};


export const getUserRepos = async (username) => {
  const res = await fetch(`${BASE_URL}/users/${username}/repos`);
  const data = await res.json();
  return data;
};