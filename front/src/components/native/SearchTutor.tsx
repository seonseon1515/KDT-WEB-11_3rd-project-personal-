import React from 'react'
import { tutor_data } from '../../data/tutor_data'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { nativeFilterData3 } from '../../data/native_filter_data'

interface Props {
  search: string;
  lastFilter:{ level: string; course: string; id: number; email: string; full_name: string; }[];
}

// name 검색 해당하는 이름이 포함된 결과 출력
// 검색창 옆에 select option을 고르면 그 기준으로 검색이 가능하게 하는 코드
// 모든 검색 결과가 다 나오는 코드
// 스터디 그룹 모집에서 검색기능
export default function SearchTutor({search, lastFilter}:Props) {
  const filterTutor:any[] = lastFilter.filter((input)=>{ 
    return(
        input.full_name.toLowerCase().includes(search.toLowerCase())
        || input.level.toLowerCase().includes(search.toLowerCase())
        || input.course.toLowerCase().includes(search.toLowerCase())
        || input.email.toLowerCase().includes(search.toLowerCase())
    )
        })
      
    
    
    
  
    

  const {profile} = useParams();
  
  return (<div>
     { filterTutor.length === 0 ?
          <p>검색된 결과가 없습니다.</p>:
      filterTutor.map((filterTutor, idx)=>{
        return(
          <ul key={idx}>
            <li><Link to='/native:profile'>{filterTutor.full_name}</Link></li>
          </ul>
        )
      })
     }
    </div>
  )
}
