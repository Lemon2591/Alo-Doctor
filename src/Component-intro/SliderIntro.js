import React, { Component } from 'react';
import './SliderIntro.css';
import { AiOutlinePlus } from 'react-icons/ai';
import SliderIntroPhoto1 from '../assets/img/Slider-intro.jpg'

class SliderIntro extends Component {
    render() {
        return (

        <>
            <div className='Slider-Intro_Container'>
                <div className='Slider-Intro_Content'>
                    <div className='Slider-Intro_Content_All'>
                        <p>GIỚI THIỆU</p>
                        <div className='Slider-Intro_Content_About'>
                            <div className='Slider-Intro_Content_About_text'>
                                <p className='Slider-Intro_Content_About_text_slogan'>“Kiến tạo nền tảng công nghệ y tế cực kỳ đơn giản, phụng sự sức khỏe con người nhanh nhất trên mọi miền đất nước”</p>
                                <p className='Slider-Intro_Content_About_text_content'>
                                    <span> INFI-HEALTH </span>
                                là nền tảng công nghệ trực tuyến cung cấp cho người dùng những dịch vụ chăm sóc sức khỏe với một điểm chạm:</p>
                                <ul className='Slider-Intro_Content_About-list'>
                                    <li className='Slider-Intro_Content_About-list-item'>
                                        <i><AiOutlinePlus/></i> Hồ sơ sức khỏe điện tử
                                    </li>

                                    <li className='Slider-Intro_Content_About-list-item'>
                                        <i><AiOutlinePlus/></i> Bác sĩ riêng
                                    </li>

                                    <li className='Slider-Intro_Content_About-list-item'>
                                        <i><AiOutlinePlus/></i> Đặt lịch khám
                                    </li>

                                    <li className='Slider-Intro_Content_About-list-item'>
                                        <i><AiOutlinePlus/></i> Lấy mẫu tận nơi
                                    </li>

                                    <li className='Slider-Intro_Content_About-list-item'>
                                        <i><AiOutlinePlus/></i> Giao thuốc tận nơi
                                    </li>

                                    <li className='Slider-Intro_Content_About-list-item'>
                                        <i><AiOutlinePlus/></i> Chăm sóc tại nhà
                                    </li>
                                </ul>
                            </div>
                            <div className='Slider-Intro_Content_About_img'>
                                <img src={SliderIntroPhoto1}></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

                            <div className='Slider-Intro_Content_About-below'>
                                <p className='Slider-Intro_Content_About-below-text'>
                                Hoàn toàn trực tuyến ở mọi lúc mọi nơi mà không cần phải đến bệnh viện để xếp hàng và chờ đợi.
                                <br></br>
                                <br></br>
                                <br></br>
                                Thông qua phần mềm, chúng tôi luôn hy vọng đã tạo nên một phương thức giúp bệnh nhân có thể tiếp cận với các dịch vụ y tế (nói chung), và dịch vụ khám chữa bệnh (nói riêng) một cách dễ dàng, nhanh chóng và thuận lợi.
                                <br></br>
                                Từ đó làm tăng thêm sự hài lòng của bệnh nhân, nâng cao chất lượng dịch vụ của bệnh viện, và góp phần phát triển bệnh viện ngày càng trở nên thông minh hiện đại đáp ứng với sự kỳ vọng và tin tưởng của quý bệnh nhân trong và ngoài nước. 
                                <br></br>
                                <br></br>
                                <br></br>
                                Trân trọng!
                                </p>
                            </div>
        </>

        );
    }
}

export default SliderIntro;