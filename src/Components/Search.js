import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import React from 'react';
import SearchCrypto from './SearchCrypto';
//z-index
const Search = ({ search, setSearch }) => {
    return (
      <Form className='searchForm'>
        <InputGroup className='my-3'>
          <Form.Control
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Wyszukaj kryptowalute'
          />
          <button class='btn btn-outline-dark' type="button" onClick={() => SearchCrypto()}>Szukaj</button>
        </InputGroup>
      </Form>
    );
  };
  
  export default Search;