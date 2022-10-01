import React from "react";
import "./main-page.scss";
import accountIcon from "../../assets/user-solid.png";

function MainPage() {
	return (
		<React.Fragment>
			<img src={accountIcon} class="account-img" alt="account icon" />
			<section id="wrapper">
				<h1 id="header">StockTrack</h1>
				<input id="search-bar" type="text" placeholder="Enter a stock here" />
				<button class="button">Track Stock</button>
			</section>
		</React.Fragment>
	);
}

export default MainPage;
