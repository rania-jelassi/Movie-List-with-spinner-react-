import React from "react";

export default function Rating(props) {
  let arr = [];
  for (let i = 0; i < props.etoile; i++) {
    arr.push(<span onClick={() => props.onChange(i + 1)}> &#9733; </span>);
  }
  for (let i = props.etoile; i < 5; i++) {
    arr.push(<span onClick={() => props.onChange(i + 1)}> &#9734; </span>);
  }

  return <div className="head-etoile">{arr}</div>;
}
