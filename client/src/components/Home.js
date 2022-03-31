import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Constellation from "./Constellation";
import styled from "styled-components";


function Home({ user, constellations, setConstellations }) {
	// const [constellations, setConstellations] = useState([])

	useEffect(() => {
		if (user && constellations.length === 0){
			fetch("/constellations")
				.then((r) => r.json())
				.then((c) => setConstellations(c));}
	}, [user]);

	let itemsToDisplay =
		constellations.map((constellation) => (
			<Card key={constellation.id} className="card">
				<H2><A href={`/constellations/${constellation.id}`}>{constellation.name}</A></H2>
				<P><em>occupying {constellation.percentage_of_sky_area}% of the visible sky<br/>in celestial quadrant {constellation.quadrant}</em></P>

				<Img alt="constellation_image" src={constellation.image_url}></Img>
			</Card>
		)).sort(function(c0,c1) {
			return c0.name - c1.name
		})

	// return (
	// 	<div className="cards">
    //  		 {user ? itemsToDisplay : <p>Loading...</p> }
    // 	</div>

	// )
	return (
        <div className="cards">
             {user ? itemsToDisplay :
			 <P><A href='/login'><em>Log in</em> to view constellations...</A></P>
			  }
        </div>
    )
}

const Card = styled.div `
margin-left:auto;
margin-right:auto;
background: rgba(0, 0, 0, 0.8);
display:flex;
flex-direction:column;
justify-content:center;
width:60%;
padding-bottom:10vw;
`

const A = styled.a`
margin:0px;
padding:0px;
color:lightblue;
text-transform:uppercase;
text-decoration:none;
`

const H2 = styled.h2`
color:white;
margin-left:auto;
margin-right:auto;
margin-bottom:-10px;
text-decoration:none;
`

const P = styled.p`
color:white;
display:inline;
font-family:Lucida;
text-align:center;
margin-left:auto;
margin-right:auto;
text-decoration:none;
`

const Img = styled.img`
position:flex;
display:flex;
margin-left:auto;
margin-right:auto;

`


export default Home;