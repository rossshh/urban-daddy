import { ADD_TO_CART } from "../ActionTypes";
import { REMOVE_FROM_CART } from "../ActionTypes";

export const Reducer1=(state=[],actions)=>{
    switch(actions.type){
        case ADD_TO_CART:
            return [...state,actions.payload];
        case REMOVE_FROM_CART:
            const deletedArray1=state.filter((item,index)=>{
            return index!==actions.payload;
            })
            return deletedArray1;
        default:
            return state;
    }
}
