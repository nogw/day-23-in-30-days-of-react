import React, { useEffect, useState } from 'react'
import GlobalStyle from './style'
import Repo from './components/Repo'
import SearchBar from './components/SearchBar'
import axios from 'axios'

function App() {
  const [gitRepos, setGitRepos] = useState([])
  const [search, setSearch] = useState('')

  const fetchRepos = async () => {
    const url = "https://api.github.com/users/nogw/repos"
    const response = await axios.get(url)
    const data = response.data
    await setGitRepos(data)
    console.log(data)
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  const allRepos = gitRepos.filter(repo => 
    repo.name.toLowerCase().includes(search.toLowerCase())  
  )

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <>
      <SearchBar type="text" placeholder="Search repository" onChange={e => handleChange(e)}/>
      <Repo filteredRepos={allRepos}/>
      <GlobalStyle />
    </>
  );
}

export default App;
