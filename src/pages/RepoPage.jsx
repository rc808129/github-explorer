import { useParams } from "react-router-dom";
import RepoCard from "../components/RepoCard";
import SortFilter from "../components/SortFilter";
import { sortByForks, sortByStars, filterByLanguage } from "../utils/repoUtils";

import useUserRepos from "../hooks/useUserRepos";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const  RepoPage = ()=>{
  const { username } = useParams();
  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext);

  const { state, dispatch } = useUserRepos(username);

  function handleSortStars() {
    dispatch({
      type: "SET_REPOS",
      payload: sortByStars(state.repos),
    });
  }

  function handleSortForks() {
    dispatch({
      type: "SET_REPOS",
      payload: sortByForks(state.repos),
    });
  }

  function back(){
    navigate(-1)
  }

  function handleFilter(lang) {
  if (!lang) {
    dispatch({
      type: "SET_REPOS",
      payload: state.originalRepos, // ✅ reset
    });
    return;
  }

  dispatch({
    type: "SET_REPOS",
    payload: filterByLanguage(state.originalRepos, lang), // ✅ fix
  });
}

  return (
   <div className={`repo-page ${theme}`}>
      <div className="header">
      <button className="back-btn" onClick={back}>back</button>
      <h1 className="page-title">{username} Repositories </h1>
     </div>
      {state.loading && (
      <div className="status-container">
        <div className="loader"></div>
        <p className="status-text">Loading repositories...</p>
      </div>
    )}
     {state.error && (
      <div className="status-container">
        <span className="status-icon">⚠️</span>
        <p className="status-text error">{state.error}</p>
      </div>
    )}
      <div className="filter-container">
      <SortFilter
        onSortStars={handleSortStars}
        onSortForks={handleSortForks}
        onFilter={handleFilter}
      />
      </div>
      <div className="repos-grid">
      {state.repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
      </div>
      
      {!state.loading && !state.error && state.repos.length === 0 && (
      <div className="status-container">
        <span className="status-icon">📭</span>
        <p className="status-text">No repositories found</p>
      </div>
    )}

    </div>
  );
}

export default RepoPage;
