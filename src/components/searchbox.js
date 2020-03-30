import React, { Component } from "react";

const SearchBox = props => {
  return (
    <div>
      <input
        className="f3"
        onChange={props.onChange}
        placeholder="search friends"
      ></input>
    </div>
  );
};

export default SearchBox;
