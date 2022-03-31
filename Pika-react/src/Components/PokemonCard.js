import React from 'react';
import './PokemonCard.css';
import { Button } from './Button';
import { useState } from "react";





const pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];


function PokemonCard() {

    const [pokemonName, setPokemonName] = useState("");
    const handleChange = e => {
        var pokemonNameChange = e.target.value;
        setPokemonName(pokemonNameChange);
        console.log(e.target);
        //checks the nr in the image name and takes that as index in the pokemonlist to check against the input
        if(pokemonNameChange.toLowerCase() === pokemonList[pokemonImage.slice(5, -4)-1].toLowerCase()){
            handleImageSwitch();
        }
      }

    const [pokemonImage, setPokemonImage] = useState("Gen1/1.png")
    const handleImageSwitch = () => {
        //puts current image nr + 1 in a temp, which will be concatenated with strings to build next image
        var temp = +pokemonImage.slice(5, -4) + 1;
        setPokemonImage("Gen1/" + temp + ".png");
        setCurrentNumber(currentNumber + 1);
        //clears input box
        setPokemonName("");
    }

    const [currentNumber, setCurrentNumber] = useState(0);

    return (
        <div className='PokemonCard'>
            <div className='card__container'>
                <img className='poke-img' src= {pokemonImage} alt="Poke" onChange= {pokemonImage}/>
                <form>
                    <input
                    id= 'myInput'
                    className='guess-input'
                    name='guess-input'
                    type='text'
                    autoComplete='off'
                    value={pokemonName}  
                    onChange={handleChange}                  />
                    <Button buttonStyle='btn--outline'>Skip</Button>
                </form>
                <p>{currentNumber + 1}/151</p>
                <p>3 correct</p>
                <h5>Poke name: {pokemonName}</h5>
            </div>
        </div>
    );
}
 

export default PokemonCard