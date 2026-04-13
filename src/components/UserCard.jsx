function UserCard({ user, handleUserClick }) {
  return (
    <div  className="user-card card" onClick={() => handleUserClick(user.login)} style={{ cursor: "pointer" }}>
      <img src={user.avatar_url} alt="avatar" />
      <p>{user.login}</p>
    </div>
  );
}

export default UserCard;