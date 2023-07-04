import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const SearchInput = () => {
  const { language } = useSelector( state => state.settings )
  const { r } = useSelector( state => state.strings )
  const history = useHistory()
  const [ keyword, setKeyword ] = useState( '' )

  const submitHandler = e => {
    e.preventDefault()
    if ( keyword.trim() ) {
      history.push( `/search/${ keyword }` )
    } else {
      history.push( '/' )
    }
  }

  return (
    <Form
      onSubmit={ submitHandler }
      // className='w-100'
      className='ml-5'
      style={ { width: '500px' } }

    >
      { ' ' }
      <InputGroup
      // size='lg'
      >
        <FormControl
          placeholder={ r.search_products }
          //  aria-label="Recipient's username"
          type='text'
          name='q'
          onChange={ e => setKeyword( e.target.value ) }
          dir={ language === 'arb' ? "rtl" : "ltr" }
        />
        <InputGroup.Append>
          <Button variant='warning' type='submit'>
            <i className='fa fa-search' aria-hidden='true' />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default SearchInput
