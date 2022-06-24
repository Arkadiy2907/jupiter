import { NEW_CARD, LOAD_MORE, REMOVE_CARD } from "./ActionTypes"

export const addNewCardAction = (payload) => ({ type: NEW_CARD, payload })
export const addCardAction = (payload) => ({ type: LOAD_MORE, payload })
export const removeCardAction = (payload) => ({ type: REMOVE_CARD, payload })