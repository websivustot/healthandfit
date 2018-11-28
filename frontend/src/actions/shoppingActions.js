export const GET_SHOPPINGLIST_SUCCESS = "GET_SHOPPINGLIST_SUCCESS";
export const GET_SHOPPINGLIST_FAILED = "GET_SHOPPINGLIST_FAILED";
export const ADD_TO_SHOPPINGLIST_SUCCESS = "ADD_TO_SHOPPINGLIST_SUCCESS";
export const ADD_TO_SHOPPINGLIST_FAILED = "ADD_TO_SHOPPINGLIST_FAILED";
export const DELETE_FROM_SHOPPINGLIST_SUCCESS = "DELETE_FROM_SHOPPINGLIST_SUCCESS";
export const DELETE_FROM_SHOPPINGLIST_FAILED = "DELETE_FROM_SHOPPINGLIST_FAILED";
export const SHOPPINGLIST_LOADING = "SHOPPINGLIST_LOADING";

//actions
export const getList = () => {
    return dispatch => {
    
    let getObject = {
      method: "GET",
      mode: "cors",
      credentialls:"include",
      headers: {"Content-Type":"application/json"}
    }
    dispatch(shoppingListLoading());
    fetch("/api/shopping", getObject).then((response) => {
      //console.log(response);
        if(response.ok) {
          response.json().then((data) => {
           dispatch(getShoppingListSuccess(data));                   
            }).catch((error) => {
              dispatch(getShoppingListFailed("problem loading shopping list")); 
            })
          
        } else {
            dispatch(getShoppingListFailed("responce not ok, status"+response.status)); 
        }
    }).catch((error) => {
        dispatch(getShoppingListFailed("problem loading shopping list")); 
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
    fetch("/api/shopping", postObject).then((response) => {
      //console.log("addtolist"+response);
        if(response.ok) {
          dispatch(addToShoppingListSuccess());
          dispatch(getList());          
        } else {
          dispatch(addTotShoppingListFailed("Response not OK. Status:"+response.status));
        }
    }).catch((error) => {
        dispatch(addTotShoppingListFailed("server responded with error"));
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
    fetch("/api/shopping/"+id, deleteObject).then((response) => {
      if(response.ok) {
        dispatch(deleteFromShoppingListSuccess());
        dispatch(getList());
        this.getList();          
      } else {
        dispatch(deleteFromtShoppingListFailed("Response not OK. Status:"+response.status))
      }
  }).catch((error) => {
    dispatch(deleteFromtShoppingListFailed("server responded with error"))
});
  }
}
//action creators

const getShoppingListSuccess = (list) => {
    return {
        type:GET_SHOPPINGLIST_SUCCESS,
        list:list        
    }
}

const getShoppingListFailed = (error) => {
    return {
        type:GET_SHOPPINGLIST_FAILED,
        error:error
    }
}

const addToShoppingListSuccess = () => {
    return {
        type:ADD_TO_SHOPPINGLIST_SUCCESS        
    }
}

const addTotShoppingListFailed = (error) => {
    return {
        type:ADD_TO_SHOPPINGLIST_FAILED,
        error:error
    }
}

const deleteFromShoppingListSuccess = () => {
    return {
        type:DELETE_FROM_SHOPPINGLIST_SUCCESS        
    }
}

const deleteFromtShoppingListFailed = (error) => {
    return {
        type:DELETE_FROM_SHOPPINGLIST_FAILED,
        error:error
    }
}

const shoppingListLoading = () => {
    return {
        type:SHOPPINGLIST_LOADING        
    }
}
