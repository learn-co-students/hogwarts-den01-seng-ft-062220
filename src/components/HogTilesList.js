import React from 'react'
import HogTile from './HogTile'



export default function HogTileList(hogs){
  // console.log(hogs)
  return (
    <div className='ui three stackable cards'>
      {hogs.map(hog => {
        console.log(hog)
        return <HogTile key={hog.name} hog={hog} />
      })}
    </div>
  )
}