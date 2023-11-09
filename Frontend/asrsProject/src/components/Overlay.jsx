import React from 'react'
import styles from "./Overlay.module.css"

const {overlay,overlay__background,overlay__container} = styles;
function Overlay(props) {
  return (
    <>
      {props.isOpen && (
        <div className={overlay}>
          <div className={overlay__background} onClick={props.onClose} />
          <div className={overlay__container}>
            {props.children}
          </div>
        </div>
      )}
    </>
  )
}

export default Overlay