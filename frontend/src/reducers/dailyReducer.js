import {
    GET_DAILYLIST_SUCCESS,
    GET_DAILYLIST_FAILED,
    ADD_TO_DAILYLIST_SUCCESS,
    ADD_TO_DAILYLIST_FAILED,
    DELETE_FROM_DAILYLIST_SUCCESS,
    DELETE_FROM_DAILYLIST_FAILED,
    DAILYLIST_LOADING,
    SHOWFOODLIST,
    HIDEFOODLIST} from '../actions/dailyActions';

    function getInitialState() {
        let dailylist = []
        if(sessionStorage.getItem("dailylist")) {
            dailylist = sessionStorage.getItem("dailylist");
            dailylist = JSON.parse(dailylist)            
        }
        let error = ""
        if(sessionStorage.getItem("dailylist_error")) {
            error = sessionStorage.getItem("dailylist_error");
        }
        let isFoodList = false
        if(sessionStorage.getItem("isFoodList")) {
            isFoodList = sessionStorage.getItem("isFoodList");
        }
        return {
            dailylist:dailylist,
            error:error,
            loading:false,
            isFoodList:isFoodList
        }
    }
    
    function saveToStorage(dailylist,error,isFoodList) {
        sessionStorage.setItem("dailylist",JSON.stringify(dailylist));
        sessionStorage.setItem("daily_error",error); 
        sessionStorage.setItem("isFoodList",isFoodList);         
    }
    
    let initialState = getInitialState();
    
    export const dailyReducer = (state = initialState, action) => {
        console.log("dailyReducer - action:"+action.type)
        let tempState = {};
        switch(action.type) {
            case GET_DAILYLIST_SUCCESS:
                tempState = {
                    dailylist:action.dailylist,
                    error:"",
                    loading:false
                }
                saveToStorage(action.dailylist,"");
                console.log("getdailylist-rducer",tempState)
                return tempState;
            case GET_DAILYLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.dailylist,action.error);
                return tempState;
            case ADD_TO_DAILYLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                console.log("tempstate-addtodailylist",tempState)
                saveToStorage(state.dailylist,"");
                return tempState;
            case ADD_TO_DAILYLIST_FAILED:
                tempState = {
                    ...state,
                    loading:false,
                    error:action.error
                }
                saveToStorage(state.dailylist,action.error);
                return tempState;
            case DELETE_FROM_DAILYLIST_SUCCESS:
                tempState = {
                    ...state,
                    error:""
                }
                saveToStorage(state.dailylist,"");
                return tempState;
            case DELETE_FROM_DAILYLIST_FAILED:
                tempState = {
                    ...state,
                    error:action.error,
                    loading:false
                }
                saveToStorage(state.dailylist,action.error);
                return tempState;
            case DAILYLIST_LOADING:
                tempState = {
                    ...state,
                    loading:true
                }
                return tempState;
            case SHOWFOODLIST:
            tempState = {
                ...state,
                error:action.error,
                loading:false,
                isFoodList:true
            }
            saveToStorage(state.dailylist,action.error,state.isFoodList);
            return tempState;
            case HIDEFOODLIST:
            tempState = {
                ...state,
                error:action.error,
                loading:false,
                isFoodList:false
            }
            console.log("hidefoodlist",state.dailylist)
            saveToStorage(action.error,state.isFoodList);
            return tempState;
            
            default:
            return state;
        }
    }