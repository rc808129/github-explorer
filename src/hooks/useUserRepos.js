import { useReducer, useEffect } from "react";
import { getUserRepos } from "../services/githubApi";

const initialState = {
  repos: [],
  originalRepos: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };

    // ✅ only once (API data)
    case "SET_INITIAL_REPOS":
      return {
        ...state,
        loading: false,
        repos: action.payload,
        originalRepos: action.payload,
      };

    // ✅ for sort/filter
    case "SET_REPOS":
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

function useUserRepos(username) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!username) return;

    async function fetchRepos() {
      dispatch({ type: "LOADING" });

      try {
        const data = await getUserRepos(username);

        // ✅ IMPORTANT change
        dispatch({
          type: "SET_INITIAL_REPOS",
          payload: data,
        });
      } catch {
        dispatch({ type: "ERROR", payload: "Failed to fetch repos" });
      }
    }

    fetchRepos();
  }, [username]);

  return { state, dispatch };
}

export default useUserRepos;