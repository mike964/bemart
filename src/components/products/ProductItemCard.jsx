import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../Rating'
import { getProduct } from '../../utils'
import { useSelector } from 'react-redux'
import AddToCartBtn from './AddToCartBtn'



const ProductItemCard = ( {
  product: product_,
  grid,
  showRating,
  clickable,
} ) => {
  const product = getProduct( product_ )
  const { currency } = useSelector( state => state.settings )

  // handle show cart plus icon btn
  const [ showCartPlus, setShowCartPlus ] = useState( false )

  const getProductPrice = ( priceInDollar, selectedCurrency ) => {
    switch ( selectedCurrency ) {
      case 'usd':
        return priceInDollar
      case 'gbp':
        return ( priceInDollar * 0.83 ).toFixed( 2 )
      case 'eur':
        return ( priceInDollar * 0.95 ).toFixed( 2 )
      default:
        return ''
    }
  }

  const getCurrencySign = cur => {
    switch ( cur ) {
      case 'usd':
        return <span>$ </span>
      case 'gbp':
        return <span>&#8356; </span>
      case 'eur':
        return <span>&euro; </span>
      default:
        return ''
    }
  }

  return (
    <Card
      className='product-item-card m-1'
      onMouseEnter={ () => setShowCartPlus( true ) }
      onMouseLeave={ () => setShowCartPlus( false ) }>
      {/* <Card.Img src={product.image} variant='top' /> */ }
      {/* <span>{grid ? 'Grid' : 'List'}</span> */ }
      {/* <span className='badge badge-danger'>New</span> */ }

      <div className='row'>
        <div className={ grid ? 'col-12' : 'col-4' }>
          <div className='card-img'>
            { clickable ? (
              <Link to={ `/product/${ product._id }` }>
                <img
                  src={ product.mainImage.imageUrl || product.images[ 0 ] }
                  alt=''
                />
              </Link>
            ) : (
              <img
                src={ product.mainImage.imageUrl || product.images[ 0 ] }
                alt=''
              />
            ) }
          </div>
        </div>
        <div className='col'>
          <div className={ `card-body ${ grid ? '' : 'pt-3' }` }>
            <Link to={ `/product/${ product._id }` } className='product-title'>
              <div className='card-title' style={ { minHeight: '48px' } }>
                <strong>{ product.name }</strong>
              </div>
            </Link>

            <div className='card-text'>
              <Rating
                rating={ product.rating } //  4.7
                // number of reviews
                text={ `${ product.numReviews }` }
              />

              <div style={ { color: '#3a3457' } }>
                <span className="x">
                  { getCurrencySign( currency ) }
                  { getProductPrice( product.price, currency ) }
                </span>
                { showCartPlus && <AddToCartBtn productId={ product.asin } /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProductItemCard
