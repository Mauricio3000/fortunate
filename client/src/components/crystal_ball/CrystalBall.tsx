import React, { useState } from 'react';
import cball from '../../crystall_ball.png';
import './CrystalBall.css';

const CrystalBall: React.FC = () => {
    const [msg, setMsg] = useState("");

    let get_message = () => {
        let m = "You will live forever!";
        setMsg(m);
        console.log("Clicked!")
    }
    return (
        <div className="card crystal-ball">
            <img src={cball} className="card-img-top" alt="crystal_ball.png" />
            <div className="card-body">
                <h5 className="card-title">What is your future?</h5>
                <h4>{msg}</h4>
                <a href="#" onClick={get_message} className="btn btn-primary">Get My Fortune Told</a>
            </div>
        </div>
    );
}

export default CrystalBall;
