import React from 'react'

function AdminBox(props) {
  return (
    <div className='rounded p-4' style={{background: props.bgcolor,minHeight: '180px'}}>
      <div className='grid grid-cols-2 h-full'>

      <div className='flex flex-col justify-between h-full'>
       <div style={{color: '#1A4651'}} className='font-serif text-2xl'>{props.text}</div>
        <button className='w-fit p-2 font-sans' style={{border: '1px solid',borderColor: '#1A4651', color: '#1A4651'}} onClick={props.onClick}>{props.buttonText}</button>
       </div>
        <div className='text-center text-slate-100 font-sans text-9xl'>{props.value}</div>
      </div>
        </div>
  )
}

export default AdminBox