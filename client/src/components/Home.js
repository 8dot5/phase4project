import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Constellation from "./Constellation";

function Home() {
	const [constellations, setConstellations] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/constellations")
			.then((r) => r.json())
			.then((c) => setConstellations(c));
	}, []);

	let itemsToDisplay = constellations
		.map(constellation => {
			return (
				<section className="container">
					{constellations.map((constellation) => (
						<div key={constellation.id} className="card">
							<h2>
							  <Link to={`/constellation/${constellation.id}`}>{constellation.name}</Link>
							</h2>
							<p>{constellation.name}</p>
							<p>{constellation.abbreviation}</p>
							<img alt="constellation_image" src={constellation.image_url}></img>
						</div>
					))}
				</section>
			)
		})

	return (
		<div className="cards">
      {itemsToDisplay}
      
    </div>

	)
}

export default Home;