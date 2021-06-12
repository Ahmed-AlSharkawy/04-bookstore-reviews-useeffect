import React, { useState } from 'react'
import booksList from './booksList'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [readAll, setReadAll] = useState(false)
  const [index, setIndex] = useState(0)
  const { img, title, author, info } = booksList[index]

  const randomBook = () => {
    let random = index
    while (random === index) {
      random = Math.floor(Math.random() * booksList.length)
    }
    setIndex(random)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={img} alt={title} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{title}</h4>
      <p className='job'>{author}</p>
      <p className='info'>
        {readAll ? info : `${info.substring(0, 200)}...`}
        <button className='readmore' onClick={() => setReadAll(!readAll)}>
          &nbsp;
          {readAll ? 'فقرة أصغر' : 'فقرة كاملة'}
        </button>
      </p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={() => {
            if (index > 0) setIndex(index - 1)
            else setIndex(booksList.length - 1)
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => {
            if (index < booksList.length - 1) setIndex(index + 1)
            else setIndex(0)
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomBook}>
        Random Review
      </button>
    </article>
  )
}

export default Review
