import React from "react";
import "tachyons";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="search robots"
      onChange={searchChange}
    />
  );
};

export default SearchBox;
