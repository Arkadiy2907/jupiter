import React from "react"
import CardComponent from "./store/components/Card/CardComponent"
import "./App.scss"

const App = () => {
	return (
		<div className="wrapper">			
				<React.StrictMode>
					<CardComponent />
				</React.StrictMode>			
		</div>
	)
}

export default App;