import React,{useState} from 'react'
import logo from '../logo.svg';
import '../App.css';
import { NavigateFunction, useNavigate } from 'react-router-dom'

import getRandomNumbers from '../services/getRandomNumbers';
import {AxiosResponse} from 'axios'

export default function HomeView() : JSX.Element{
    const [randomNumber1,setRandomNumber1] = useState(0)
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

    const runGetRandomNumbers = async (e : React.MouseEvent) : Promise<void> => {
        e.preventDefault()
        console.log(process.env.REACT_APP_BASE_URL)
        try {
            let response : AxiosResponse = await getRandomNumbers()
            setRandomNumber1(response.data["randomNumber1"])
        } catch (error) {
            console.log(error)
        }
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
            <p className='navigate' onClick={runGetRandomNumbers}>click here to get random number</p>
            {randomNumber1 > 0 ? <p>{randomNumber1}</p> : null}
        </header>
        </div>
    )
}