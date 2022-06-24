import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { removeCardAction } from "../../action/Action"
import React from "react";

const CardItem = ({ card }) => {
	const dispatch = useDispatch()
	const removeCard = card => dispatch(removeCardAction(card))
	const [light, setLight] = React.useState(false)

	const lightCard = () => setLight((light) => !(light))

	const delKey = (event) => {
		if (event.keyCode === 46 && light) {
			setLight(false)			
			removeCard(card)
		}
	}

	return (
		<div className="item">			
			<label onKeyDown={delKey}>
			<div className="item_text"><p>{card.text}</p></div>
				<input type="checkbox" name="fb" />
				<div className={light ? 'done' : ''} onClick={() => lightCard()}  >
					<img src={`${card.image}`} alt={`${card.alt}`} />
				</div>
			</label>
			<button onClick={() => lightCard()} >{card.title}</button>
		</div>
	)
}

CardItem.propTypes = {
	card: PropTypes.object,
}

export default CardItem