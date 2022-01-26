import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import { NavigateFunction, useNavigate } from 'react-router-dom'

export default function HomeView() : JSX.Element{
    const navigator : NavigateFunction = useNavigate()
    const navigateToAboutView = () : void => {
        navigator("/about")
    }
    const navigateToGreetingsView = (e : React.MouseEvent) : void => {
        e.preventDefault()
        navigator("/greetings")
    }
    const navigateToCurrentTimeView = (e : React.MouseEvent) : void => {
        e.preventDefault()
        navigator(`/current-time/gawr`)
    }
    return(
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>we use aws copilot for deployment</p>
            <p>we also make use of aws ecr to store the image for this app</p>
            <p>this is an edit made possible by editing image to be used by service</p>
            <p className='navigate' onClick={navigateToAboutView}>click here to go to about page</p>
            <p className='navigate' onClick={navigateToGreetingsView}>click here to go to greetings view</p>
            <p className='navigate' onClick={navigateToCurrentTimeView}>click here to go to current time view</p>
        </header>
        </div>
    )
}