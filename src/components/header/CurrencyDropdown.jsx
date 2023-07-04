import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { currencyChanged } from '../../store/settingsSlice'

const CurrencyDropdown = () => {
  const dispatch = useDispatch()
  const { currency } = useSelector( state => state.settings )
  const { r } = useSelector( state => state.strings )

  const handleClick = cur => {
    console.log( cur )
    dispatch( currencyChanged( cur ) )
  }

  const getCurrencyIcon = cur => {
    switch ( cur ) {
      case 'usd':
        return 'fas fa-dollar-sign'

      case 'iqd':
        return 'fas fa-dollar-sign'


      case 'eur':
        return 'fas fa-euro-sign'
      default:
        return ''
    }
  }

  return (
    // <div className='navbar-tool dropdown mx-2'>
    <div className='nav-item dropdown flex-fill'>
      <a
        className='nav-link dropdown-toggle'
        href='http://example.com'
        id='dropdown01'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        { r.currency } : <i className={ `${ getCurrencyIcon( currency ) } ml-l` } />
      </a>
      <div className='dropdown-menu' aria-labelledby='dropdown01'>
        <div
          className={ `dropdown-item ${ currency === 'usd' ? 'active' : '' }` }
          onClick={ () => handleClick( 'usd' ) }>
          <i className='fas fa-dollar-sign mr-2' /> US Dollar
        </div>
        <div
          className={ `dropdown-item ${ currency === 'usd' ? 'active' : '' }` }
          onClick={ () => handleClick( 'usd' ) }>
          <i className='fas fa-dollar-sign mr-2' /> دينار عراقي
        </div>

        {/* <div
          className={ `dropdown-item ${ currency === 'eur' ? 'active' : '' }` }
          onClick={ () => handleClick( 'eur' ) }>
          <i className='fas fa-euro-sign mr-2' /> Euro
        </div> */}
      </div>
    </div>
    // </div>
  )
}

export default CurrencyDropdown
