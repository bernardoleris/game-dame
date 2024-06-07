import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Releases.css";
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import img4 from "../../assets/img4.png"
import img5 from "../../assets/img5.png"
import SmallBox from '../../components/SmallBox';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import {register} from "swiper/element-bundle";
import {Swiper, SwiperSlide} from 'swiper/react';

register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Releases(){
    return (
        <div>
            <Navbar />
            <div className='releases'>
                <div className='carousel-space'>
                    <Swiper
                        slidesPerView={2}
                        pagination={{clickable:true}}
                        navigation
                        className='swiper'
                    >
                        <SwiperSlide>
                            <img src={img1} alt="" className='swiper-images' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" className='swiper-images' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="" className='swiper-images' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="" className='swiper-images' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt="" className='swiper-images' />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='releases-space'>
                    <div className='release-text'>Lançamentos</div>
                    <div className='box-images'>
                        <div className='image-container'>
                            <img src={img1} alt="" className='images'/>
                            <SmallBox 
                                width="80px" 
                                height="25px" 
                                fontColor="#4B626C" 
                                fontSize="12px" 
                                bgColor="#FCFAFA"
                                position="absolute"
                                marginTop="170px"
                                marginLeft="10px"
                            >
                                R$ 299,00
                            </SmallBox>
                        </div>
                        <div className='image-container'>
                            <img src={img2} alt="" className='images'/>
                            <SmallBox 
                                width="80px" 
                                height="25px" 
                                fontColor="#4B626C" 
                                fontSize="12px" 
                                bgColor="#FCFAFA"
                                position="absolute"
                                marginTop="170px"
                                marginLeft="10px"
                            >
                                R$ 299,00
                            </SmallBox>
                        </div>
                        <div className='image-container'>
                            <img src={img3} alt="" className='images'/>
                            <SmallBox 
                                width="80px" 
                                height="25px" 
                                fontColor="#4B626C" 
                                fontSize="12px" 
                                bgColor="#FCFAFA"
                                position="absolute"
                                marginTop="170px"
                                marginLeft="10px"
                            >
                                R$ 299,00
                            </SmallBox>
                        </div>
                        <div className='image-container'>
                            <img src={img4} alt="" className='images'/>
                            <SmallBox 
                                width="80px" 
                                height="25px" 
                                fontColor="#4B626C" 
                                fontSize="12px" 
                                bgColor="#FCFAFA"
                                position="absolute"
                                marginTop="170px"
                                marginLeft="10px"
                            >
                                R$ 299,00
                            </SmallBox>
                        </div>
                        <div className='image-container'>
                            <img src={img5} alt="" className='images'/>
                            <SmallBox 
                                width="80px" 
                                height="25px" 
                                fontColor="#4B626C" 
                                fontSize="12px" 
                                bgColor="#FCFAFA"
                                position="absolute"
                                marginTop="170px"
                                marginLeft="10px"
                            >
                                R$ 299,00
                            </SmallBox>
                        </div>
                    </div>
                    <Link to="/shoppingcart">
                        <CiShoppingCart id="shopping-cart" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Releases;