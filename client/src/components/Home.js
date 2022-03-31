import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Constellation from "./Constellation";

function Home({ user, constellations, setConstellations }) {
	// const [constellations, setConstellations] = useState([])

	useEffect(() => {
		if (user && constellations.length === 0){
			fetch("/constellations")
				.then((r) => r.json())
				.then((c) => setConstellations(c));}
	}, []);

	let itemsToDisplay =
		constellations.map((constellation) => (
			<div key={constellation.id} className="card">
				<h2>
					<Link to={`/constellations/${constellation.id}`}>{constellation.name}</Link>
				</h2>
				<p>{constellation.name}</p>
				<p>{constellation.abbreviation}</p>
				<img alt="constellation_image" src={constellation.image_url}></img>
			</div>
		))

	return (
		<div className="cards">
     		 {user ? itemsToDisplay : <p>Loading...</p> }
    	</div>

	)
}



export default Home;