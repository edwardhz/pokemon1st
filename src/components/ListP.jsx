import React from 'react'
import CardP from 'components/CardP'
import 'styles/ListP.css'

const ListP = ({pokemons}) => {
  return (
    <div className='ListP'>
        {pokemons.map(pokemon => (
            <CardP pokemon={pokemon} key={pokemon.name}/>
        ))}
    </div>
  )
}

ListP.defaultProps = {
    pokemons: Array(20).fill('') // [''.'']
}

export default ListP