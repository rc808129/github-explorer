# GitHub Explorer

GitHub Explorer is a React.js application where users can search GitHub users and explore their repositories. This project demonstrates API integration, routing, state management, debouncing, and theme switching.

 ## Project Overview

This application has two main pages:

Home Page (User Search)
Repo Page (User Repositories)

The user first searches for a GitHub username, and then clicks on a user to view their repositories.

 ## Features

 ### User Search
Users can search GitHub users by name or username. Matching users are displayed in a list.

 ### Repository Explorer
Clicking on a user shows their repositories on the next page.

Debounced Search
Search input uses debounce (500ms delay) to reduce unnecessary API calls.

State Management
useReducer is used to manage:

loading state
error state
empty state
data

Routing
React Router DOM is used for navigation between pages.

Sorting and Filtering
Repositories can be sorted by stars and forks, and filtered by programming language.

Theme Switching
Context API is used to implement light and dark theme.

 ## Tech Stack
React.js (Vite)
JavaScript (ES6+)
React Hooks (useState, useEffect, useReducer, useContext)
React Router DOM
Custom Hooks
GitHub REST API

```md
 ## Folder Structure
src/
 ├── components/
 │    ├── UserCard.jsx
 │    ├── RepoCard.jsx
 │    ├── SortFilter.jsx
 │
 ├── context/
 │    ├── ThemeContext.js
 │    ├── ThemeProvider.jsx
 │
 ├── hooks/
 │    ├── useDebounce.js
 │    ├── useGithubUsers.js
 │    ├── useUserRepos.js
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── RepoPage.jsx
 │
 ├── services/
 │    ├── githubApi.js
 │
 ├── utils/
 │    ├── repoUtils.js
 │
 ├── App.jsx
 ├── main.jsx
API Endpoints

Search Users
https://api.github.com/search/users?q={query}

Get User Repositories
https://api.github.com/users/{username}/repos

Application Flow
Home Page (Search)

In Home.jsx, a search input box is created. The user input is stored using useState.

useEffect is used to store the query in the URL using useSearchParams:

```js
useEffect(() => {
  if (query) {
    setSearchParams({ q: query });
  } else {
    setSearchParams({});
  }
}, [query]);

This helps to restore the search when the user comes back to the page.

Debounced search is implemented using a custom hook (useDebounce). When the user stops typing for 500ms, the API call is triggered.

The debouncedQuery is passed to the useGithubUsers hook, and the API call happens inside the hook.

Data is managed using useReducer:

loading
error
empty state
users data

Users are displayed using the UserCard component.

Navigation on user click:

function handleUserClick(username) {
  navigate(`/user/${username}`);
}
Repo Page (Repositories)

Route is defined as:

<Route path="/user/:username" element={<RepoPage />} />

Username is extracted from URL:

const { username } = useParams();

Data is fetched using a custom hook:

const { state, dispatch } = useUserRepos(username);

Inside the hook:

useEffect runs when username changes
API call is made
data is stored in state.repos and state.originalRepos

State contains:

loading
error
repos
originalRepos
Sorting and Filtering

Sorting functions:

sortByStars()
sortByForks()

Filtering:

filterByLanguage()

Example:

dispatch({
  type: "SET_REPOS",
  payload: sortByStars(state.repos),
});

Filtering is always applied on originalRepos to keep data correct.

Data Display

Repositories are displayed using map:

state.repos.map((repo) => (
  <RepoCard key={repo.id} repo={repo} />
))
Theme Implementation

Theme is managed using Context API.

ThemeProvider stores theme state:

light
dark

Theme is applied like this:

<div className={`page ${theme}`}>

This changes the UI background and text color.

Navigation

Back button:

navigate(-1)

User click navigation:

navigate(`/user/${username}`)
Installation and Setup
git clone https://github.com/your-username/github-explorer.git
cd github-explorer
npm install
npm run dev
Future Improvements
Add pagination or infinite scroll
Add bookmark feature
Improve UI/UX
Add authentication
Author

Developed by Raj Chaurasiya
