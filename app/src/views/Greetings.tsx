import React from 'react'
import "../App.css"

import {useNavigate,NavigateFunction} from 'react-router-dom'

export default function GreetingsView() : JSX.Element{
    let navigator : NavigateFunction = useNavigate()
    const navigateToHomeView = (e : React.MouseEvent) : void => {
        navigator("/")
    }
    return(
        <div>
            <header className='App-header'>
                <p>greetings</p>
                <p className='navigate' onClick={navigateToHomeView}>click here to go home</p>
            </header>
        </div>
    )
}