import React from 'react'
import Step2 from '../../components/introduce/intro_step_detail_img/Step2'
import CourseMenu from '../../components/introduce/CourseMenu'
import CourseMenuMain from '../../components/introduce/CourseMenuMain'
import '../../../src/css/common_css/Variables.scss'
import MainInterview from '../../components/introduce/main_header/MainInterview'

const InterviewStyle = {
  border:'yellow solid 2px',
}



export default function Intro_Interview() {
  return (
    <div className='components_space'>
      <CourseMenu InterviewStyle={InterviewStyle} />
      <MainInterview />
      <Step2 />
    </div>
  )
}
