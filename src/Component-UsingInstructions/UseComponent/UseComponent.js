
import {AiOutlineArrowRight} from 'react-icons/ai';
import React, {useState} from 'react';


function ShowUse () {


    return (
        <div className='UserContainer-Content-Item-Content-Text'>
                <p>Chọn 
                    <strong> Đăng Nhập</strong>
                        <i><AiOutlineArrowRight/></i>
                                                    Nhập số điện thoại di động                      
                </p> 

                <p>Nhập code verify 
                    <i><AiOutlineArrowRight/></i>
                        <strong> Đăng Nhập</strong>                 
                </p>
             </div> 
    )
}

export default ShowUse;