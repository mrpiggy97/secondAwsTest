import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import { NavigateFunction, useNavigate } from 'react-router-dom'

export default function HomeView() : JSX.Element{
    const navigator : NavigateFunction = useNavigate()
    const navigateToAboutView = () : void => {
        navigator("/about")
    }
    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>we use aws copilot for deployment and its pipeline</p>
            <p>we also make use of aws ecr to store the image for this app</p>
            <p className='navigate' onClick={navigateToAboutView}>click here to go to about page</p>
        </header>
        </div>        
    )
}