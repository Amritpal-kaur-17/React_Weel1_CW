import React from 'react';
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";

/*function App(){
  return <div><Logo/>
  <BestPokemon/>
  </div>
}
const Logo = () => {
  return <header><h1>Welcome to the Pokedox</h1>
     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png">
    </img></header>
}
function BestPokemon(){
  return "My favorite Pokémon is Squirtle";
}
*/

const App = () => {
  //const longWhenClicked = () =>{
    //console.log('this is an important message')
//}
return (
    <div>
      <Logo  appName = "Pokedex"/>
     
        <BestPokemon  abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
        <CaughtPokemon date = {new Date().toLocaleDateString()}/>
        
    </div>
)
}

//----------------------------------------------
/*const Logo = ()  => {
    let appName = "Pokedex"
    return (
        <header>
            <h1>{appName}</h1>
            <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'></img>
        </header>
    )
}*/

/*const BestPokemon = () => {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    return (
      <div>
        <p>My favorite Pokémon is Squirtle </p>
        <ul>
          {abilities.map((name) => (
          <li>{name}</li>))}
        </ul>
      </div>
    )
}*/

/*const CaughtPokemon = () => {
  let date = new Date().toLocaleDateString()
  return (
    <p>"Caught 0 Pokémon on" {date}</p>  
  )
 }*/


export default App;

