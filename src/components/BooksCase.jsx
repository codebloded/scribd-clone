import React from 'react'
import "../books.css";
import crazy from "../assets/ceazy.png";
import Chnakya from "../assets/chankya.jpg";
import elephant from "../assets/ele.jpg"
import bookN from "../assets/fck.jpg";
import bookX from "../assets/kault.jpg";
import bookL from "../assets/kulandini.jpg";
import bookA from "../assets/lastwish.jpg";
import bookP from "../assets/pret.jpg";
import bookS from "../assets/sap.jpg";
import bookM from "../assets/monk.jpg";



const BooksCase = ()=>{
    return(
        <div className="case_main">
            <div className="heading">
                <h1>THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h1>
            </div>
            <div className="books">
                <div>
                    <img src={crazy} alt="books" />
                    <img src={Chnakya} alt="books"/>
                    <img src={elephant} alt="books" />
                    <img src={bookN} alt="books" />
                    <img src={bookM} alt="books" />
                    <img src={bookA} alt="books"/>
                    <img src={bookS} alt="books"/>
                    <img src={bookP} alt="books"/>
                    <img src={bookL} alt="books"/>
                    <img src={bookX} alt="books"/>
                </div>
            </div> 
                <button className="btnM">
                    Read for free 30 Days
                </button>
                <p>Cancel Anytime.</p>
        </div>
    )
}
export default BooksCase;