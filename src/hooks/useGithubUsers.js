import { useReducer, useEffect } from "react";
import { searchUsers } from "../services/githubApi";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {

    case "LOADING":
      return { ...state, loading: true, error: null };

    case "SET_USERS":
      return { ...state, loading: false, users: action.payload };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

function useGithubUsers(debouncedQuery) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!debouncedQuery) {
      dispatch({ type: "SET_USERS", payload: [] });
      return;
    }

    async function fetchUsers() {
      dispatch({ type: "LOADING" });

      try {
        const data = await searchUsers(debouncedQuery);
        dispatch({ type: "SET_USERS", payload: data });
      } catch {
        dispatch({ type: "ERROR", payload: "Failed to fetch users" });
      }
    }

    fetchUsers();
  }, [debouncedQuery]);

  return { state};
}

export default useGithubUsers;
