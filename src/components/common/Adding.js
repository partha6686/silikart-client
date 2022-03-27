import React from 'react'
import '../../Css/Adding.css';
import {useNavigate} from 'react-router-dom';
const Adding = () => {
    const navigate = useNavigate();
    const handleClick=(s)=>{
        navigate("/addproduct");
    }
    return (
        <div onClick={handleClick}>
            <div className="add" data-tooogle="tooltip" data-placement="left" title="Add Products">
                <div className="symb"><b>+</b></div>
                
            </div>
        </div>
    )
}

export default Adding
