import React from 'react'
import { useState } from 'react';
import styles from './InputBox.module.css'
import Button from './Button';
const{pageContainer,container,searchox,textContainer,SearchBox,SearchBoxInput,buttonContainer} = styles;
export default function InputBox(props) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Update the searchbox state in the parent component
    props.onChange(e.target.value);
  };
  return (
    <div className={pageContainer}>
        <div className={container}>
        <div className={searchox}>
            <div className={textContainer}>Find the Real Meaning of Words</div>
            <div className={SearchBox}>
              <input type="text" value={inputValue} className={SearchBoxInput} onChange={handleInputChange} />
            </div>
            
        </div>
        <div className={buttonContainer}>
        <Button onClick={props.onButtonClick} content='Search'></Button>
        </div>
        </div>
    </div>
  )
}