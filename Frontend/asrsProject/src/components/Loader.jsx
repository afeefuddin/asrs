import React from 'react'
import styles from './Loader.module.css'
const {color,border,circle} = styles

function Loader() {
  return (
    <div><div class={color}></div>
    <div class={border}></div>
    <div class={circle}></div></div>
  )
}

export default Loader