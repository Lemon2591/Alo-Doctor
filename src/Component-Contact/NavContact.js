import React, { Component } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import {BiLogIn} from 'react-icons/bi';
import './NavContact.css'
import logo from '../assets/img/logo.png';
import '../assets/hover.css';
import {
    BrowserRouter as Router,
    Link,
    NavLink
  } from "react-router-dom";

class NavContact extends Component {
    render() {
        return (
            <>
             <div className='top-navbar'>
             <div className='top-bar'>
                <ul className='top-bar-list'>
                    <li className='top-bar-list-item1'>
                       
                        <a className='' href='tel:"0868158218' >
                             <i> <FiPhoneCall/> </i>
                            Hỗ trợ chuyên môn: +84 - 868 158 218</a>
                    </li>
                    <li className='top-bar-list-item2'>
                       
                        <a className='' href='tel:0868158218'>
                             <i> <FiPhoneCall/> </i>
                            Hỗ trợ kỹ thuật: +84 - 868 158 218</a>
                    </li>
                    <li className='top-bar-list-log-in'>
    
                         <a className='top-bar-list-log-in-item' href=''>
                            <i> <BiLogIn/></i>
                            Đăng Nhập   
                        </a>
                    </li>
                </ul>

            </div>


            <div className='nav-container'>
                <div className='nav-content'>
                    <div className='nav-logo'>
                        <a href='/'><img src={logo}></img></a>
                    </div>
                    <div className='nav-list-link'>
                        <ul className='list-item-all'>
                             <li className='nav-item active' ><NavLink className='nav-item-link active' to='/'>TRANG CHỦ</NavLink></li>
                             <li className='nav-item'><NavLink className='nav-item-link ' to='/Intro'>GIỚI THIỆU</NavLink></li>
                             <li className='nav-item'><NavLink className='nav-item-link' to='/Procedure'>QUY TRÌNH</NavLink></li>
                             <li className='nav-item'><NavLink className='nav-item-link' to='/UsingInstructions'>HƯỚNG DẪN SỬ DỤNG</NavLink></li>
                             <li className='nav-item active-bar'><NavLink className='nav-item-link' to='/Contact'>LIÊN HỆ</NavLink></li>
                        </ul>
                    </div>
                    <div className='nav-btn'>
                        <button className='nav-btn-click'>ĐĂNG KÝ NGAY</button>
                    </div>
                </div>
            </div>
             </div>


            </>
        );
    }
}

export default NavContact;


