
import { LOGIN, UPDATE } from '../actions/types';


const initialState = {
    logged: false,   user: {}, 
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
            
                case UPDATE:
        {
            return{
                ...state,

                type: UPDATE,  info : info
            }
        }
        }
    
    
    }
    export default authReducer
    