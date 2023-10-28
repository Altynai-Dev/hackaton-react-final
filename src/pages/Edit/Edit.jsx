import React from 'react'
import { useSelector } from 'react-redux'

const Edit = () => {
    const {oneVideo} = useSelector((state)=>state.videos);
    console.log(oneVideo)
  return (
    <div>Edit</div>
  )
}

export default Edit