function UserCard({ user, onClick }) {
  return (
    <div  className="user-card" onClick={() => onClick(user.login)} style={{ cursor: "pointer" }}>
      <img src={user.avatar_url} alt="avatar" />
      <p>{user.login}</p>
    </div>
  );
}

export default UserCard;