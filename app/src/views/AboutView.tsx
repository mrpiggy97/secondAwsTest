import React,{useState} from 'react'
import logo from '../logo.svg'

import {useNavigate,NavigateFunction} from 'react-router-dom'

export default function AboutView() : JSX.Element{
    const [greeting,setGreeting] = useState("nyahallo")
    let navigator : NavigateFunction = useNavigate()
    const navigateToHomeView = () => {
        navigator("/")
    }
    const changeGreeting = (e : React.MouseEvent) : void => {
        e.preventDefault()
        if (greeting !== "mogu mogu"){
            setGreeting("mogu mogu")
        }else{
            setGreeting("nyahallo")
        }
    }
    return(
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>this app is supposed to update on git push</p>
        <p>it uses an existing image</p>
        <p className='navigate' onClick={navigateToHomeView}>click here to go home</p>
        <p>{greeting}</p>
        <p onClick={changeGreeting} className='navigate'>click here to change greeting</p>
        </header>
        </div>  
    )
}