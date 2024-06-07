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

function Releases(){
    return (
        <div>
            <Navbar />
            <div className='releases'>
                <div className='carousel-space'>

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