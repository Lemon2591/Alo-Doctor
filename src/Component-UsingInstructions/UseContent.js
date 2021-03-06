                
import React, {useState} from 'react';
import PhotoUseContent from '../assets/img/google-pixel.png';
import './UseContent.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import UseComponent from './UseComponent/UseComponent';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {RiStethoscopeLine} from 'react-icons/ri';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';

 


function UseContent() {
    const [ UseLogin, setUseLogin] = useState(false)
    const [ Appointment, setappointment] = useState(false)
    const [ Creat, setCreat] = useState(false)
    const [ SelectInfo, setSelectInfo] = useState(false)
    const [ SelectBHYT, setSelectBHYT] = useState(false)
    const [ Confirm, setConfirm] = useState(false)
    const [ Pay, setPay] = useState(false)
    const [ ConfirmDKKB, setConfirmDKKB] = useState(false)

    // const EventToggleUsing = document.getElementById ('Using-login')

    // const EventSelectCalender = document.getElementById ('Select-Calender')
    // console.log(EventSelectCalender)


    function UsingFormat () {
        // EventToggleUsing.style.color = 'Red'
        // EventSelectCalender.style.display = 'none'
    }
//    function SelectCalender () {
//         EventSelectCalender.style.color = 'Red'
//         // EventToggleUsing.style.display = 'none'
//     }


    // EventToggleUsing.addEventListener('click',UsingFormat)
    
    // EventSelectCalender.addEventListener('click', SelectCalender)

        return (
            <div className='UseContainer'>
                <div className='UserContainer-Content'>
                    <div className='UserContainer-Content-Img'>
                        <img src={PhotoUseContent}></img>
                    </div>

                    <div  className='UserContainer-Content-List'>
                        <ul className='UserContainer-Content-List-Item'>
                            <li onClick={() =>setUseLogin(!UseLogin)} className='UserContainer-Content-Item' id='Using-login'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>1</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>????ng Nh???p t??i kho???n</div>
                                       {     
                                            UseLogin? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p>Ch???n 
                                                    <strong> ????ng Nh???p</strong>
                                                    <i><AiOutlineArrowRight/></i>
                                                                Nh???p s??? ??i???n tho???i di ?????ng                      
                                                    </p> 

                                                    <p>Nh???p code verify 
                                                    <i><AiOutlineArrowRight/></i>
                                                    <strong> ????ng Nh???p</strong>                 
                                                </p>


                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setappointment(!Appointment) }  className='UserContainer-Content-Item' id='Select-Calender'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>2</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Ch???n l???ch kh??m</div>
                                       {     
                                            Appointment? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p>T??? m??n h??nh ch??nh, b???nh nh??n ch???n</p>
                                                <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p>
                                                <p>Sau ???? ch???n d???ch v???</p>
                                                <p className='text-bold'>- ?????t kh??m theo ng??y</p>
                                                <p className='text-bold'>- ?????t kh??m theo b??c s??</p>

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setCreat(!Creat) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>3</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>T???o h??? s?? ph??m b???nh</div>
                                       {     
                                            Creat? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p>BN c?? th??? s??? d???ng S??? H??? S?? ???? c??, ho???c t???o m???i H??? S?? BN b???ng c??ch ch???n 1 trong 2 d???ch v???:</p>
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p> */}
                                                
                                                <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p>

                                                <p>*MSBN ???????c in tr??n phi???u kh??m b???nh, phi???u xu???t vi???n, phi???u thanh to??n ...</p>
                                                <p>vd:
                                                    <strong> N18-0060xx, B08-0060xx</strong>
                                                </p>

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setSelectInfo(!SelectInfo) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>4</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Ch???n th??ng tin kh??m</div>
                                       {     
                                            SelectInfo? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p className='text-decoration'>?????t kh??m theo b??c s??:</p>
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p> */}
                                                {/* <p>Sau ???? ch???n d???ch v???</p> */}
                                                <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p>

                                                <p className='text-decoration'>?????t kh??m theo ng??y:</p>
                                                <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p>

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setSelectBHYT(!SelectBHYT) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>5</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Ch???n BHYT</div>
                                       {     
                                            SelectBHYT? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p className='text-bold mg-10' >Ch???n h??nh th???c BHYT</p>
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p> */}
                                                <p>BV ??HYD ch??? ch???p nh???n 2 tr?????ng h???p c?? b???o hi???m:</p>
                                                <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p>

                                                <p className='italic'>C??c tr?????ng h???p c??n l???i, s??? kh??ng ???????c h?????ng BHYT t???i BV ??HYD</p>
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setConfirm(!Confirm) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>6</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>X??c nh???n th??ng tin</div>
                                       {     
                                            Confirm? (<div className='UserContainer-Content-Item-Content-Text'>
                                                {/* <p className='text-bold mg-10' >Ch???n h??nh th???c BHYT</p> */}
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p> */}
                                                <p>X??c nh???n l???i th??ng tin ???? ????ng k??</p>
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}

                                                <p className='italic'>??? b?????c n??y : BN c?? th??? ch???n " ????ng k?? th??m chuy??n khoa " , ????? ?????t kh??m th??m 1 chuy??n khoa kh??c .</p>
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setPay(!Pay) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>7</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Thanh To??n</div>
                                       {     
                                            Pay? (<div className='UserContainer-Content-Item-Content-Text'>
                                                {/* <p className='text-bold mg-10' >Ch???n h??nh th???c BHYT</p> */}
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p> */}
                                                <p>Ch???n 1 trong c??c h??nh th???c thanh to??n v?? th???c hi???n thanh to??n</p>
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}
                                                <p className='text-bold-small d-plex middle'>Thanh to??n b???ng th??? kh??m b???nh<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh to??n b???ng Th??? qu???c t??? Visa , Master ,JCB<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh to??n b???ng Th??? ATM n???i ?????a / Internet Banking<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold'>*?????i v???i ATM n???i ?????a & Th??? kh??m b???nh c???n ph???i k??ch ho???t internet banking ????? thanh to??n.</p>
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setConfirmDKKB(!ConfirmDKKB) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>8</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>X??c nh???n ??KKB th??nh c??ng</div>
                                       {     
                                            ConfirmDKKB? (<div className='UserContainer-Content-Item-Content-Text'>
                                                {/* <p className='text-bold mg-10' >Ch???n h??nh th???c BHYT</p> */}
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        ?????t l???ch kh??m
                                                    </span>
                                                   
                                                </p> */}
                                                <p>Sau khi thanh to??n th??nh c??ng, b???nh nh??n s??? nh???n ???????c phi???u kh??m b???nh v???i th??ng tin tin ???? ????ng k?? (Tr??n ph???n m???m, email & tin nh???n SMS)</p>
                                                <p>Tr?????ng h???p b??? tr??? ti???n nh??ng kh??ng nh???n ???????c phi???u kh??m b???nh, vui l??ng li??n h??? t???ng ????i:
                                                    <strong> 1900-2115</strong>
                                                </p>
                                                
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}
                                                {/* <p className='text-bold-small d-plex middle'>Thanh to??n b???ng th??? kh??m b???nh<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh to??n b???ng Th??? qu???c t??? Visa , Master ,JCB<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh to??n b???ng Th??? ATM n???i ?????a / Internet Banking<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold'>*?????i v???i ATM n???i ?????a & Th??? kh??m b???nh c???n ph???i k??ch ho???t internet banking ????? thanh to??n.</p> */}
                                                {/* <p className='text-bold'>- ???? t???ng kh??m, nh???p H??? S??</p>
                                                <p className='text-bold'>- Ch??a t???ng kh??m, t???o H??? S?? m???i</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>    
                           
            </div>
        );
    }


export default UseContent;