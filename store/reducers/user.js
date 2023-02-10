const initialState = {
    user: null
}

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
       case "INIT_USER":
            return {
                ...state,
                user: action.payload
            }

        case "LOG_IN": 
        return {
            ...state,
            user: action.payload
        }
            
        case "LOG_OUT": {
            return {
                ...state,
                user: null
            }
        }
       default:
          return state;
    }
 };
