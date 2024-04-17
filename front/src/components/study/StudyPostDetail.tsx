import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function StudyPostDetail() {
  const {studyPostId} = useParams<string>();
  const navigate = useNavigate();

  return (
    <div>
      <h1>studyPostId: {studyPostId}</h1>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
      <button onClick={()=>navigate('/study/write')}>글 작성</button>
      <button onClick={()=>navigate('/study/board')}>게시판 이동</button>
    </div>
  )
}
