import React, { Component } from "react";
import Cards from "./card";

const CardList = props => {
  return props.object.map(user => {
    return <Cards key={user._id} id={user._id.toString(10)} name={user.name} />;
  });
};

export default CardList;
