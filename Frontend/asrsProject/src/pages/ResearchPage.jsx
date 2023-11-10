import React, { useState } from 'react'
import GeneralNav from '../components/GeneralNav'
import { useEffect } from 'react';
import Overlay from '../components/Overlay';

function ResearchPage() {
  const [papers, setPapers] = useState([{image:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title : " YYyyyf",date:"hflkads",_id:"2525525"},
  {image:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",title : " How to Be awesome",date:"hflkads"}]);
 
  const [fullPaper,setFullPaper] = useState({})
  const [isOpen,setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const getPapers = async() =>{
    try{
    let res = await fetch('https://asrs.vercel.app/researchpapers');
    res = await res.json();
    setPapers(res.papers);
    }
    catch(error){
      console.log(error);
    }
  }
  const handleClick = async(e)=>{
    const id = e.target.id;
    try{
      let res = await fetch(`https://asrs.vercel.app/researchpaper/${id}`);
      res = await res.json();
      setFullPaper(res.paper);
      toggleOverlay();
      console.log(res)
      }
      catch(error){
        console.log(error);
      }
  }

  useEffect(()=>{
    getPapers();
  },[])
  

  return (
    <div>
      <GeneralNav heading='Real Research' />

      <div className='flex flex-col items-center justify-center mt-8  sm:mr-8 sm:ml-8 lg:ml-16 lg:mr-16'>
        <div className='flex justify-start w-full text-lime-100 sm:text-xl lg:text-3xl'>Featured Papers</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-12' >
          {
            papers.map((obj) => (
              <div >
                <div className='flex flex-col'>
                  <div className='rounded-xl overflow-hidden'  onClick={handleClick}><img src={obj.image} alt={obj.image} id={obj._id} /></div>
                  <div>
                    <div className='text-white hover:text-blue-200 text-2xl font-second'>{obj.title}</div>
                    <div className='text-gray-500'>{obj.date}</div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
          <Overlay isOpen={isOpen} onClose={toggleOverlay}>
            <div className='overflow-y-scroll h-full'>


          
            <div className=' p-8 pt-4 overflow-hidden'>
              <div>
            <img className='lg:h-80 sm:h-64' src={fullPaper.image} alt="" />
              </div>
            <div className='text-white font-second text-center text-2xl font-bold mt-8'>{fullPaper.title}</div>
            <div className='flex flex-row w-full justify-center mt-4'>

            <div className='w-3/4 rounded p-2 pl-4 pr-4 text-white font-custom font-medium flex flex-row justify-between' style={{background:'rgb(0 179 224)'}}>
              <div>{fullPaper.date}</div>
              <div>{fullPaper.views} Views</div>
            </div>
            </div>
            <div style={{wordWrap:'break-word'}} className='break-normal text-white mt-8 text-lg '>
              {fullPaper.description}

            </div>
            </div>
            </div>
          </Overlay>
    </div>
  )
}

export default ResearchPage