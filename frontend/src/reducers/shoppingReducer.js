import {
    GET_SHOPPINGLIST_SUCCESS,
    GET_SHOPPINGLIST_FAILED,
    ADD_TO_SHOPPINGLIST_SUCCESS,
    ADD_TO_SHOPPINGLIST_FAILED,
    DELETE_FROM_SHOPPINGLIST_SUCCESS,
    DELETE_FROM_SHOPPINGLIST_FAILED,
    SHOPPINGLIST_LOADING} from '../actions/shoppingActions';

    function getInitialState() {
        let list = []
        if(sessionStorage.getItem("list")) {
            list = sessionStorage.getItem("list");
        }
        let error = ""
        if(sessionStorage.getItem("shopping_error")) {
            error = sessionStorage.getItem("shopping_error");
        }
        return {
            list:list,
            error:error,
            loading:false
        }
    }
    
    function saveToStorage(list,error) {
        sessionStorage.setItem("shopping_error",error);
    }
    
    let initialState = getInitialState();
    
    export const shoppingReducer = (state = initialState, action) => {
        console.log("ShoppingReducer - action:"+action.type)
        let tempState = {};
        switch(action.type) {
            case GET_SHOPPINGLIST_SUCCESS:
                tempState = {
                    list:action.list,
                    error:"",
                    loading:false
                }
                saveToStorage(action.list,"");
                return tempState;
            case GET_SHOPPINGLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.list,action.error);
                return tempState;
            case ADD_TO_SHOPPINGLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.list,"");
                return tempState;
            case ADD_TO_SHOPPINGLIST_FAILED:
                tempState = {
                    ...state,
                    loading:false,
                    error:action.error
                }
                saveToStorage(state.list,action.error);
                return tempState;
            case DELETE_FROM_SHOPPINGLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.list,"");
                return tempState;
            case DELETE_FROM_SHOPPINGLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.list,action.error);
                return tempState;
            case SHOPPINGLIST_LOADING:
                tempState = {
                    ...state,
                    loading:true
                }
                return tempState;
            default:
            return state;
        }
    }