import React from 'react'
import IconOne  from '../../assets/Images/Icons/icon-online.svg';
import IconTwo  from '../../assets/Images/Icons/icon-budgeting.svg';
import IconThree  from '../../assets/Images/Icons/icon-onboarding.svg';
import IconFour  from '../../assets/Images/Icons/icon-api.svg';


export default function Section() {

    return (
        <section>
            <div className="container">
                <div className="top-content">
                    <h2>Why choose Easybank</h2>
                    <p>
                    We leverage Open Banking to turn your 
                    bank account into your financial hub. 
                    Control your finances like never before.
                    </p>
                </div>
                <div className="boxes">
                    <div className="box one">
                        <img src={IconOne} alt="Online" className="icon" />
                        <h3>Online Banking</h3>
                        <p>
                        Our modern web and mobile applications 
                        allow you to keep track of your finances 
                        wherever you are in the world.
                        </p>
                    </div>
                    <div className="box two">
                        <img src={IconTwo} alt="Budgeting" className="icon" />
                        <h3>Simple Budgeting</h3>
                        <p>
                        See exactly where your money goes each month. 
                        Receive notifications when you’re 
                        close to hitting your limits.
                        </p>
                    </div>
                    <div className="box three">
                        <img src={IconThree} alt="Onboarding" className="icon" />
                        <h3>Fast Onboarding</h3>
                        <p>
                        We don’t do branches. Open your account 
                        in minutes online and start taking 
                        control of your finances right away.
                        </p>
                    </div>
                    <div className="box three">
                        <img src={IconFour} alt="API" className="icon" />
                        <h3>Open API</h3>
                        <p>
                        Manage your savings, investments, 
                        pension, and much more from one account. 
                        Tracking your money has never been easier.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}