import React from 'react';
import { Container } from './style';

function SearchBar( props ) {
  return (
    <Container>
      <input {...props}/>
    </Container>
  );
}

export default SearchBar;