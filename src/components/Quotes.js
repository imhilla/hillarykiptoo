import React, { useState, useEffect } from 'react';

export default function Quotes() {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newData = data.slice(0, 99)
        console.log(newData)
        setData(newData)
        // console.log(data);
      });

  }, []);


  console.log(data)

  return (
    <div>Quotes</div>
  )
}