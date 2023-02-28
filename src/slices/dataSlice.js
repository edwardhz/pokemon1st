import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getData, getDetailsPokemon } from '../API/api';


const initialState={
    pokemons: [],
    pokemonsFiltered:[],
    isThereFavorites:false,
    loading:true,
    search:''
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, {dispatch}) => {
        //dispatch loader
        // fetch
        //dispatch loader
        dispatch(setLoading(true))

       
        
            const pokemons =  await getData()
            const pokemonsDetailed = await Promise.all(pokemons.map(pokemon=>getDetailsPokemon(pokemon)))
            dispatch(setPokemons(pokemonsDetailed))
            console.log('fetched');
      

        dispatch(setLoading(false))           
    }
)




export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers: {
        setPokemons:(state,action)=>{
            state.pokemons = action.payload
        },
        setFavorites: (state,action)=>{
            const currentPokemonIndex = state.pokemons.findIndex((pokemon)=>{
                return pokemon.id == action.payload
            })
            const currentPokemonIndexF = state.pokemonsFiltered.findIndex((pokemon)=>{
                return pokemon.id == action.payload
            })

            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite

                state.pokemons[currentPokemonIndex].favorite = !isFavorite

                if(currentPokemonIndexF >=0){
                    state.pokemonsFiltered[currentPokemonIndexF].favorite = !isFavorite
                }
                
            }
        },
        setLoading: (state,action)=>{
            state.loading = action.payload
        },
        setSearch: (state,action)=>{
            state.search = action.payload
        },
        setFiltered: (state,action)=>{
            state.pokemonsFiltered = action.payload
        },
        setIsThereFavorites: (state,action)=>{
            state.isThereFavorites = action.payload
        }


    }
})

export const {setFavorites,setPokemons,setLoading,setSearch,setFiltered,setIsThereFavorites} = dataSlice.actions;
export default dataSlice.reducer;