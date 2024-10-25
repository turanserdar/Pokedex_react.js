import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = (props) => {
  const title = props.isWinner ? (
    <h2 className='Pokedex-winner'>Winning Player</h2>
  ) : (
    <h2 className='Pokedex-loser'>Losing Player</h2>
  )

  return (
    <div className='Pokedex'>
      {title}
      <h4>Total Experience: {props.exp}</h4>
      <div className='Pokedex-cards'>
        {props.pokemon.map((p) => (
          <Pokecard
            key={p.id} // Her bir Pokecard için benzersiz bir anahtar eklemek önemli
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default Pokedex
