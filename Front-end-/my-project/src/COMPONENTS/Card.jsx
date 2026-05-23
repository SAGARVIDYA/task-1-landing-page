import React, { useState } from 'react'
import Card from './Card.jsx'
function Card(props) {

  const [count, setCount] = useState(1)

  return (

    <div className="card">

      <img
        src={props.img}
        alt=""
        className='card-img'
      />

      <h1>{props.name}</h1>

      <p>₹ {props.price * count}</p>

      <p>⭐ {props.ratings}</p>

      <div className='counter'>

        <button
          className='count-btn'
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <h2>{count}</h2>

        <button
          className='count-btn'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

      </div>

      <button className="btn">
        Buy Now
      </button>

    </div>

  )
}

export default Card