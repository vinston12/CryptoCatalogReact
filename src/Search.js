import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import React from 'react';

const Search = ({ search, setSearch }) => {
    return (
      <Form>
        <InputGroup className='my-3'>
          <Form.Control
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Wyszukaj kryptowalute'
          />
        </InputGroup>
      </Form>
    );
  };
  
  export default Search;