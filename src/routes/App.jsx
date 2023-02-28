import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searcher from 'components/Searcher'
import ListP from 'components/ListP'
import 'styles/global.css'
import {Col, Spin, Switch, Space} from 'antd'
import {CheckOutlined,CloseOutlined} from '@ant-design/icons'
import Logo from '../assets/Pokemon.png'
import { fetchPokemonsWithDetails } from '../slices/dataSlice'
import { setFiltered } from '../slices/dataSlice'




const App = () => {


    

    const search = useSelector(state => state.search)
    const loading = useSelector(state => state.loading)
    const pokemons = useSelector(state => state.pokemons)
    const filtered = useSelector(state => state.pokemonsFiltered)
    const favorites = useSelector(state => state.isThereFavorites)
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false);
  
    


    
    const filterByFavorite = () =>{
      if(!toggle){
        var filteredPokemons = pokemons.filter(pokemon => pokemon.favorite)
        dispatch(setFiltered(filteredPokemons))
        console.log(' SET FAVORITES');
        setToggle(true)
      }else{
        pokemonsFiltered()
        setToggle(false)
      }
    }
    
    const pokemonsFiltered = () =>{
      var filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(search))
      dispatch(setFiltered(filteredPokemons))
      console.log(filteredPokemons);
    }
    
  useEffect(()=>{

    if(search.length == 0 && favorites==false)
      {
        setTimeout(()=>(
          dispatch(fetchPokemonsWithDetails())   
        ),1000)
      }
    else{
      pokemonsFiltered()
    }
    
  },[search])



  return (
    <div className='App'>
      <div className='Header'>
        <img src={Logo} alt="" />
        {/* <p>{favorites ? 'true' : 'false'}</p>
        <p>{search.length}</p>
        <p>{pokemons.length}</p>
        <p>{filtered.length}</p> */}
      </div>
      
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <Col span={1} offset={1}>
        <Space direction="vertical">
          <Switch checkedChildren="Favorites" unCheckedChildren="Favorites"  
          onClick={filterByFavorite}
          
          />
        </Space>
      </Col>

      

       { loading ? <Col offset={12} >
        <Spin spinning size='large' style={{marginTop:60}}/>
      </Col> : ''} 
      {
        ((search.length > 0 && filtered.length == 0) || (toggle==true && filtered.length == 0)) ? 
        <div>There's no pokemons!</div> :
        <ListP pokemons={((filtered.length > 0 && search.length > 0)||(toggle == true)) ? filtered : pokemons}/>
      }
    </div>
  )
}



export default App
