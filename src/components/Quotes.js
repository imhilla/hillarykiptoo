/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

export default function Quotes() {
  let [data, setData] = useState([]);
  let [number, setNum] = useState(1);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newData = data.slice(0, 99)
        setData(newData)
      });

    setNum(randomNumber(0, 99))

  }, []);

  const myquote = data.length !== 0 ? (
    data.map((element, index) => {
      if (number === index) {
        return (
          <div className="quotes">
            <h1>{element.text}</h1>
            <p>{element.author}</p>
          </div>
        )
      }
    })
  ) : (<div className="quotes"><h1>Loading..</h1></div>);

  return (
    <div>{myquote}</div>
  )
}