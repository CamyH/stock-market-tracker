import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main-page.scss";
import accountIcon from "../../assets/user-solid.png";
import stockTrackLogo from "../../assets/stock-track-logo.png";

import LineChart from "../chart-js/LineChart";
import { UserData } from "../chart-js/Data";

function MainPage() {
	const [userData, setUserData] = useState({
		labels: UserData.map((data) => data.year),
		datasets: [
			{
				label: "Users Gained",
				data: UserData.map((data) => data.userGain),
			},
		],
	});

	return (
		<React.Fragment>
			{/*<LineChart chartData={userData} />*/}
			<img src={accountIcon} className="account-img" alt="account icon" />
			<section id="header-wrapper">
				<img
					src={stockTrackLogo}
					className="stock-track-logo"
					alt="stock track logo"
				/>
				<h1 className="header">StockTrack</h1>
			</section>
			<section id="content-wrapper">
				<input id="search-bar" type="text" placeholder="Enter a stock here" />
				<Link to={"/my-account"}>
					<button className="button">Track Stock</button>
				</Link>
			</section>
		</React.Fragment>
	);
}

export default MainPage;
