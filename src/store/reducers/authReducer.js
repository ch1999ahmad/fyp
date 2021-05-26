
import { LOGIN } from '../actions/types';


const initialState = {
    logged: false,   user: [], 
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            {
                // console.log(action.coin)
                return {
                    ...state,
                    logged: true,  user: action.user,

                }
            }
     
            default:
                return state;
    
        }
    
    
    }
    export default authReducer
    