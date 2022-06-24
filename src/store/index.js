import { createStore } from "redux"
import { cardReducer } from "./reducer/cardReducer"

export const store = createStore(cardReducer)