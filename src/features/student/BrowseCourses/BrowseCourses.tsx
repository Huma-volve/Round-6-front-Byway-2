import React from 'react'
import Courses from './Courses';
import Count from './Count';
import Categories from './Categories';

export default function BrowseCourses() {
  return (
    <div>
      <Categories/>
      <Count/>
      <Courses/> 
    </div>
  )
}
