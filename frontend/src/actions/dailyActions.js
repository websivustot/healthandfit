export const GET_DAILYLIST_SUCCESS = "GET_DAILYLIST_SUCCESS";
export const GET_DAILYLIST_FAILED = "GET_DAILYLIST_FAILED";
export const ADD_TO_DAILYLIST_SUCCESS = "ADD_TO_DAILYLIST_SUCCESS";
export const ADD_TO_DAILYLIST_FAILED = "ADD_TO_DAILYLIST_FAILED";
export const DELETE_FROM_DAILYLIST_SUCCESS = "DELETE_FROM_DAILYLIST_SUCCESS";
export const DELETE_FROM_DAILYLIST_FAILED = "DELETE_FROM_DAILYLIST_FAILED";
export const DAILYLIST_LOADING = "DAILYLIST_LOADING";
export const SHOWFOODLIST = "SHOWFOODLIST";
export const HIDEFOODLIST = "HIDEFOODLIST";

//actions
export const getList = () => {
    
    return dispatch => {
    
    let getObject = {
      method: "GET",
      mode: "cors",
      credentialls:"include",
      headers: {"Content-Type":"application/json"}
    }
    dispatch(dailyListLoading());
    fetch("/api/daily", getObject).then((response) => {
      //console.log("getlist response",response.json());
        if(response.ok) {
            console.log("++++",response)
          response.json().then((data) => {
              
           dispatch(getDailyListSuccess(data));                   
            }).catch((error) => {
              dispatch(getDailyListFailed("problem loading food list")); 
            })
          
        } else {
            dispatch(getDailyListFailed("responce not ok, status"+response.status)); 
        }
    }).catch((error) => {
        dispatch(getDailyListFailed("problem loading food list")); 
    });
  }
}

export const addToList = (item) => {
    return dispatch => {
    let postObject = {
      method: "POST",
      mode: "cors",
      credentialls:"include",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(item)
    }
    fetch("/api/daily", postObject).then((response) => {
      //console.log("addtolist"+response);
        if(response.ok) {
          dispatch(addToDailyListSuccess());
          dispatch(getList());          
        } else {
          dispatch(addToDailyListFailed("Response not OK. Status:"+response.status));
        }
    }).catch((error) => {
        dispatch(addToDailyListFailed("server responded with error"));
    });
  }
}

export const removeFromList = (id) => {
    return dispatch => {
    let deleteObject = {
      method:"DELETE",
      mode:"cors",
      credentialls:"include",
      headers: {"Content-Type":"application/json"}
    }
    fetch("/api/daily/"+id, deleteObject).then((response) => {
      if(response.ok) {
        dispatch(deleteFromDailyListSuccess());
        dispatch(getList());
        this.getList();          
      } else {
        dispatch(deleteFromDailyListFailed("Response not OK. Status:"+response.status))
      }
  }).catch((error) => {
    dispatch(deleteFromDailyListFailed("server responded with error"))
});
  }
}
//action creators

const getDailyListSuccess = (dailylist) => {
    console.log("getlistsuccess",dailylist)    
    return {
        type:GET_DAILYLIST_SUCCESS,
        dailylist:dailylist        
    }
}

const getDailyListFailed = (error) => {
    return {
        type:GET_DAILYLIST_FAILED,
        error:error
    }
}

const addToDailyListSuccess = () => {
    return {
        type:ADD_TO_DAILYLIST_SUCCESS        
    }
}

const addToDailyListFailed = (error) => {
    return {
        type:ADD_TO_DAILYLIST_FAILED,
        error:error
    }
}

const deleteFromDailyListSuccess = () => {
    return {
        type:DELETE_FROM_DAILYLIST_SUCCESS        
    }
}

const deleteFromDailyListFailed = (error) => {
    return {
        type:DELETE_FROM_DAILYLIST_FAILED,
        error:error
    }
}

const dailyListLoading = () => {
    return {
        type:DAILYLIST_LOADING        
    }
}

export const showFoodList = () => {    
    return {
        type:SHOWFOODLIST        
    }
}

export const hideFoodList = () => {    
    return {
        type:HIDEFOODLIST        
    }
}
