import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
	const [constellations, setConstellations] = useState([])

	useEffect(() => {
		fetch("/constellations")
			.then((r) => r.json())
			.then(setConstellations);
	}, []);

	return (
		<section className="container">
		{constellations.map((constellation) => (
		  <div key={constellation.id} className="card">
			<h2>
			  <Link to={`/constellations/${constellation.id}`}>{constellation.name}</Link>
			</h2>
			<p>{constellation.name}</p>
			<p>{constellation.abbreviation}</p>
			<img src={constellation.image_url}></img>


		  </div>
		))}
	  </section>
	)
}

export default Home;