import { tutor_data } from '../../data/tutor_data'
import SearchBar from './SearchBar'
import React, { useState } from 'react'
import SearchTutor from './SearchTutor'
import { nativeFilterData3 } from '../../data/native_filter_data'

interface Props {
  courseValueStr:string[];
  btnLevelValue:string;
  // 필터 값
}


export default function AllTutor({courseValueStr, btnLevelValue}:Props) {
  const [search,setSearch] = useState<string>('')
  const inputTutor = (value: any) => {
    setSearch(value);
  };
  const [searchResult, setSearchResult] = useState<boolean>(false)

  // 검색 결과 띄우기
  const handleSearch = () => {
    search.length > 0 ? setSearchResult(true) : alert('검색어를 입력하여 주세요.')
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key==='Enter'){
      handleSearch()
    }
  }
  
  const courseFilter = nativeFilterData3.filter((pushedValue) => {
    return pushedValue.course.includes(courseValueStr.join(','))});

   const courseLevelFilter = courseFilter.filter((pushedValue)=>{
     return pushedValue.level.includes(btnLevelValue)
   })

   const courseLevelFilter2 = courseFilter.filter((pushedValue)=>{
    return pushedValue.full_name.includes(btnLevelValue)
  })

  const lastFilter = courseFilter.filter((pushedValue)=>{
    return pushedValue.email.includes(btnLevelValue)
  })
  

  return (
    <div>
      <SearchBar search={search} inputTutor={inputTutor} handleSearch={handleSearch} handleEnter={handleEnter}></SearchBar>
       
      {searchResult || <div className='tutor_list'>
        { nativeFilterData3.map((tutor,idx)=>{
          return(
            <ul key={idx}>
              <li>{tutor.full_name}</li>
              <li>{tutor.id}</li>
            </ul>
          )
        })}
        </div>}
        
        {searchResult && <SearchTutor search={search} lastFilter={lastFilter} />}
    </div>
  )
      }      
