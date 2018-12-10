import {
    GET_FOODLIST_SUCCESS,
    GET_FOODLIST_FAILED,
    ADD_TO_FOODLIST_SUCCESS,
    ADD_TO_FOODLIST_FAILED,
    DELETE_FROM_FOODLIST_SUCCESS,
    DELETE_FROM_FOODLIST_FAILED,
    FOODLIST_LOADING} from '../actions/foodActions';

    function getInitialState() {
        let list = []
        if(sessionStorage.getItem("list")) {
            list = sessionStorage.getItem("list");
        }
        let error = ""
        if(sessionStorage.getItem("food_error")) {
            error = sessionStorage.getItem("food_error");
        }
        return {
            list:list,
            error:error,
            loading:false
        }
    }
    
    function saveToStorage(list,error) {
        sessionStorage.setItem("food_error",error);
    }
    
    let initialState = getInitialState();
    
    export const foodReducer = (state = initialState, action) => {
        console.log("FoodReducer - action:"+action.type)
        let tempState = {};
        switch(action.type) {
            case GET_FOODLIST_SUCCESS:
                tempState = {
                    list:action.list,
                    error:"",
                    loading:false
                }
                saveToStorage(action.list,"");
                return tempState;
            case GET_FOODLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.list,action.error);
                return tempState;
            case ADD_TO_FOODLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.list,"");
                return tempState;
            case ADD_TO_FOODLIST_FAILED:
                tempState = {
                    ...state,
                    loading:false,
                    error:action.error
                }
                saveToStorage(state.list,action.error);
                return tempState;
            case DELETE_FROM_FOODLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.list,"");
                return tempState;
            case DELETE_FROM_FOODLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.list,action.error);
                return tempState;
            case FOODLIST_LOADING:
                tempState = {
                    ...state,
                    loading:true
                }
                return tempState;
            default:
            return state;
        }
    }