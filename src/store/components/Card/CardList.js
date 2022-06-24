import CardItem from "./CardItem"
import "./card.scss"
import PropTypes from "prop-types"

const CardList = (props) => {
	return (
		<div className="allCards">			
				{!!props.card && props.card.map((card, index) => {
					return (
						<CardItem
							card={card}
							key={index}
						/>
					)
				}
				)}		
		</div>
	)
}

CardList.propTypes = { card: PropTypes.arrayOf(PropTypes.object) }

export default CardList