import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import WeaderCard from "./component/WeaderCard";
import LoadingPage from "./component/LoadingPage";
import Aplication from "./component/Aplication";

function App() {
	const [coords, setCoords] = useState();
	const [weather, setWeather] = useState();
	let [scale, setScale] = useState("metric");
	const handelScale = () => {
		setScale(scale == "" ? (scale = "metric") : (scale = ""));
	};

	useEffect(() => {
		const succes = (pos) => {
			const coordsObj = {
				lat: pos.coords.latitude,
				lon: pos.coords.longitude,
			};
			setCoords(coordsObj);
		};
		navigator.geolocation.getCurrentPosition(succes);
	}, []);

	useEffect(() => {
		if (coords) {
			const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=41071a30ab316a7e45e850c195f53727&units=${scale}`;
			axios
				.get(URL)
				.then((res) => setWeather(res.data))
				.catch((err) => console.log(err));
		}
	}, [coords, scale]);
	let urlVideoBackground = "";
	weather?.sys.sunrise < Date.now() < weather?.sys.sunset
		? (urlVideoBackground = "noche")
		: (urlVideoBackground = "Nubes");

	return (
		<div className="App">
			{weather ? (
				<Aplication
					weather={weather}
					scale={scale}
					handelScale={handelScale}
					urlVideoBackground={urlVideoBackground}
				/>
			) : (
				<LoadingPage />
			)}
		</div>
	);
}

export default App;
