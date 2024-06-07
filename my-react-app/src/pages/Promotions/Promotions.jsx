import React from 'react';
import '../../styles/Index.css'
import './Promotions.css'
import Navbar from '../../components/Navbar/Navbar';
import promotionImg from "../../assets/godofwar-img.png"
import Button from '../../components/Button';
import { FaShoppingCart } from "react-icons/fa";

function Promotions(){
    return (
        <div>
            <Navbar />
            <div className="promotions">
                <div className='game-box'>
                    <div className='discount-circle'>98%</div>
                    <img src={promotionImg} alt="" />
                </div>
                <div className='describe-box'>
                    <div className='promotions-title'>God Of War</div>
                    <div className='promotions-describe'>Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortalno reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.</div>
                    <div className='promotion-line'></div>
                    <Button 
                        bgColor = "#FCFAFA"
                        textColor = "#4B626C"
                        text = "Adicionar ao Carrinho"
                        fontSize = "16px"
                        width = "230px"
                        height = "35px"
                        icon={<FaShoppingCart />}
                        marginTop = "0px"
                        iconMarginTop="5px"
                    />
                    <Button 
                        bgColor = "#FCFAFA"
                        textColor = "#4B626C"
                        text = "Solicitar Reembolso"
                        fontSize = "16px"
                        width = "230px"
                        height = "35px"
                        icon={<FaShoppingCart />}
                        marginTop = "-10px"
                        iconMarginTop="5px"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Promotions;