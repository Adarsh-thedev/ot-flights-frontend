import React, { useState} from 'react';
import Base from './Base';

const CarbonOffset = () => {
    const [amount, setAmount] = useState(100);

    const onAmountChange = (event) => {
        setAmount(event.target.value);
    }

   return(
    <Base>
        <section className="section offset wow fadeIn nunito">
            {/* <div className="wave wow fadeIn" data-wow-delay="1.5s" style={{width: '100%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,224L80,234.7C160,245,320,267,480,245.3C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <div style={{transform: 'rotate(180deg)'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#0099ff" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,272C640,277,800,299,960,298.7C1120,299,1280,277,1360,266.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>
            </div> */}
            <div className="offsetInfo container">
                <span className = 'f3'>Your Climate Impact compared to</span> <br/>
                <span className = 'f4'>Your Flight</span>
                <div className="flightco2 br2" style={{backgroundColor: 'red', color: 'white', width: '50%'}}>
                    <div className="container f4">
                        <p>kg 3,196</p>
                        <p id="totalAmount" style={{display: 'none'}}>3196</p>
                    </div>
                </div>
                <span className = 'f4'>Emission of a car per year</span>
                <div className="carco2 black br2" style={{color: 'white', width: '30%'}}>
                    <div className="container f4">
                        <p>kg 2,000</p>
                    </div>
                </div>
                <h5>Climate compactible annual emissions budget for one person</h5>
                <div className="budget green br2" style={{color: 'white', width: '30%'}}>
                    <div className="container f4">
                        <p>kg 2,300</p>
                    </div>
                </div>
            </div>
            <div className="payment container">
                <span className = 'f3'>My compensation amount</span>
                <p className = 'text-muted f5'>I want to offset my flight's CO<sub>2</sub> emissions of 3,196 kg by <span id="percentage" className = 'b f4'>100</span><b>%</b> by donating the following amount.</p>
                <div className="slidecontainer" style={{width: '50%', position: 'relative'}}>
                    <div>
                        <span className = 'f4' style={{color:'green'}}>Pledge: € {amount}</span> 
                        <input className = 'dib' type = 'number' max = {amount} min = {amount} value = {amount} onChange = {onAmountChange}/>
                        <button type="submit" href="payment" className="btn btn-outline-success">Pledge Now</button>
                    </div>
                </div>

            </div>
        </section>
    </Base>
   );
}

export default CarbonOffset;