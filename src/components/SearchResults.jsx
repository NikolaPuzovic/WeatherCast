const SearchResults = ({dataArray, onClick}) => {
    return (
        <ul
            className='search_results'
            role='list'
        >
            {dataArray && dataArray.map(data => <li key={data.id} onClick={onClick}>{data.name}, {data.country}</li>)}
        </ul>
    );
};

export default SearchResults;