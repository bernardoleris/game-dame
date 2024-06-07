import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./Releases.css";

function Releases(){
    return (
        <div>
            <Navbar />
            <div className='releases'>
                <div className='carousel-space'>

                </div>
                <div className='releases-space'>
                    <div className='release-text'>Lancamentos</div>
                </div>
            </div>
        </div>
    )
}

export default Releases;