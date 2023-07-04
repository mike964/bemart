import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { languageChanged } from '../../store/settingsSlice'
import { setNewLanguage } from '../../store/stringsSlice'

const LanguageDropdown = () => {
  const dispatch = useDispatch()
  const { language } = useSelector( state => state.settings )

  const handleClick = lang => {
    // console.log(cur)
    dispatch( languageChanged( lang ) )
    dispatch( setNewLanguage( lang ) )
  }

  return (
    <div className='dropdown mx-3'>
      <a
        className='dropdown-toggle'
        href='http://example.com'
        id='dropdown01'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
        style={ { color: 'white', lineHeight: '2.875rem' } }>
        { language === 'eng' ? <span>English</span> : <span>العربية</span> }
      </a>

      <div className='dropdown-menu' aria-labelledby='dropdown01'>
        <div className={ `dropdown-item` } onClick={ () => handleClick( 'eng' ) }>
          <img
            alt='flag'
            src={ process.env.PUBLIC_URL + '/assets/img/uk-flag.png' }
            style={ { height: '18px' } }
            className='mr-2'
          />

          <span style={ { fontSize: '1.1rem' } }>English</span>
        </div>
        <div className={ `dropdown-item` } onClick={ () => handleClick( 'arb' ) }>
          <img
            alt='flag'
            src={ process.env.PUBLIC_URL + '/assets/img/uae-flag.png' }
            style={ { height: '18px' } }
            className='mr-2'
          />{ ' ' }
          العربية
        </div>
      </div>
    </div>
  )
}

export default LanguageDropdown
