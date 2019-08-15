import {get} from "../../utils/request"
import {url} from "../../utils/url"
import { FETCH_DATA } from "../middleware/api"
import { schema} from "./entities/products"
// action types
export const types = {
    //fecth recommendation request
    //guess you like
    FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST",
    FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
    FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE" 

}
//bound action creators
export const actions = {
    loadLikes: () => {
        return (dispatch, getState) => {
            const endpoint = url.getProductList(0, 10)
            return dispatch(fetchLikes(endpoint))
        }
    }
    
}
//action creators
const fetchLikes = endpoint  => ({
    [FETCH_DATA]: {
      types: [
        types.FETCH_LIKES_REQUEST,
        types.FETCH_LIKES_SUCCESS,
        types.FETCH_LIKES_FAILURE
      ],
      endpoint,
      schema
    }
  });

const reducer = (state = {}, action) => {
    switch(action.type) {
        case types.FETCH_LIKES_REQUEST:

        case types.FETCH_LIKES_SUCCESS:

        case types.FETCH_LIKES_FAILURE:

    }
    return state;
}



export default reducer;