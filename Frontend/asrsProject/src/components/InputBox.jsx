import React from 'react'

import styles from './InputBox.module.css'
import Button from './Button';
const{pageContainer,container,searchox,textContainer,text} = styles;
export default function InputBox({onButtonClick}) {
  return (
    <div className={pageContainer}>
        <div className={container}>
        <div className={searchox}>
            <div className={textContainer}>Find the Real Meaning of Words</div>
            <input type={text} />
        </div>
        <Button onClick={onButtonClick} content='Search'></Button>
        </div>
    </div>
  )
}
