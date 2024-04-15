import React, { useEffect } from 'react'
import '../../css/common_css/Component.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addPostFunc } from '../../store/PostSlice';
import { NewPost } from '../../commonInterface';
import { Link } from 'react-router-dom';
import '../../css/study_css/StudyPostList.scss';
import { useMemo } from 'react';
import { deletePostFunc } from '../../store/PostSlice';



interface BgColor {
  backgroundColor:string
}

export default function StudyPostList() {
  // const [posts, setPosts] = useState<Posts[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state: {posts: {postList: NewPost[]}})=>state.posts.postList);
  

  const deletePost = (postId:NewPost) => {
    dispatch(deletePostFunc(postId))
    console.log('postId', postId);
    console.log('posts: ', posts);
  }
  // 첫번째 게시글 삭제 시 전부 삭제되는 오류?

  const [bgColor, setBgColor] = useState<BgColor>({backgroundColor:'#d7efc5'});

  const randomNum = useMemo(() => { return (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
}, []);


  // const bgColors:BgColor[] = 
  //   [{backgroundColor:'#d7efc5'},{backgroundColor:'hsl(189, 57%, 85%)'},{backgroundColor:'rgb(195, 198, 239)'},{backgroundColor:'cfb3f0'},{backgroundColor:'hsl(314, 67%, 82%)'},{backgroundColor:'hwb(350 70% 6%)'},{backgroundColor:'rgb(179, 240, 181)'}]
 
  const bgColors:BgColor[] = useMemo(()=>{
    return [{backgroundColor:'#d7efc5'},{backgroundColor:'hsl(189, 57%, 85%)'},{backgroundColor:'rgb(195, 198, 239)'},{backgroundColor:'cfb3f0'},{backgroundColor:'hsl(314, 67%, 82%)'},{backgroundColor:'hwb(350 70% 6%)'},{backgroundColor:'rgb(179, 240, 181)'}]
  },[]) 
  
  // useEffect(()=>{   
  //   const randomInt = randomNum(1, 7);
  //   setBgColor(bgColors[randomInt]);
  //   console.log('randomInt',randomInt);
  // },[]);
  // 의존성 배열 비워두어 최초 렌더링 시에만 실행되도록 설정

  // useMemo(()=>{ 
  //   const randomInt = randomNum(1, 7);
  //   setBgColor(bgColors[randomInt]);
  //   console.log('randomInt',randomInt);
  //   console.log(bgColor)
  // },[randomInt,bgColor]);

  

  return (
    <div className='componentLayout'>
      {/* 게시판 작성 페이지 */}
      <Link to='/study/write'><button className='writeBtn'>작성</button></Link>
      <div className='boardWrap'>
        {posts.map((post: NewPost, index) => (
          <div className='boardComponent' key={index}>
            <div className='componentTopWrap'>
              <div style={bgColor} className="post studyProfileImg">{post.author.charAt(0)}</div>
              <div className='post studyWriter'>{post.author} </div>
              <div className='post studyTime'>{post.timeStamp}</div>
            </div>
              <div className='overText studyTitle'>[{post.title}]</div>
              <div className='overText studyContents'>{post.content}</div>
              <button onClick={()=>deletePost(post)} className="cancelBtn">삭제</button>
          </div>
        ))}
      </div>
    </div>
  )
}
