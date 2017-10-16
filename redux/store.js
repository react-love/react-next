import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import fetchData from '/utils/fetchData'

const initialState = {
    navMain: []
}

// reducer
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

// actions
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