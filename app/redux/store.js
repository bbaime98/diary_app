import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducers/index"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant"
import thunk from "redux-thunk"

export default createStore(reducer, compose(applyMiddleware(thunk)))
