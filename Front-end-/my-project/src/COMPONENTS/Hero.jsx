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
      quantity: 1,
      img: imgfour
    },

    {
      id: 2,
      name: "Barbell",
      price: 500,
      ratings: 4.5,
      quantity: 1,
      img: imgtwo
    },

    {
      id: 3,
      name: "Lifting Belt",
      price: 600,
      ratings: 4.5,
      quantity: 1,
      img: imgthree
    },

    {
      id: 4,
      name: "Hand Wrist",
      price: 100,
      ratings: 4.5,
      quantity: 1,
      img: imgfive
    },

    {
      id: 5,
      name: "Gym Bag",
      price: 250,
      ratings: 4.5,
      quantity: 1,
      img: imgone
    },

    {
      id: 6,
      name: "Shaker",
      price: 50,
      ratings: 4.5,
      quantity: 1,
      img: imgsix
    }

  ])


  const increase = (id) => {

    const updatedProducts = products.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          quantity: item.quantity + 1
        }

      }

      return item

    })

    setProducts(updatedProducts)

  }


  const decrease = (id) => {

    const updatedProducts = products.map((item) => {

      if (item.id === id && item.quantity > 1) {

        return {
          ...item,
          quantity: item.quantity - 1
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

          <p>
            ₹ {object.price * object.quantity}
          </p>

          <p>
            ⭐ {object.ratings}
          </p>

          <div className='counter'>

            <button
              className='count-btn'
              onClick={() => decrease(object.id)}
            >
              -
            </button>

            <h2>{object.quantity}</h2>

            <button
              className='count-btn'
              onClick={() => increase(object.id)}
            >
              +
            </button>

          </div>

          <button className="btn">
            Buy Now
          </button>

        </div>

      ))}

    </div>

  )
}

export default Hero