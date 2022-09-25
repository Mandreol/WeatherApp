import React from "react";
import "../styles/weader_card.css";

const WeaderCard = ({ weather, scale, handelScale }) => {
	const iconUrl = weather?.weather[0].icon;
	return (
		<div className="weaderCard">
			<h2>
				{weather?.name}, {weather?.sys.country}
			</h2>
			<img className="weaderCard__gif" src={`../icons/${iconUrl}.gif`} alt="" />
			<ul className="weaderCard__secundaryInfo">
				<li>
					<img src="./icons/termico.png" alt="" />
					<p>
						Thermal sensation: {weather?.main.feels_like}
						{scale == "metric" ? "°C" : "°K"}
					</p>
				</li>
				<li>
					<img src="./icons/humedad.png" alt="" />
					<p>Humidity: {weather?.main.humidity}%</p>
				</li>
				<li>
					<img src="./icons/temperaturas.png" alt="" />
					<p>
						T° max/min expected : {weather?.main.temp_max}
						{scale == "metric" ? "°C" : "°K"} /{weather?.main.temp_min}
						{scale == "metric" ? "°C" : "°K"}
					</p>
				</li>
				<li>
					<img src="./icons/visibilidad.png" alt="" />
					<p>Visibility : {weather?.visibility / 1000}Km</p>
				</li>
				<li>
					<img src="./icons/viento.png" alt="" />
					Wind speed: {Math.round(weather?.wind.speed * 3.6)} Km/h
				</li>
			</ul>
			<div className="weaderCard__principalInfo">
				<h2>
					Current temperature: {weather?.main.temp}
					{scale == "metric" ? "°C" : "°K"}
				</h2>
				<h2>The weather right now: {weather?.weather[0].description}</h2>
			</div>
			<button className="button" onClick={handelScale}>
				°C / °K
			</button>
		</div>
	);
};

export default WeaderCard;
