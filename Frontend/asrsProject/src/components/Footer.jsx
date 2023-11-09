import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center mt-16 mb-16'>
            <div className='flex flex-col'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='flex flex-col'>
                        <div className='text-2xl text-white'>Features</div>
                        <div className='flex flex-col text-white opacity-50 mt-2 gap-1'>

                            <div className='cursor-pointer'
                             onClick={() => {
                                navigate('/facts')
                            }} >83% Facts</div>
                            <div className='cursor-pointer'
                                onClick={() => {
                                    navigate('/realdictionary')
                                }}
                            >Real Dictionary</div>
                            <div className='cursor-pointer'
                                onClick={() => {
                                    navigate('/research/papers')
                                }}
                            >Research Papers</div>

                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-white text-2xl  font-second'>CEOs Socials</div>
                        <div className='flex flex-col text-white opacity-50 mt-2 gap-1'>

                            <div > <Link to="https://github.com/afeefuddin" target="_blank" rel="noopener noreferrer"> GITHUB </Link></div>
                            <div><Link to="https://twitter.com/Afeefuddin2004" target="_blank" rel="noopener noreferrer"> X </Link></div>
                            <div><Link to="https://afeefexplores.hashnode.dev/" target="_blank" rel="noopener noreferrer"> HASHNODE </Link></div>
                            <div><Link to="https://www.linkedin.com/in/afeef-uddin-2ab567247/" target="_blank" rel="noopener noreferrer"> LINKEDIN </Link></div>
                        </div>

                    </div>
                    <div className='mt-8 text-white'>
                        <div className='text-xl'>
                            The website is 83% Completed
                        </div>
                        <div className='opacity-50'>Donate us</div>
                    </div>
                </div>
                <div className='flex flex-row justify-center text-blue-300 mt-4'>Made with MERN and 💙</div>
            </div>
        </div>
    )
}

export default Footer