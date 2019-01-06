export const GET_FOODLIST_SUCCESS = "GET_FOODLIST_SUCCESS";
export const GET_FOODLIST_FAILED = "GET_FOODLIST_FAILED";
export const ADD_TO_FOODLIST_SUCCESS = "ADD_TO_FOODLIST_SUCCESS";
export const ADD_TO_FOODLIST_FAILED = "ADD_TO_FOODLIST_FAILED";
export const DELETE_FROM_FOODLIST_SUCCESS = "DELETE_FROM_FOODLIST_SUCCESS";
export const DELETE_FROM_FOODLIST_FAILED = "DELETE_FROM_FOODLIST_FAILED";
export const FOODLIST_LOADING = "FOODLIST_LOADING";

//actions
export const getList = () => {
    
    return dispatch => {
    
    let getObject = {
      method: "GET",
      mode: "cors",
      credentialls:"include",
      headers: {"Content-Type":"application/json"}
    }
    dispatch(foodListLoading());
    fetch("/api/food", getObject).then((response) => {
      //console.log("getlist response",response.json());
        if(response.ok) {
            //console.log("++++",response)
          response.json().then((data) => {
              
           dispatch(getFoodListSuccess(data));                   
            }).catch((error) => {
              dispatch(getFoodListFailed("problem loading food list")); 
            })
          
        } else {
            dispatch(getFoodListFailed("responce not ok, status"+response.status)); 
        }
    }).catch((error) => {
        dispatch(getFoodListFailed("problem loading food list")); 
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
    fetch("/api/food", postObject).then((response) => {
      //console.log("addtolist",response);
        if(response.ok) {
          dispatch(addToFoodListSuccess());
          dispatch(getList());          
        } else {
          dispatch(addTotFoodListFailed("Response not OK. Status:",response.status));
        }
    }).catch((error) => {
        dispatch(addTotFoodListFailed("server responded with error"));
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
    fetch("/api/food/"+id, deleteObject).then((response) => {
      if(response.ok) {
        dispatch(deleteFromFoodListSuccess());
        dispatch(getList());
        this.getList();          
      } else {
        dispatch(deleteFromtFoodListFailed("Response not OK. Status:"+response.status))
      }
  }).catch((error) => {
    dispatch(deleteFromtFoodListFailed("server responded with error"))
});
  }
}
//action creators

const getFoodListSuccess = (foodlist) => {
    //console.log("getlistsuccess",foodlist)    
    return {
        type:GET_FOODLIST_SUCCESS,
        foodlist:foodlist        
    }
}

const getFoodListFailed = (error) => {
    return {
        type:GET_FOODLIST_FAILED,
        error:error
    }
}

const addToFoodListSuccess = () => {
    return {
        type:ADD_TO_FOODLIST_SUCCESS        
    }
}

const addTotFoodListFailed = (error) => {
    return {
        type:ADD_TO_FOODLIST_FAILED,
        error:error
    }
}

const deleteFromFoodListSuccess = () => {
    return {
        type:DELETE_FROM_FOODLIST_SUCCESS        
    }
}

const deleteFromtFoodListFailed = (error) => {
    return {
        type:DELETE_FROM_FOODLIST_FAILED,
        error:error
    }
}

const foodListLoading = () => {
    return {
        type:FOODLIST_LOADING        
    }
}
