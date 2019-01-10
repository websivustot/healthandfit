import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    LOGIN_LOADING

} from '../actions/loginActions';

function getInitialState(){
    let error="";    
    if(sessionStorage.getItem("isLogged")){        
        let tempIsLogged = false
        let tempUserName = "";
        let tempNeeds = "";
        if(sessionStorage.getItem("isLogged") === "true"){
            tempIsLogged = true;
            tempUserName = sessionStorage.getItem("userName");
            tempNeeds = sessionStorage.getItem("needs");
        }
        
        if(sessionStorage.getItem("login_error")){
            error = sessionStorage.getItem("login_error")
        }
        return {
            isLogged:tempIsLogged,
            loading:false,
            error:sessionStorage.getItem("login_error"),
            userName:tempUserName,
            needs:tempNeeds
        }       
    } else {
        return {
            isLogged:false,
            loading:false,
            error:error,
            userName:"",
            needs:""
        }
    }
}

function saveToStorage(isLogged, error, userName, needs){
    sessionStorage.setItem("isLogged",isLogged);
    sessionStorage.setItem("error",error);
    sessionStorage.setItem("userName",userName);
    sessionStorage.setItem("needs",needs);
}

let initialState = getInitialState();

const loginReducer = (state = initialState,action) => {    
    let tempState = {};
    switch(action.type){
        case LOGIN_LOADING:
            tempState = {
                ...state,
                loading:true
            }
            return tempState;
        case REGISTER_SUCCESS:
            tempState = {
                ...state,
                error:"",
                loading:false
            }
            saveToStorage(state.isLogged,"",state.userName,state.needs);
            return tempState;
        case REGISTER_FAILED:
            tempState = {
                ...state,
                error:action.error
            }
            saveToStorage(state.isLogged,action.error,"");
            return tempState;
        case LOGIN_SUCCESS:
            tempState = {
                isLogged:true,                
                error:"",
                loading:false,
                userName:sessionStorage.getItem("userName"),
                needs:sessionStorage.getItem("needs")
                
            }
            saveToStorage("true","",tempState.userName,tempState.needs);
            return tempState;

        case LOGIN_FAILED:
            tempState = {
                ...state,
                error:action.error,
                loading:false
            }
            saveToStorage(state.isLogged,action.error,"");
            return tempState;

        case LOGOUT_SUCCESS:
            tempState = {
                isLogged:false,
                error:"",
                loading:false,
                userName:""
            }
            sessionStorage.clear();            
            return tempState;
            
        case LOGOUT_FAILED:
            tempState = {
                ...state,
                error:action.error,
                loading:false,
            }
            saveToStorage(state.isLogged,action.error,state.userName);
            return tempState;
        default:
            return state
    }
}

export default loginReducer;