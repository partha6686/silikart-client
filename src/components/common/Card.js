import React from "react";
import '../../Css/Card.css';
import {useNavigate} from 'react-router-dom';
const Card = () => {
    const navigate = useNavigate();
    const handleclick = (s) => {
        console.log(s);
        navigate(`/products/${s}`);
    }
    return (
        <div className="bdy">
            <div className="cards-list">

                <div className="cards 1" onClick={() => handleclick("electronics")}>
                    <div className="card_image"> <img src="https://media.giphy.com/media/XZcwMvQLRf9aXRa3qW/giphy.gif" /> </div>
                    <div className="card_title title-white">
                        <p>Electronics</p>
                    </div>
                </div>

                <div className="cards 2" onClick={() => handleclick("lab")}>
                    <div className="card_image">
                        <img src="https://media.giphy.com/media/HGOnH2nugoCintkXYR/giphy.gif" />
                    </div>
                   
                    <div className="card_title title-black">
                        <p>Lab Equipments</p>
                    </div>
                </div>

                <div className="cards 3" onClick={() => handleclick("hostel")}>
                    <div className="card_image">
                        <img src="https://media.giphy.com/media/CDNGqypbGDdrxvaJsE/giphy.gif" />
                    </div>
                    <div className="card_title title-white">
                        <p>Hostel Essentials</p>
                    </div>
                </div>

                <div className="cards 4" onClick={() => handleclick("books")}>
                    <div className="card_image">
                        <img src="https://media.giphy.com/media/Ec5RkrmARxPmTuXgrZ/giphy.gif" />
                    </div>
                    <div className="card_title title-black">
                        <p>Books </p>
                    </div>
                </div>

                <div className="cards 5" onClick={() => handleclick("fashion")}>
                    <div className="card_image"> <img src="https://media.giphy.com/media/l3q2rCBSrr6D7XKLK/giphy.gif" /> </div>
                    <div className="card_title title-black">
                        <p>Fashion</p>
                    </div>
                </div>
                <div className="cards 6" onClick={() => handleclick("others")}>
                    <div className="card_image"> <img src="https://media.giphy.com/media/MbFaRTRxoucfCbmLSZ/giphy.gif" /> </div>
                    <div className="card_title title-white">
                        <p>Others</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Card;