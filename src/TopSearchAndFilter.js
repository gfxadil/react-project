import React from 'react';

class TopSearchAndFilter extends React.Component { 
    render() { 
	  return (
		<>
            <div className="row">
                <div className="col-md-8">
                    <form action="" className="searchbar-style">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search by keyword" />
                            <span className="input-group-btn">
                                <button className="btn" type="submit">Search</button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="form-group input-group">
                        <select className="form-control filter-bar">
                            <option value="">Filters</option>
                            <option value="select">Select1</option>
                            <option value="select">Select2</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
		</>
	  )
    }
}

export default TopSearchAndFilter;