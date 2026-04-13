
export const sortByStars = (repos) => {
  return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
};


export const sortByForks = (repos) => {
  return [...repos].sort((a, b) => b.forks_count - a.forks_count);
};


export const filterByLanguage = (repos, language) => {
  return repos.filter(
    (repo) =>
      repo.language &&
      repo.language.toLowerCase() === language.toLowerCase()
  );
};

