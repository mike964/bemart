import React from 'react'

const Rating = ( { rating, text, color } ) => {
  // console.log(rating)

  return (
    <div className='rating'>
      <span>
        <i
          style={ { color } }
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }></i>
      </span>
      <span>
        <i
          style={ { color } }
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }></i>
      </span>
      <span>
        <i
          style={ { color } }
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }></i>
      </span>
      <span>
        <i
          style={ { color } }
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }></i>
      </span>
      <span>
        <i
          style={ { color } }
          className={
            rating >= 4.7
              ? 'fas fa-star'
              : rating >= 4.4
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }></i>
      </span>
      <span>{ text && <span className="x" style={ { color: '#dbc589' } }>{ text }</span> }</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#fbdf23',
}

export default Rating
