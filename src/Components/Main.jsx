import React from 'react'

import Select from './Select';
import ModButton from './ModButton';

import { toast } from 'react-toastify';


export default function Main() {
    
let [count,setCount]= useState(1)

    return (
        <div className='main-content'>
            <div className="container" >


                <div className='row p-4 justify-content-center'>

                    <ModButton count={count}  />
                    <ModButton />

                </div>



                <div className='row'>

                    <form className='row justify-content-center'>
                        <div className='row justify-content-center select-body'>


                        </div>

                        <div className='text-center mb-5'>
                            <button className='btn btn-outline-primary mt-4 mx-2'> Submit </button>
                            <button type='reset' className='btn btn-outline-warning mt-4 mx-2'> Reset </button>
                        </div>

                    </form >

                </div>

            </div>
            
        </div>
    )
}
