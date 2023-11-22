const SearchResults = ({dataArray, onClick}) => {
    return (
        <ul
            className='search_results'
            role='list'
        >
            {dataArray &&
                dataArray.map(data => {
                    return (
                        <li
                            key={data.id}
                            onClick={() => onClick(data.coords)}
                        >
                            {data.name}, {data.country}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default SearchResults;