import React, { PropTypes } from 'react';

export default function SearchForm({searchTerm, searchType, onChange}) {
  return (
      <div className="row">
        <div className="col-lg-12">
          <div className="input-group">
            <span className="input-group-addon"><strong>Search:</strong></span>
            <input type="text"
                 id="searchTerm"
                 name="searchTerm"
                 className="form-control"
                 onChange={onChange}
                 value={searchTerm}
                 placeholder="write something on me..."/>

          </div>
        </div>
      </div>
  )
}

SearchForm.propTypes = {
  searchTerm:  PropTypes.string,
  searchType:  PropTypes.string,
  onChange:    PropTypes.func
}

