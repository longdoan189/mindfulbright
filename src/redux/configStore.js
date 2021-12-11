import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { SeletionReducer } from './setSelectionReducer'

const rootReducer = combineReducers({
    SeletionReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
