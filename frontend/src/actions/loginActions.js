export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING";

//Actions

export const register = (user) => {    
    return dispatch => {
        let registerObject = {
            method:"POST",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
          }
          dispatch(loadingLogin());
          fetch("/register",registerObject).then((response) => {
            if(response.ok){
                dispatch(registerSuccess());
              alert("Register successful!");
            } else {
                dispatch(registerFailed("Username already in use"));
              alert("Username already in use");
            }
          }).catch((error) => {
            dispatch(registerFailed("Server not responding"));

          })
    }
    
}

export const login = (user) => {    
    return dispatch => {
    let loginObject = {
        method:"POST",
        mode:"cors",            
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user)
        }
        dispatch(loadingLogin());
        fetch("/login",loginObject).then((response) => {        
        if(response.ok){            
            response.json().then((data) => {  
                sessionStorage.setItem("userName",data.username);
                sessionStorage.setItem("needs",data.needs);                                         
                dispatch(loginSuccess(data.username,data.needs));            
            }).catch((error) => {
            dispatch(loginFailed("server responded with error "+error));
            })
        } else {
            dispatch(loginFailed("wrong credentials"));
        }
        }).catch((error) => {
            dispatch(loginFailed("server responded with error "+error));
        })
    }
    
}

export const logout = () => {
    return dispatch => {
    console.log("logout");
    let logoutObject = {
        method:"POST",
        mode:"cors",
        credentialls:"include",
        headers:{"Content-Type":"application/json"}
    }
    dispatch(loadingLogin());
    fetch("/logout", logoutObject).then((response) => {        
        if(response.ok){
        dispatch(logoutSuccess());
        }
        else {
            dispatch(logoutFailed("server responted with status:"+response.status))            
        }
    }).catch((error) => {
        dispatch(logoutFailed("server responted with error"))
    })
    }
    
}

//Action creators

const registerSuccess = () => {
    return {
        type:REGISTER_SUCCESS
    }
}

const registerFailed = (error) => {
    return {
        type:REGISTER_FAILED,
        error:error
    }
}

const loginSuccess = (username,needs) => {
    return {
        type:LOGIN_SUCCESS,
        username:username,
        needs:needs
    }
}

const loginFailed = (error) => {
    return {
        type:LOGIN_FAILED,
        error:error
    }
}

const logoutSuccess = () => {
    return {
        type:LOGOUT_SUCCESS
    }
}

const logoutFailed = (error) => {
    return {
        type:LOGOUT_FAILED,
        error:error
    }
}

const loadingLogin = () => {
    return {
        type:LOGIN_LOADING        
    }
}