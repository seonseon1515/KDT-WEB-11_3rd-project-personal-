import { tutor_data } from '../data/tutor_data'
import SearchBar from './SearchBar'
import React, { useState } from 'react'
import SearchTutor from './SearchTutor'

export default function AllTutor() {
  const [search,setSearch] = useState<string>('')
  const inputTutor = (e:React.ChangeEvent<HTMLInputElement>) => {setSearch(e.target.value)}
  const [searchResult, setSearchResult] = useState<boolean>(false)

  const handleSearch = () => {
    search.length > 0 ? setSearchResult(true) : alert('검색어를 입력하여 주세요.')
  }

  return (
    <div>
      <SearchBar search={search} inputTutor={inputTutor} handleSearch={handleSearch}></SearchBar>
       
      {searchResult || <div className='tutor_list'>
        { tutor_data.map((tutor,idx)=>{
          return(
            <ul key={idx}>
              <li>{tutor.full_name}</li>
              <li>{tutor.id}</li>
            </ul>
          )
        })}
        </div>}
        
        {searchResult && <SearchTutor search={search} />}
    </div>
  )
      }      
