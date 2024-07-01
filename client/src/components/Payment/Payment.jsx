import React from "react";
import './Payment.css'
import { FaShoppingCart } from "react-icons/fa";
import pix from '../../assets/pix-image.png'
import Button from '../Button.jsx'
import Comcheckbox from "../Checkbox.jsx";

function Payment(){
    return (
            <div className="payment">
                <div className="payment-texto">Método de Pagamento</div>
                <div className="payment-all">
                    <div className="pix">
                        <img src={pix} alt="Pix Image" className="pix-image"/>
                        <div className="pix-texto">Pix</div>
                        <Comcheckbox />
                    </div>
                    <div className="pix-line"></div>
                    <div className="termos">
                        <Comcheckbox />
                        <div className="termo-texto">Eu aceito os termos e condições</div>
                    </div>
                    <Button 
                        text="Finalizar Compra" 
                        icon={<FaShoppingCart />}
                        fontSize = "20px"
                        iconMarginTop="2px"
                    />
                </div>
            </div>
    )
}

export default Payment;