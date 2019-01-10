import {
    GET_FOODLIST_SUCCESS,
    GET_FOODLIST_FAILED,
    ADD_TO_FOODLIST_SUCCESS,
    ADD_TO_FOODLIST_FAILED,
    DELETE_FROM_FOODLIST_SUCCESS,
    DELETE_FROM_FOODLIST_FAILED,
    FOODLIST_LOADING} from '../actions/foodActions';

    function getInitialState() {
        let foodlist = []
        if(sessionStorage.getItem("foodlist")) {
            foodlist = sessionStorage.getItem("foodlist");
        }
        let error = ""
        if(sessionStorage.getItem("foodlist_error")) {
            error = sessionStorage.getItem("foodlist_error");
        }
        return {
            foodlist:foodlist,
            error:error,
            loading:false
        }
    }
    
    function saveToStorage(foodlist,error) {
        sessionStorage.setItem("food_error",error);
    }
    
    let initialState = getInitialState();
    
    export const foodReducer = (state = initialState, action) => {        
        let tempState = {};
        switch(action.type) {
            case GET_FOODLIST_SUCCESS:
                tempState = {
                    foodlist:action.foodlist,
                    error:"",
                    loading:false
                }
                saveToStorage(action.foodlist,"");
                return tempState;
            case GET_FOODLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.foodlist,action.error);
                return tempState;
            case ADD_TO_FOODLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.foodlist,"");
                return tempState;
            case ADD_TO_FOODLIST_FAILED:
                tempState = {
                    ...state,
                    loading:false,
                    error:action.error
                }
                saveToStorage(state.foodlist,action.error);
                return tempState;
            case DELETE_FROM_FOODLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.foodlist,"");
                return tempState;
            case DELETE_FROM_FOODLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.foodlist,action.error);
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