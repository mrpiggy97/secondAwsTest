import React from 'react'

import {useNavigate, NavigateFunction, useParams} from 'react-router-dom'

export default function CurrentTimeView() : JSX.Element{
    let navigate : NavigateFunction = useNavigate()
    let params = useParams()
    const navigateToHome = (e : React.MouseEvent) : void => {
        e.preventDefault()
        navigate("/")
    }
    let currentTime = new Date()
    return(
        <div>
            <header className='App-header'>
                <p>today is january {currentTime.getUTCDate()}</p>
                <p className='navigate' onClick={navigateToHome}>click here to go home</p>
                <p>{params.greeting}</p>
            </header>
        </div>
    )
}