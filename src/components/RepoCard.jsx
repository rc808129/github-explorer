const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card card">
      <div className="repo-header">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="repo-name"
        >
          {repo.name}
        </a>
        
        {repo.language && (
          <span className="language-badge, btn-fixed-white">{repo.language}</span>
        )}
      </div>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      <div className="repo-stats">
        <div className="stat">
          ⭐ <span>{repo.stargazers_count.toLocaleString()}</span>
        </div>
        <div className="stat">
          🍴 <span>{repo.forks_count.toLocaleString()}</span>
        </div>
        {repo.updated_at && (
          <div className="updated">
            Updated {new Date(repo.updated_at).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;