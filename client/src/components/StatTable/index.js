// Creating the table format for the top 10 list

const StatTable = ({ data, title}) => {
    return(
      <div class="stat-table-result">
        <h3>{title}</h3>
        {Object.entries(data).map(([key, value]) => {
          return (
            <p>{key}: {value} times</p>
          );
        })}
      </div>
    )
};

export default StatTable;