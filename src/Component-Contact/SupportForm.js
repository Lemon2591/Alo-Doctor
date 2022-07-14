import React, { Component } from 'react'
import './SuportForm.css'
import PhotoFormPlus from '../assets/img/hospital.svg'
import PhotoFormCall from '../assets/img/phone-receiver.svg'
import PhotoFormFace from '../assets/img/facebook-circular.svg'


class SupportForm extends Component {
  render() {
    return (
      <>
      <div className='SuportForm-Container'>
        <div className='SuportForm-Content'>
            <span>Hỗ Trợ</span>
            <h2>Các hình thức hỗ trợ từ INFI-HEALTH Đặt Khám</h2>
            <p>Bệnh nhân chọn các hình thức bên dưới</p>
            <div className='form-sp-container d-lex'>
                <div className='item-sp '>
                    <a>
                        <img src={PhotoFormPlus}></img>  
                        <p>Hỗ trợ chuyên môn</p>
                        <a href=''>1900-7178</a>
                    </a>
                </div>

                <div className='item-sp '>
                    <a>
                        <img src={PhotoFormCall}></img>  
                        <p>Hỗ trợ kỹ thuật</p>
                        <a href=''>1900-7178</a>
                    </a>
                </div>

                <div className='item-sp '>
                    <a>
                        <img src={PhotoFormFace}></img>  
                        <p>Fapage</p>
                        <a href=''>Bấm vào đây</a>
                    </a>
                </div>

                <div className='item-sp '>
                    <a>
                        <img src={PhotoFormPlus}></img>  
                        <p>Hỗ trợ Facebook</p>
                        <a href=''>Bấm vào đây</a>
                    </a>
                </div>

                <div className='item-sp '>
                    <a>
                        <img src={PhotoFormPlus}></img>  
                        <p>Hỗ trợ zalo</p>
                        <a href=''>Bấm vào đây</a>
                    </a>
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default SupportForm