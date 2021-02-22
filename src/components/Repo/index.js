import React from 'react';

import { Ball, Container, Title, Language, Item, Book } from './style';

function Repo( {filteredRepos} ) {
  return (
    <Container>
      {filteredRepos.map(repo => {
        return <Item key={repo.id}>
        <Title href={repo.html_url}><Book/> {repo.name}</Title>
          <Language><Ball className={repo.language}/>{repo.language}</Language>
        </Item>
      })}
    </Container>
  );
}

export default Repo;