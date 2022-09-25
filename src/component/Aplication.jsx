import React from "react";
import WeaderCard from "./WeaderCard";
import "../styles/weaderApp.css";

const Aplication = ({ weather, scale, handelScale, urlVideoBackground }) => {
	return (
		<div className="weatherApp-container">
			<h1>Weather App</h1>
			<WeaderCard weather={weather} scale={scale} handelScale={handelScale} />
			<video autoPlay loop muted>
				<source src={`./video/${urlVideoBackground}.mp4`} type="video/mp4" />
			</video>
		</div>
	);
};

export default Aplication;
