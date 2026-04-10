import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { searchUsers } from "../services/githubApi";
import UserCard from "../components/UserCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGithubUsers from "../hooks/useGithubUsers";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { theme } = useContext(ThemeContext);

  
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const debouncedQuery = useDebounce(query, 500);

  const { state, dispatch } = useGithubUsers(debouncedQuery);
  const navigate = useNavigate();

 
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query]);

  async function handleSearch() {
    if (!query) return;

    dispatch({ type: "LOADING" });

    try {
      const data = await searchUsers(query);
      dispatch({ type: "SET_USERS", payload: data });
    } catch {
      dispatch({ type: "ERROR", payload: "Failed to fetch users" });
    }
  }

  function handleUserClick(username) {
    navigate(`/user/${username}`);
  }

  return (
    <div className={`page ${theme}`}>
      <h2 className="title">GitHub Explorer</h2>
      
       <div className="center-box">
      <div className="search-box">
    <span className="icon">🔍</span>

      <input
      type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search user..."
      />

      <button onClick={handleSearch}>Search</button>

      </div>
      </div>


      {state.loading && (<div className="status-container">
    <div className="loader"></div>
    <p className="status-text">Searching users...</p>
  </div>)}
     {state.error && (
  <div className="status-container">
    <span className="status-icon">⚠️</span>
    <p className="status-text error">{state.error}</p>
  </div>
)}
{!state.loading && query && state.users.length === 0 && (
  <div className="status-container">
    <span className="status-icon">🔍</span>
    <p className="status-text">No users found for "{query}"</p>
  </div>
)}
     <div className="users-grid">
      {state.users.map((user) => (
        <UserCard key={user.id} user={user} onClick={handleUserClick} />
      ))}
      </div>
    </div>
  );
};

export default Home;

