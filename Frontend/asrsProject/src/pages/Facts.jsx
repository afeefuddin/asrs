import React, { useEffect, useState } from 'react'
import styles from './Facts.module.css'
import ASRSlogo from "../assets/ASRSlogo.png"
import GeneralNav from '../components/GeneralNav';
import Loader from '../components/Loader';

const {card,cardTitle,cardContent,navBar,logoImage,title,innerElem,factCard,container,logo} = styles;

function Facts() {
    const[fom,setFom]  = useState('');
    const[facts,setFacts] = useState([]);
    const[errorFacts,setErrorFacts] = useState(false);
    async  function fetchApi(){
        if(fom!==''){
            return;
        }
        try {
            let res = await fetch(`http://localhost:8000/facts`,{
                headers : {
                    'n' : '10'
                }
            });
            if(res.status===400){
                console.log("Error")
                setErrorFacts(true);
                return;
            }
            else{
                res = await res.json();

                console.log(res)
                let fomIndex = Math.floor(Math.random()*Object.keys(res).length)

                const keys = Object.keys(res);

                setFom(res[fomIndex].fact)
                const factsArray = keys.map(key => res[key].fact);
                console.log(fom)
                setFacts(factsArray)
                
            }
        } 
        catch(error) {
            
        }
    }
    useEffect(()=>{
       fetchApi();
        
    },[]);

    useEffect(() => {
        const filterFact = facts.filter((obj)=>{
            const condition = obj !== fom;
    console.log(`Filtering ${obj} with condition: ${condition}`);
        return condition;
        })
                console.log(filterFact)
                setFacts(filterFact);
      }, [fom]);
    
      if(fom===''){
        return(<>
            <Loader />
        </>)
      }
  return (
    <>
    <div className='h-screen'>

   
    {/* <div className={navBar}>
        <div className={`flex items-center ml-8 ${logo}`}><img src={ASRSlogo} alt=""   className={logoImage} /></div>
        <div className={` text-5xl flex items-center justify-center ${title}`}>83% FACTS</div>
    </div> */}
    <GeneralNav heading='83% Facts' />


    <div className={container}>

    
    <div className='flex flex-col justify-center p-8  ml-8 mr-8 '>
        <div className={card}>
            <div className={cardTitle}>
            <div >Fact of the Moment</div>
            <div className='bg-white h-px'></div>
            </div>
            <div className={cardContent}><div className={innerElem}>{fom}</div></div>
        </div>
    </div>
    <div className='overflow-y-scroll p-8'>
    {facts.map((factObj, index) => (
        <div className={factCard}> 
            <div>
                <div className='text-purple-400'>Do you Know?</div>
                <div key={index} className='text-white text-lg'>{factObj}</div>

            </div>
        </div>
        ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default Facts