//globale state lerimizi günbcellemek için yazdığımız fonklar
function reducer(state,action){
    switch(action.type){
        case "INCREASE_COUNTER":
            console.log(state)
            state.name=action.payload.name;
            state.counter=state.counter+1;
         
            console.log("Bastım")
            console.log(state)
            return {...state}
            
        case "DECREASE_COUNTER":
            console.log(state)
            
            state.counter=state.counter-1;
            console.log("Azalttım")
            console.log(state)
            return {...state}
        // case "ENTER_NAME":
        //     console.log(state)
            
        //     console.log("EKLEDİM")
        //     console.log(state)
        //     return {...state}
        default:
            return state
    }
}

export {reducer}
