import React from 'react'
import ImageOne from '../../assets/Images/bg-intro-desktop.svg'
import ImageTwo from '../../assets/Images/image-mockups.png'

export default function MainComponent() {

    return (
        <main className="main">
            <div className="container">
                <div className="main-content">
                    <div className="main-texts">
                        <h1>Next generation digital banking</h1>
                        <p>
                            Take your financial life online. Your 
                            Easybank account will be a one-stop-shop 
                            for spending, saving, 
                            budgeting, investing, and much more
                        </p>
                        <button className='requestInvite'>Request Invite</button>
                    </div>
                    <div className="main-imgs">
                        <img className='one' src={ImageOne}/>
                        <img className='two' src={ImageTwo}/>
                    </div>
                </div>
            </div>
        </main>
    )
}