import {applyMiddleware, combineReducers, createStore, compose, Action} from "redux";



import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import pageReducer from "./pageReducer";



let rootReducer = combineReducers({

    page: pageReducer,

})

type RootReducersType = typeof rootReducer
export type AppStateType = ReturnType<RootReducersType>


export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType <A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store