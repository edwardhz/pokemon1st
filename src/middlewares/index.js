export const logger = (store) => (next) => (action) =>{
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo)=>{
    const featured = [{name:'sansa'},...actionInfo.action.payload]

    const withPrefix = actionInfo.action.payload.map((pokemon)=>({
        ...pokemon,
        name:'*'+pokemon.name
    }))


    const updatedAction = {...actionInfo, action:{...actionInfo.action, payload:featured}}
    next(updatedAction)
}