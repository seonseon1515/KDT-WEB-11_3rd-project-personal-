import { courseValueSet } from "./NativeFilterTag";
import { nativeFilterData3 } from "../../data/native_filter_data";
import { useEffect, useState } from "react";




interface Props {
  courseValueStr:string[];
  btnLevelValue:string;
  // 필터 값
}

export default function MakeNativeArr ({courseValueStr, btnLevelValue}:Props) {  
  // const [courseFilter, setCourseFilter] = useState<NativeFilterData4[]>([])
     // 중복 값 해결
  
  // const courseValueStr = Array.from(courseValueSet).join(',');
  // 배열이 동적인지?
  // include에 넣을 수 있는 형식으로 변경
  // const courseFilter = nativeFilterData3.filter((pushedValue)=>{
  //   for(let i=0;i<pushedValue.course.length;i++){
  //     pushedValue.course[i].includes(courseValueStr.join(','))}});
  //   }

  // const courseFilter = nativeFilterData3.filter((pushedValue) => {
  //   for (let i = 0; i < pushedValue.course.length; i++) {
  //     // 각 요소를 검사하여 조건을 만족하는지 확인
  //     for (let j = 0 ; j<pushedValue.course[i].length; j++)
  //     if (pushedValue.course[i][j].includes(courseValueStr.join(','))) {
  //       return true; // 조건을 만족하는 경우 true 반환
  //     }
  //   }
  //   return false; // 모든 요소를 검사했는데도 조건을 만족하는 요소가 없는 경우 false 반환
  // });
  
  const courseFilter = nativeFilterData3.filter((pushedValue) => {
       return pushedValue.course.includes(courseValueStr.join(','))});

      const courseLevelFilter = courseFilter.filter((pushedValue)=>{
        return pushedValue.level.includes(btnLevelValue)
      })
  
       // 토론이 포함된 배열을 만들고 싶음
       // 배열안의 배열 값에 토론이 포함되면 다 뜨도록 하고 싶음
       // 근데 필터링된 배열에 필터하고 싶은 값이 아니라 배열 안의 인덱스? 값이 들어가는 듯

      //  const courseFilter = nativeFilterData3.filter((pushedValue) => {
      //   // pushedValue.course가 배열이 아니면 필터링하지 않음
      //   if (Array.isArray(pushedValue.course)) {
      //     for (let i = 0; i < pushedValue.course.length; i++) {
      //       // 각 요소를 검사하여 조건을 만족하는지 확인
      //       for (let j = 0; j < pushedValue.course[i].length; j++) {
      //         if (pushedValue.course[i][j].includes(courseValueStr.join(''))) {
      //           return true; // 조건을 만족하는 경우 true 반환
      //         }
      //       }
      //     }
      //   }
      //   return false; // pushedValue.course가 배열이 아니거나 조건을 만족하는 요소가 없는 경우 false 반환
      // });
      
  
    useEffect(()=>{
      console.log('courseFilter: ', courseFilter);
    },[courseFilter])

    useEffect(()=>{
      console.log('courseValueStr: ', courseValueStr);
    },[courseValueStr]);
    
// 배열엔 값이 들어오는데 배열이 변화되었을 때 필터가 제대로 동작하지 않음
// => 상태 관리가 필요할 듯
    return(
      <div className="boardProfileWrap">
        {
          courseLevelFilter.map((value,idx)=>{
            return(
            <div className='profileComponent' key={value.id}>
              <div className='profileTopWrap'>
                <div className="native fullName">{value.full_name}</div>
                <div className="native email">{value.email}</div>
                <div className="native level">{value.level}</div>
                <div className="native course">{value.course}</div>
              </div>
              <div className="profileBottomWrap">
                <div className="tutor introText">
                  {`안녕하세요. ${value.full_name}입니다.`}
                </div>
              </div>
            </div>
          )
          })
        }
      </div>
    )
  }
  
// //  else if (btnCourseSelect===false)
//   export default function CourseArrFalse () {
//   // outCourseValueArray.push(btnCourseValue)
//   // const clickedOutCourseFilter = courseValueArray.filter((clickedOuttedValue)=>{
//   //   return (clickedOuttedValue.includes(clickedOuttedValue.join(',') !== outCourseValueArray.join(',')))})
//   const courseValueArr = Array.from(courseValueSet)
  
//   const clickedOutCourseFilter = courseValueArr.filter(trueArray=> trueArray !== outCourseValue)
//   console.log('clickedOutCourseFilter: ', clickedOutCourseFilter)
//   }

