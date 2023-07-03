import React from 'react'
import ImageOne from '../../assets/Images/image-currency.jpg';
import ImageTwo from '../../assets/Images/image-restaurant.jpg';
import ImageThree from '../../assets/Images/image-plane.jpg';
import ImageFour from '../../assets/Images/image-confetti.jpg';

export default function Article() {

    return (
        <div className='article'>
            <div className="container">
                <h2>Latest Articles</h2>
                <div className="cards">
                    <div className="card one">
                        <img src={ImageOne} alt=""/>
                        <p className="author">By Claire Robinson</p>
                        <h4 className="head">
                        Receive money in any currency with no fees
                        </h4>
                        <p className="text">
                        The world is getting smaller 
                        and we’re becoming more mobile. 
                        So why should you be forced 
                        to only receive money in a single …
                        </p>
                    </div>
                    <div className="card two">
                        <img src={ImageTwo} alt=""/>
                        <p className="author">By Wilson Hutton</p>
                        <h4 className="head">
                        Treat yourself without worrying about money
                        </h4>
                        <p className="text">
                        Our simple budgeting feature 
                        allows you to separate out your 
                        spending and set realistic 
                        limits each month. That means you …
                        </p>
                    </div>
                    <div className="card three">
                        <img src={ImageThree} alt=""/>
                        <p className="author">By Wilson Hutton</p>
                        <h4 className="head">
                        Take your Easybank card wherever you go
                        </h4>
                        <p className="text">
                        We want you to enjoy your travels.
                        This is why we don’t charge any
                        fees on purchases while you’re 
                        abroad. We’ll even show you …
                        </p>
                    </div>
                    <div className="card four">
                        <img src={ImageFour} alt=""/>
                        <p className="author">By Claire Robinson</p>
                        <h4 className="head">
                        Our invite-only Beta accounts are now live!
                        </h4>
                        <p className="text">
                        After a lot of hard work by
                        the whole team, we’re excited to 
                        launch our closed beta. It’s easy to request 
                        an invite through the site ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}