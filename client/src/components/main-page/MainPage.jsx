import React, { useEffect, useState } from "react";
import "./main-page.scss";
import accountIcon from "../../assets/user-solid.png";
import stockTrackLogo from "../../assets/stock-track-logo.png";

function MainPage() {
	return (
		<React.Fragment>
			<img src={accountIcon} className="account-img" alt="account icon" />
			<section id="header-wrapper">
				<img
					src={stockTrackLogo}
					className="stock-track-logo"
					alt="stock track logo"
				/>
				<h1 id="header">StockTrack</h1>
			</section>
			<section id="content-wrapper">
				<input id="search-bar" type="text" placeholder="Enter a stock here" />
				<button className="button">Track Stock</button>
			</section>
		</React.Fragment>
	);
}

export default MainPage;
