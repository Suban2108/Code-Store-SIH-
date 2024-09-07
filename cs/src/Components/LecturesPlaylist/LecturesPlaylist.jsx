import React from 'react'
import './LecturesPlaylist.css'
import ProgressCount from '../ProgressCount/ProgressCount'
import LectureContainer from '../LectureContainer/LectureContainer'

const Lectures_playlist = () => {
  return (
    <div className='lecturesplaylist'>
        <ProgressCount />
        <LectureContainer/>
        <LectureContainer/>
        <LectureContainer/>
        <LectureContainer/>
    </div>
  )
}

export default Lectures_playlist
