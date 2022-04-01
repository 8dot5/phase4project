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
				<a href={`/constellations/${constellation.id}`}>
				<Img alt="constellation_image" src={constellation.image_url}></Img>
				</a>
			</Card>
		)).sort(function(c1,c2) {
			return c1.key - c2.key
		})

	return (
        <div className="cards">
             {user ? itemsToDisplay :
			 <P2><A2 href='/login'><em>Log in</em> to view constellations...</A2></P2>
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
const P2 = styled.p`
color:white;
text-align:center;
margin-left:auto;
margin-right:auto;
text-decoration:none;
`
const A2 = styled.a`
color:white;
text-decoration:none;
`
const Img = styled.img`
position:flex;
display:flex;
margin-left:auto;
margin-right:auto;

`


export default Home;