import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetchData from '/utils/fetchData'

const initialState = {
    navMain: []
}

// REDUCERS
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "RECEIVE_NAV":
            return {
                ...state,
                navMain: action.navMain
        }
        default: return state
    }
}

// ACTIONS
//export const serverRenderClock = (isServer) => dispatch => {
//    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
//}

const receiveNav = (response) => ({
    type: 'RECEIVE_NAV',
    navMain: response.data
})
export const getNav = () => async (dispatch, getState) => {
    try {
        let response = await fetchData.get(`/book/navigation`)
        await dispatch(receiveNav(response.data))
    } catch (error) {
        console.log('error: ', error)
    }
}


export const initStore = (initialState = initialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}