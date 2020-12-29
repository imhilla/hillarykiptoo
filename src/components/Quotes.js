/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

export default function Quotes(props) {
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

    function func() {
      setNum(randomNumber(0, 99))
    }
    setInterval(() => { func() }, 8000)


  }, []);
  console.log(props);
  const myquote = data.length !== 0 ? (
    data.map((element, index) => {
      if (number === index) {
        return (
          <div className="quotes fade-in">
            <blockquote className="otro-blockquote"
              style={
                {
                  color: `${props.currentColor.color}`,
                  backgroundColor: `${props.reverseColor.reverse}`,
                }
              }
            >
              {element.text}
              <span style={{ color: `${props.currentColor.color}`, backgroundColor: `${props.reverseColor.reverse}` }}>{element.author}</span>
            </blockquote>
          </div>
        )
      }
    })
  ) : (<Loader className="quotes" />);

  return (
    <div>{myquote}</div>
  )
}