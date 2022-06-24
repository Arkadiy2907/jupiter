import CardList from "./CardList"
import React from "react"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCardAction, addNewCardAction } from "../../action/Action";
import { ArrCards } from "../AllFakeData/ArrCards";
import logo from '../../../images/logo.jpg'

const CardComponent = () => {
	const dispatch = useDispatch()
	const cards = useSelector(state => state.cards)

	useEffect(() => {
		dispatch(addNewCardAction(ArrCards))
	}, [dispatch]);

	const [card, setCard] = useState(cards)

	useEffect(() => {
		setCard(cards)
	}, [cards]);

	const randomNum = (x) => Math.round(Math.random() * x)

	const addedCards = () => {
		let arrNewCards = ArrCards.slice()
		let randomArr = arrNewCards.map((el) => ({ ...el, text: `${el.text} №${randomNum(100)} `, id: `${randomNum(100000)}` }))

		if (cards.length >= 20) cards.length = 20
		let arrNew = cards.length <= 8 ? ArrCards.concat(randomArr) : cards.concat(randomArr)

		dispatch(addCardAction(arrNew))
	}

	const [sortCards, setSortCards] = useState(ArrCards)
	const [choice, setChoice] = useState("all")
	const changeArrCards = (x) => x === "all" ? (card ?? ArrCards) : !!card && card.filter(el => el.title === x)


	useEffect(() => {
		setSortCards(card ?? ArrCards)
	}, [card]);

	useEffect(() => {
		setChoice(choice)
	}, [choice])

	const handleChangeBtn = (k) => {
		setSortCards(changeArrCards(k))
		setChoice(k)
	};

	const handleChange = event => {		
		setSortCards(changeArrCards(event.target.value))
		setChoice(event.target.value);
	};

	return (
		<div className="wrap">
			<header>
				<div className="head">
					<div className="logo">
						<img src={`${logo}`} alt="logo" />
						<h3>Agency</h3>
					</div>
					<ul className="nav">
						<li>About</li>
						<li>Services</li>
						<li>Pricing</li>
						<li>Blog</li>
					</ul>
					<button className="head_btn">CONTACT</button>
				</div>
				<title>
					<h1>Proftolio</h1>
					<p>Agency provides a full service range including technical skills, desing, business understanding.</p>
				</title>
			</header>
			<main>
				<div className="nav__btn">
					<button onClick={() => handleChangeBtn("all")}>Show All</button>
					<button onClick={() => handleChangeBtn("Design")}>Design</button>
					<button onClick={() => handleChangeBtn("Branding")}>Branding</button>
					<button onClick={() => handleChangeBtn("Illustration")}>Illustration</button>
					<button onClick={() => handleChangeBtn("Motion")}>Motion</button>
				</div>
				<label className="nav__label">
					<select value={choice} onChange={handleChange} className="nav__opt">
						<option value="all">Show All</option>
						<option value="Design">Design</option>
						<option value="Branding">Branding</option>
						<option value="Illustration">Illustration</option>
						<option value="Motion">Motion</option>
					</select>
				</label>
				<CardList card={sortCards} />
				<div className="load__btn">
					<button onClick={() => addedCards()}>LOAD MORE</button>
				</div>
			</main>
		</div>
	)
}

export default CardComponent