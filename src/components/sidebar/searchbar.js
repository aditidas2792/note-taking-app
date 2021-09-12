import { Fragment } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
/* 
Component to render the Search Bar to search through notes
filterByFields : [title, body] of Notes. 
More can be added to filter through other properties
options: Array of notes
*/
const SearchBar = (props) => {
  const options = props.options;
  const filterByFields = ['title', 'body'];
  return (
    <Typeahead
      className='typeahead-style'
      filterBy={filterByFields}
      id='searchbars'
      labelKey='title'
      options={options}
      placeholder='Filter by note title, text....'
      onChange={(selected) => {
        props.onChange(selected[0]);
      }}
      renderMenuItemChildren={(option) => (
        <div className='search-bar-dropdown'>
          <Fragment>
            {option.title}
            <div>
              <small>{option.body}</small>
            </div>
          </Fragment>
        </div>
      )}
    />
  );
};

export default SearchBar;
