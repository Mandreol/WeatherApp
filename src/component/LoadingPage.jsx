import React from "react";
import "../styles/loading.css";

const LoadingPage = () => {
	return (
		<div className="loader-container">
			<div className="loader">
				<span></span>
			</div>
			<h2>Looking for your position</h2>
		</div>
	);
};

export default LoadingPage;
