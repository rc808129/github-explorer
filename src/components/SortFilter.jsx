const  SortFilter = ({ onSortStars, onSortForks, onFilter })=> {
  return (
    <div className="sort-filter">
      <div className="sort-buttons">
      <button onClick={onSortStars} className="sort-btn buttons">Sort by Stars ⭐</button>
      <button onClick={onSortForks} className="sort-btn buttons">Sort by Forks 🍴</button>
    </div>
    <div className="filter-select buttons">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All languages</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="C++">C++</option>
        <option value="Java">Java</option>
          <option value="TypeScript">TypeScript</option>
      </select>
      </div>
    </div>
  );
}

export default SortFilter;