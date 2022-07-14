import React, { Component } from 'react'
import './SliderContact.css'
import {FaHospitalAlt} from 'react-icons/fa'
import {FaStethoscope} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import SilderContactPhoto from '../assets/img/slider-contact.jpeg'


      class SliderContact extends Component {
        render() {
          return (
          <>
            <div className='Slider-carol'>
              <div className='Slider-carol-content'>
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src={SilderContactPhoto} alt="First slide"/>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className='Slider-Contact-Container'>
                <div className='Slider-Contact-Container-Content'>
                      <div className='Slider-Contact-Container-img'>
                          <div className='Slider-Contact-Container-title'>
                            <p>THÔNG TIN CHI TIẾT</p>
                          </div>

                          <div className='Slider-Contact-Container-title-sp'>
                            <p>ĐỊA CHỈ KHÁM CHỮA BỆNH</p>
                          </div>
                          <div className='Slider-Contact-Container-info'>
                              <div className='Slider-Contact-Container-info-icon'>
                                <i><FaHospitalAlt/></i>
                              </div>
                              <div className='Slider-Contact-Container-info-content'>
                                    <p>INFI-HEALTH®</p>
                                    <a href=''>422 Vĩnh Hưng, Thanh Trì, Hoàng Mai, Hà Nội</a>
                              </div>
                          </div>

                          <div className='Slider-Contact-Container-info'>
                              <div className='Slider-Contact-Container-info-icon'>
                                <i><FaStethoscope/></i>
                              </div>
                              <div className='Slider-Contact-Container-info-content'>
                                    <p>TƯ VẤN CHUYÊN MÔN</p>
                                    <a href='tel:1900-7178'>1900-7178</a>
                              </div>
                          </div>
                          <div className='Slider-Contact-Container-info'>
                              <div className='Slider-Contact-Container-info-icon'>
                                <i><AiFillSetting/></i>
                              </div>
                              <div className='Slider-Contact-Container-info-content'>
                                    <p>TƯ VẤN KỸ THUẬT</p>
                                    <a href='tel:1900-2115'>1900-2115</a>
                              </div>
                          </div>
                      </div>
                      <div className='Slider-Contact-Container-form'>
                          <div className='Slider-Contact-Container-title'>
                            <p>LIÊN HỆ</p>
                          </div>

                          <div className='Slider-Contact-Container-title-sp'>
                            <p>GIẢI ĐÁP THẮC MẮC, GÓP Ý VỀ DỊCH VỤ</p>
                          </div>
                        <form>
                          <div class="row mgb">
                            <div class="col ">
                            <label for="exampleFormControlSelect1">Họ và tên</label>
                              <input type="text" class="form-control" placeholder="Họ và tên"/>
                            </div>
                            <div class="col">
                            <label for="exampleFormControlSelect1">Số điện thoại</label>
                              <input type="text" class="form-control" placeholder="Số điện thoại"/>
                            </div>
                          </div>
                          <div class="row mgb">
                            <div class="col">
                            <label for="exampleFormControlSelect1">Địa chỉ email</label>
                              <input type="text" class="form-control" placeholder="Địa chỉ email"/>
                            </div>
                            <div class="form-group col" >
                              <label for="exampleFormControlSelect1">Chọn vấn đề của bạn</label>
                              {/* <select class="form-control form-format" id="exampleFormControlSelect1" name='type' >
                                <option>Nhấn để chọn</option>
                                <option value='Vấn đề chuyên môn'>Vấn đề chuyên môn</option>
                                <option value='Vấn đề kỹ thuật'>Vấn đề kỹ thuật</option>
                                <option value='Vấn đề khác'>Vấn đề khác</option>                       
                              </select> */}

                                <select id="inputState" class="form-control custom-select">
                                  <option>Nhấn để chọn</option>
                                  <option value='Vấn đề chuyên môn'>Vấn đề chuyên môn</option>
                                  <option value='Vấn đề kỹ thuật'>Vấn đề kỹ thuật</option>
                                  <option value='Vấn đề khác'>Vấn đề khác</option>     
                                </select>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">Nhập nội dung cần trợ giúp</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Nhập nội dung...'></textarea>
                          </div>

                          <input type="submit" class="btn btn-primary btn-block mb-4 btn-format" placeholder='Gửi'/>
                        </form>
                      </div>
                </div>
            </div>
          </>
          )
        }
      }

      export default SliderContact