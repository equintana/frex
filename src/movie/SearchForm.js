import React, { PropTypes } from 'react';

export default function SearchForm({searchTerm, searchType, onChange}) {
  return (
    <div>
      <form action="">
        <fieldset>
          <legend>Search</legend>
          <input name="searchTerm" id="searchTerm"
                 type="text"
                 onChange={onChange}
                 value={searchTerm}
                 placeholder="write something on me..."/>
            <div>
              <label>
                <input type="radio" onChange={onChange} name="searchType" value="name" checked={searchType === 'name'} />
                Name
              </label>
              <label>
                <input type="radio" onChange={onChange} name="searchType" value="description" checked={searchType === 'description'}/>
                Description
              </label>
            </div>
        </fieldset>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  searchType: PropTypes.string,
  onChange:   PropTypes.func
}
