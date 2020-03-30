import React, { Component } from "react";

const Cards = props => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <img src={`https://robohash.org/${props.id} `} alt="" />
      <h1> {`Hello ${props.name} !`}</h1>
    </div>
  );
};

export default Cards;
