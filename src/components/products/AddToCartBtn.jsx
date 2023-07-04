import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart/cartSlice'

const Spinner = () => (
  <div className='spinner-border spinner-border-sm' role='status' style={ { color: '#7fe34d' } }>
    <span className='sr-only'>Loading...</span>
  </div>
)

const AddToCartBtn = ( { productId } ) => {
  const dispatch = useDispatch()

  const [ showSpinner, setShowSpinner ] = useState( false );
  const [ showCheck, setShowCheck ] = useState( false );

  const handleClick = () => {
    // show spinner for .5s 
    // then show done mark

    setShowSpinner( true )
    setTimeout( () => {
      setShowSpinner( false )
      setShowCheck( true )
    }, 500 );
    dispatch( addToCart( productId ) )
  }
  return (
    <div className='float-right'>
      { showSpinner && <Spinner /> }
      { showCheck && <span style={ { color: '#138813', fontSize: '1.2rem' } } > <i className="fas fa-check-circle" /></span> }
      { !showSpinner && !showCheck && <i
        className='fas fa-cart-plus cart-plus-icon'
        onClick={ handleClick }
      /> }
    </div>
  )
}

export default AddToCartBtn
