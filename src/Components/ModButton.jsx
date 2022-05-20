import React,{useState} from 'react'

export default function Select({count,setCount}) {
 let addCount = (count)=>{
 if (count !== 26){
     setCount(count+1)
 }
 }
 let minusCount = (count)=>{
    if (count !== 1){
        setCount(count-1)
    }
    }
    return (
        <div className='col-lg-4 col-12'>
            <div className='card row justify-content-center align-items-center p-3 m-3 rounded-4 shadow-sm'>

                <div className='col-12 fw-bold text-center mb-3'> {"NAME"} </div>
                <div className='row justify-content-center text-center'>

                    <button className='col-lg-4 col-12 mod-btn' onClick={() => minusCount(count)}> <i className='fas fa-circle-minus fs-3'></i> </button>
                    <span className='col-lg-4 col-12 state-count'>{count}</span>
                    <button className='col-lg-4 col-12  mod-btn' onClick={() => addCount(count) }> <i className='fas fa-circle-plus fs-3'></i> </button>

                </div>

            </div>
        </div>
    )
}
