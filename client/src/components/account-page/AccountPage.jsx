import React from "react";
import "./account-page.scss";
import homeIcon from "../../assets/house-solid.png";
import { Link } from "react-router-dom";

function AccountPage() {
	return (
		<React.Fragment>
			<Link to={"/"}>
				<img src={homeIcon} className="home-img" alt="home icon" />
			</Link>
			<section id="content-wrapper">
				<h1 className="header">My Account</h1>
				<h3 id="stocks-tracked-header">Stocks Tracked:</h3>
				<Link to={"/"}>
					<button className="button">Logout</button>
				</Link>
			</section>
		</React.Fragment>
	);
}

export default AccountPage;
