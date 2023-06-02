const Filter = ({filter,setFilter ,setSort}) => {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="completed">completas</option>
            <option value="incomplete">incompleta</option>
          
          </select>
        </div>
        <div>
            <p>Ordem alfabetica:</p>
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
