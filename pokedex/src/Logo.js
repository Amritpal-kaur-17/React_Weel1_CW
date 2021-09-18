import React from 'react'

const Logo = (props)  => {
    console.log("prop is: ", props);
    //let appName = "Pokedex"
    return (
     <header>
        <h1>Welcome to the {props.appName}</h1>
        <img alt = "hhh" src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'></img>
     </header>
    )
}

export default Logo;

 //<h1 onClick = {longWhenClicked}>Welcome to the {props.appName}</h1>
       //<img onClick={longWhenClicked}alt = "hhh" src='https://assets.pokemon.com/assets/cms2/img/pokedex/
       