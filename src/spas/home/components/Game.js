import React, { Component } from 'react'
import '../styles.scss'

const Game = (props) => {
  return (
    <div className='container'>
      <div className='x-position-changer'>
        <div className='y-position-changer'>
          <svg onClick={props.handleTargetClick} className='spinner' xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 16 16">
            <path style={{animation: 'colorChange 1.5s infinite'}} fill='#65FF00'id='happy-face' d="m8 0c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m4.88 9.21c-.57 2.23-2.58 3.79-4.88 3.79s-4.31-1.56-4.88-3.79c-.1-.38.13-.76.51-.86.06-.02.12-.02.18-.02.32 0 .6.22.68.53.41 1.61 1.86 2.73 3.52 2.73s3.1-1.12 3.52-2.73c.08-.31.36-.53.68-.53.06 0 .12.001.18.02.18.05.34.16.43.33s.12.35.07.54"/>
            <circle fill='#000000' cx="6" cy="4" r="1"/>
            <circle fill='#000000' cx="10" cy="4" r="1"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Game;