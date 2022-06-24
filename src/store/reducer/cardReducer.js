import { NEW_CARD, LOAD_MORE, REMOVE_CARD } from "../action/ActionTypes"

const defaultState = {
	cards: []
}

export const cardReducer = (state = defaultState, action) => {
	switch (action.type) {
		case NEW_CARD:
			return {
				...state,
				cards: [...action.payload]
			}
		
		case LOAD_MORE:
			return {
				...state,
				cards: [...state.cards, ...action.payload]
			}
		
		case REMOVE_CARD:
			return {
				...state,
				cards: state.cards.filter(card => card !== action.payload) }	

		default:
			return state
	}
}
