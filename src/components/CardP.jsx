import React from 'react'
import {Card, Avatar} from 'antd'
import Meta from 'antd/es/card/Meta'
import StarButton from './StarButton'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorites, setIsThereFavorites } from '../slices/dataSlice'

const CardP = ({pokemon}) => {
  const dispatch = useDispatch()
  const renderAbilities = (abilities) => {
    return abilities.map(ability => ability.ability.name).join(' ☆ ')
  }
  
  const handleOnFavorite = () =>{
    dispatch(setFavorites(pokemon.id))
    dispatch(setIsThereFavorites(true))
  }
  
  const styleDefault = {
    width:'auto', 
    cursor:'default',
    textTransform:'capitalize',
    cursor:'default'
  }
  const styleFavorite = {
    width:'auto', 
    cursor:'default',
    backgroundColor: '#FBAB7E',
    backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
    textTransform:'capitalize'
  }

  return (

    
    <Card      
        style={pokemon.favorite ? styleFavorite : styleDefault}
        title={pokemon.name}
        cover={
          <img
            src={pokemon.sprites.front_shiny}
            alt={pokemon.name}
          />
        }
        hoverable={true}
        extra={
          <StarButton 
          onClick={handleOnFavorite}
          isFavorite={pokemon.favorite} 
          />}
        bordered={true}
    >
        <p style={{
          fontWeight: '100',
          textDecoration: 'none solid rgb(68, 68, 68)',
          fontStyle: 'italic',
          fontSize:12
          
          }}>Abilities</p>
        <Meta description={renderAbilities(pokemon.abilities)}
          style={{
            fontWeight: 'bold',
          }}
          avatar={<Avatar src={pokemon.sprites.front_default} />}
        />
        
    </Card>

  //   <Card
  //   style={pokemon.favorite ? styleFavorite : styleDefault}
  //   cover={
  //     <img
  //       src={pokemon.sprites.front_shiny}
  //       alt={pokemon.name}
  //     />
  //   }
  //   hoverable={true}
  //   extra={<StarButton 
  //           onClick={handleOnFavorite}
  //          isFavorite={pokemon.favorite} 
  //       />}
  //   >
  //   <Meta
  //     avatar={<Avatar src={pokemon.sprites.front_default} />}
  //     title={pokemon.name}
  //     description={renderAbilities(pokemon.abilities)}
    
  //   />
  // </Card>

  )


  
}

export default CardP