export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            // console.log(state)
            // console.log(state.favoriteList)
            const newList = [...state.favoriteList];
            // console.log(newList)
            // console.log(state)
            if (newList.indexOf(action.payload.selectedRestaurant) > -1){
                newList
            }else{
                newList.push(action.payload.selectedRestaurant);
            }
            state.favoriteList = newList;
            return { ...state }

            // return {
            //     ...state,
            //     favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
            // }
        case "REMOVE_FROM_FAVORİTE":
            const updateList = [...state.favoriteList]
            console.log(updateList)
            const index = updateList.indexOf(action.payload.selectedRestaurant);
            if (index > -1) {
                updateList.splice(index, 1)};
            state.favoriteList = updateList;
            console.log(updateList)
            return {...state}
        default:
            return state;
    }
}
