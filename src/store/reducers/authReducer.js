
import { LOGIN, UPDATE ,LOGOUT } from '../actions/types';


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
     
            case UPDATE:
                {
                    return{
                        ...state,
        
                        type: UPDATE,  info : info
                    }
                }
         

                case LOGOUT:
            {
                return {
                    ...state, logged: false, user: [], token: ''
                }
            }


            default:
                return state;
            
               

        
        }
    
    
    }
    export default authReducer
    