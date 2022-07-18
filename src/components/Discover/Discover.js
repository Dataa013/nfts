import React, { useState } from 'react'
import logo from '../../images/IMG.png'
import person from '../../images/person.png'
import './Discover.css'
import Data from './Data'
function Discover() {

return (
<section className='discover'>
    <div className="container">
        <div className="discover-cont">
            <div className="content">
                <h2 className='content-title'>Discover a New Era of Crypto Currency</h2>
                <p className="content-text">Panda NFT is the primier marketplace for NFT, which are digital items you
                    can
                    truly own. Digital items have existed for a long time, but never like this.</p>
                <div>
                    <button className='content-btn'>
                        Get Started
                    </button>
                </div>

            </div>
            <div className="cont">
                <img src={logo} />
                <h3>"Hamlet Contemplates ...</h3>
                <div className="cont-cont">
                    <div className="cont-desc">
                        <img src={person} />
                        <div className="cont-desc-dsc">
                            <p>Creator</p>
                            <h4>SalvadorDali</h4>
                        </div>
                    </div>
                    <div className="cont-desc-two">
                        <p>Current Bid</p>
                        <h4>4.89 ETH</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="dis-partner">
            <Data link={"https://www.binance.com/en"} img={"/img/Object.svg"}/>
            <Data link={"https://trustwallet.com/"} img={"/img/Object (1).svg"}/>
            <Data link={"https://metamask.io/"} img={"/img/Object (2).svg"}/>
            <Data link={"https://www.coinbase.com/"} img={"/img/Object (3).svg"}/>
            <Data link={"https://www.tokocrypto.com/"} img={"/img/Tokocrypto 1 (1).svg"}/>
        </div>
    </div>
</section>
)
}

export default Discover

