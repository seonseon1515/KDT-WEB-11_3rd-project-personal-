import React from 'react'
import { useState } from 'react'
import { nativeFilterData3 } from '../../data/native_filter_data'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';
import rootReducer from '../../store';
import NativeFilterReducer from '../../store/NativeFilterReducer';
import { Discuss,Business, Opic,Toeic,News,Interview,Junior } from '../../store/NativeFilterReducer';
import MakeNativeArr from './MakeNativeArr';
import { nativeFilterData } from '../../data/native_filter_data';

console.log(nativeFilterData3)

interface rootState {
    btnDiscussSelect:boolean,
    btnBusinessSelect:boolean,
    btnOpicSelect:boolean,
    btnToeicSelect:boolean,
    btnNewsSelect:boolean,
    btnInterviewSelect:boolean,
    btnJuniorSelect:boolean,
    btnDisscussValue: string,
    btnBusinessValue: string,
    btnOpicValue: string,
    btnToeicValue: string,
    btnNewsValue: string,
    btnInterviewValue: string,
    btnJuniorValue: string,
  // 다른 리듀서의 상태도 정의할 수 있음
}


export const courseValueSet: Set<string> = new Set();
// const outCourseValueArray: string[] = [];
// let outCourseValue:string ='';


export default function NativeFilterTag() {
  const [btnLevelValue, setbtnLevelValue] = useState<string>('');
  const [courseValueStr,setCourseValueStr] = useState<string[]>([])

  // reducer
  const btnDiscussSelect = useSelector((state:any)=>{ return state.nativeFilter.btnDiscussSelect})
  const btnBusinessSelect = useSelector((state:any)=>{ return state.nativeFilter.btnBusinessSelect})
  const btnOpicSelect = useSelector((state:any)=>{ return state.nativeFilter.btnOpicSelect})
  const btnToeicSelect = useSelector((state:any)=>{ return state.nativeFilter.btnToeicSelect})
  const btnNewsSelect = useSelector((state:any)=>{ return state.nativeFilter.btnNewsSelect})
  const btnInterviewSelect = useSelector((state:any)=>{ return state.nativeFilter.btnInterviewSelect})
  const btnJuniorSelect = useSelector((state:any)=>{ return state.nativeFilter.btnJuniorSelect})
  const btnDisscussValue = useSelector((state:any)=>{
    return state.nativeFilter.btnDisscussValue
  })
  const btnBusinessValue = useSelector((state:any)=>{
    return state.nativeFilter.btnBusinessValue
  })
  const btnOpicValue = useSelector((state:any)=>{
    return state.nativeFilter.btnOpicValue
  })
  const btnToeicValue = useSelector((state:any)=>{
    return state.nativeFilter.btnToeicValue
  })
  const btnNewsValue = useSelector((state:any)=>{
    return state.nativeFilter.btnNewsValue
  })
  const btnInterviewValue = useSelector((state:any)=>{
    return state.nativeFilter.btnInterviewValue
  })
  const btnJuniorValue = useSelector((state:any)=>{
    return state.nativeFilter.btnJuniorValue
  })
  
// 필터 배열에 추가
// 토론
useEffect(() => {
  if (btnDiscussSelect) {
         courseValueSet.add(btnDisscussValue);
         setCourseValueStr(Array.from(courseValueSet))
         
  } else {
         courseValueSet.delete(btnDisscussValue);
         setCourseValueStr(Array.from(courseValueSet))
          
  }
  console.log('courseValueStr: ',courseValueStr);
         console.log('courseValueSet', courseValueSet);
}, [btnDiscussSelect, btnDisscussValue]);
// 비지니스 코스
useEffect(() => {
  if (btnBusinessSelect) {
    courseValueSet.add(btnBusinessValue);
    setCourseValueStr(Array.from(courseValueSet))
  } else {
    courseValueSet.delete(btnBusinessValue);
    setCourseValueStr(Array.from(courseValueSet))
  }
  console.log('courseValueStr: ',courseValueStr);
  console.log('courseValueSet', courseValueSet);
}, [btnBusinessSelect, btnBusinessValue]);
// 오픽 코스
useEffect(() => {
  if (btnOpicSelect) {
    courseValueSet.add(btnOpicValue);
    setCourseValueStr(Array.from(courseValueSet))
  } else {
    courseValueSet.delete(btnOpicValue);
    setCourseValueStr(Array.from(courseValueSet))
  }
  console.log('courseValueSet', courseValueSet);
  console.log('courseValueStr', courseValueStr);
}, [btnOpicSelect, btnOpicValue]);
// 토익 코스
useEffect(() => {
  if (btnToeicSelect) {
    courseValueSet.add(btnToeicValue);
    setCourseValueStr(Array.from(courseValueSet))
  } else {
    courseValueSet.delete(btnToeicValue);
    setCourseValueStr(Array.from(courseValueSet))
  }
  console.log('courseValueSet', courseValueSet);
  console.log('courseValueStr', courseValueStr);
}, [btnToeicSelect, btnDisscussValue]);
// 뉴스 코스
useEffect(() => {
  if (btnNewsSelect) {
    courseValueSet.add(btnNewsValue);
    setCourseValueStr(Array.from(courseValueSet))
  } else {
    courseValueSet.delete(btnNewsValue);
    setCourseValueStr(Array.from(courseValueSet))
  }
  console.log('courseValueSet', courseValueSet);
  console.log('courseValueStr', courseValueStr);
}, [btnNewsSelect, btnNewsValue]);
// 면접 코스
useEffect(() => {
  if (btnInterviewSelect) {
    courseValueSet.add(btnInterviewValue);
    setCourseValueStr(Array.from(courseValueSet))
  } else {
    courseValueSet.delete(btnInterviewValue);
    setCourseValueStr(Array.from(courseValueSet))
  }
  console.log('courseValueSet', courseValueSet);
  console.log('courseValueStr', courseValueStr);
}, [btnInterviewSelect, btnInterviewValue]);
// 주니어 코스
useEffect(() => {
  if (btnJuniorSelect) {
    courseValueSet.add(btnJuniorValue);
    setCourseValueStr(Array.from(courseValueSet))
  } else {
    courseValueSet.delete(btnJuniorValue);
    setCourseValueStr(Array.from(courseValueSet))
  }
  console.log('courseValueSet', courseValueSet);
  console.log('courseValueStr', courseValueStr);
}, [btnJuniorSelect, btnJuniorValue]);

  // 버튼 선택
  const btnLevelValueFunc = (e:React.MouseEvent<HTMLButtonElement>) => {
    setbtnLevelValue(e.currentTarget.value);
  }
  
  // btnLevelValue의 상태변화가 있을 때 이 코드를 실행해라
  useEffect(() => {
    console.log('btnLevelValue: ', btnLevelValue);
  }, [btnLevelValue]);

  const levelFilter = nativeFilterData3.filter((clickLevel)=>{
    return (clickLevel.level.includes(btnLevelValue))
 })
  // const btnCourseValueFunc = (e:React.MouseEvent<HTMLButtonElement>) => {
  //   setBtnCourseSelect(true); //
  //   setBtnCourseValue([e.currentTarget.value]);
  // setBtnCourseValue(e.value가 담긴 배열 상수 넣기)
  //   console.log('btnCourseValue: ',btnCourseValue)
  // }

  //버튼 클릭 시마다 값을 가져와 배열에 담는 함수
  // 눌렀던 버튼을 다시 클릭했을 때 true => false 가 되고 배열에 담긴 값이 다시 빠져나옴
  // 버튼 눌렀을 때 다시 false 되게 하는 함수

  // useState에 넣을 배열을 상수에 담기 
 
  
  // const selectBtn = (e:React.MouseEvent<HTMLButtonElement>) => {
  //   // setBtnCourseSelect(!btnCourseSelect)
  //   // 해당 버튼을 클릭할 때 만 true/ false 반환하게끔 하기
  //   // 문제: 서로 다른 버튼들끼리 영향을 받음 
  //   // 버튼마다 useState가 있어야함?
  //   // 문제: 중복 로직 코드가 많아짐
  //   setBtnCourseValue(e.currentTarget.value)
  //   // useState를 통해 변한 값은 전역에 영향을 미칠 것 같아서 이벤트 매개변수를 필요로 하는 함수는 다 넣어서 활용하고 싶은데 
  // }



  // btnCourseSelect ? courseValueSet.add(btnCourseValue) : outCourseValue = btnCourseValue
  //  값이 안넣어지는 이유? 
  
 
// click시 넣은 밸류를 다시 빼내어 주는 작업
// e.currentTarget.value 값을 가져올 수 없으면 textCon~~로 가져오기(같은 값)

const dispatch = useDispatch();
  return (
    <div>
      <div className="select level">
        <button value="누구나" onClick={(e)=>btnLevelValueFunc(e)}>누구나</button>
        <button value='초급' onClick={(e)=>btnLevelValueFunc(e)}>초급</button>
        <button value='중급' onClick={(e)=>btnLevelValueFunc(e)}>중급</button>
        <button value='고급' onClick={(e)=>btnLevelValueFunc(e)}>고급</button>
      </div>
      <div className="select course">
        {/* 어떤 함수를 onClick??? */}
        <button value="토론" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(Discuss())}>토론</button>
        <button value="비즈니스" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(Business())}>비즈니스</button>
        <button value="오픽" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(Opic())}>오픽</button>
        <button value="토익 스피킹" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(Toeic())}>토익 스피킹</button>
        <button value="뉴스/미디어" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(News())}>뉴스/미디어</button>
        <button value="면접대비" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(Interview())}>면접대비</button>
        <button value="주니어 영어" onClick={(e:React.MouseEvent<HTMLButtonElement>)=>dispatch(Junior())}>주니어영어</button>
      </div>
      {/* {
        levelFilter.map((obj, idx)=>{
          return(
            <ul>
              <li key={idx}>{obj.level}</li>
            </ul>
          )
        })
      } */}
      <MakeNativeArr courseValueStr={courseValueStr} btnLevelValue={btnLevelValue}/>
    </div>
  )
    }


  // const [eventParam, setEventPram] = useState<string>('');
  // const eventParamFunc = (e:React.MouseEvent<HTMLButtonElement>) => {
  //   setEventPram(e.currentTarget.value);
  // }
  // // 이벤트 타겟을 담는 함수 => 콘솔 찍었을 때 변해야 함
  // console.log('eventParam:' ,eventParam)


  