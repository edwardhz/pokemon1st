
export const getData = async () =>{
  

      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json();
      return data.results
    
  }
export const getDetailsPokemon= async (pokemon) =>{
    const response = await fetch(pokemon.url)
    const data = await response.json()
    
    return data
  }

  
// export const getData = async () =>{
//   const check = localStorage.getItem('pokemons');
//     if(check){
//       return JSON.parse(check);
//     }else{

//       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//       const data = await response.json();
//       localStorage.setItem("pokemons", JSON.stringify(data.results));
//       return data.results
//     }
//   }