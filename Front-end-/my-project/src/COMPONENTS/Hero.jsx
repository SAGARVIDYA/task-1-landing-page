import React, { useState } from 'react'
import './card.css'

import imgone from '../assets/bag.jpg'
import imgtwo from '../assets/barbell.jpg'
import imgthree from '../assets/belt.jpg'
import imgfour from '../assets/dumbell.jpg'
import imgfive from '../assets/wrist.jpg'
import imgsix from '../assets/steel-pro-shaker.jpg'

function Hero() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dumbbell",
      price: 250,
      ratings: 4.5,
      img: imgfour,
      count: 0
    },

    {
      id: 2,
      name: "Barbell",
      price: 500,
      ratings: 4.5,
      img: imgtwo,
      count: 0
    },

    {
      id: 3,
      name: "Lifting belt",
      price: 600,
      ratings: 4.5,
      img: imgthree,
      count: 0
    },

    {
      id: 4,
      name: "Hand Wrist",
      price: 100,
      ratings: 4.5,
      img: imgfive,
      count: 0
    },

    {
      id: 5,
      name: "Gym Bag",
      price: 250,
      ratings: 4.5,
      img: imgone,
      count: 0
    },

    {
      id: 6,
      name: "Shaker",
      price: 50,
      ratings: 4.5,
      img: imgsix,
      count: 0
    },
  ])

  const increase = (id) => {

    const updatedProducts = products.map((item) => {

      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1
        }
      }

      return item
    })

    setProducts(updatedProducts)
  }

  const decrease = (id) => {

    const updatedProducts = products.map((item) => {

      if (item.id === id && item.count > 0) {
        return {
          ...item,
          count: item.count - 1
        }
      }

      return item
    })

    setProducts(updatedProducts)
  }

  return (
    <div className='container'>

      {products.map((object) => (

        <div className="card" key={object.id}>

          <img
            src={object.img}
            alt={object.name}
            className='card-img'
          />

          <h1>{object.name}</h1>

          <p>Price : ₹ {object.price}</p>

          <p>Total : ₹ {object.price * object.count}</p>

          <p>⭐ {object.ratings}</p>

          <h2>{object.count}</h2>

          <button
            className="btn"
            onClick={() => increase(object.id)}
          >
            +
          </button>

          <button
            className="btn"
            onClick={() => decrease(object.id)}
          >
            -
          </button>

        </div>

      ))}

    </div>
  )
}

export default Hero