import React, { useEffect, useState } from 'react'

const Welcome = () => {

    const [welcome, setWelcome] = useState(true)


    const welcomeHandler = () => {
        window.location.href = welcome ? '#articles' : '#welcome'
        setWelcome(() => !welcome)
    }
    
  
    return (
        <div id='welcome' className={'welcome'}>
            <div className='welcome__wrapper'>
                <h1 className="welcome__header">Bonsai</h1>
                <button id='articles' onClick={welcomeHandler} className='button button__wide' >{welcome ? 'Continue' : 'Back'}</button>
            </div>
        </div>
    )
}

export default Welcome