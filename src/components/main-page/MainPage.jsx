import React from "react";
import "./main-page.scss";

function MainPage() {
	return (
		<React.Fragment>
			<section id="wrapper">
				<h1 id="header">StockTrack</h1>
				<input id="search-bar" type="text" placeholder="Enter a stock here" />
			</section>
		</React.Fragment>
	);
}

export default MainPage;
