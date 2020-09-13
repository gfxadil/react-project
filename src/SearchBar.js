import React from 'react';

const SearchBar = () => {
	return (
     <>
        <form action="" className="searchbar-style mt-5 mb-5">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search by keyword" />
                <span className="input-group-btn">
                    <button className="btn" type="submit">Search</button>
                </span>
            </div>
        </form>
     </>
    )
}

export default SearchBar;