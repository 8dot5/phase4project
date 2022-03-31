import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


function Constellation () {
    const [constellation, setConstellation] = useState({});
    const [stars, setStars] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetch(`/constellations/${id}`)
        .then(r => r.json())
        .then(data => setConstellation(data))
        .then(constellation.stars = setStars(constellation.stars))
    }, [id, stars])

    function handleDelete(starId){
        setStars(constellation.stars.filter(star => star.id !== starId));
        fetch(`/stars/${starId}`, {
          method: 'DELETE',
      })
    }

    let starList = (constellation.stars || []).map(star => {
        return (
        <div className="star-details" key={star.name}>
            <h3><b>{star.name}</b></h3>
            <img src={star.image_url ? star.image_url : 'https://upload.wikimedia.org/wikipedia/commons/5/57/Betelgeuse_captured_by_ALMA.jpg'}
            height="300"
            width="300">
            </img>
            <br></br>
            <Ul><em>Apparent Magnitude:</em> {star.apparent_magnitude}</Ul>
            {/* TODO: edit button should only render if user is authenticated */}
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href=`http://localhost:4000/constellations/${id}/stars/${star.id}`;
                }}>
                    Edit star info
            </button>
            <button onClick={(e) => {
                e.preventDefault();
                handleDelete(star.id);
                alert("Deleted!");
                }}>
                    Delete star
            </button>
        </div>

        )
    })
    return (
        <Card className="constellation-details">

            <H1>{constellation.name}</H1>
            <Img alt="constellation_image" src={constellation.image_url}/>
            <Ul>Meaning: <em>{constellation.meaning}</em></Ul>
            <Ul>Origin: {constellation.origin}</Ul>
            <Ul>Abbreviation: <em>{constellation.abbreviation}</em></Ul>
            <Ul>Right Ascension (hours & minutes): {constellation.right_ascension_hrs_mins}</Ul>
            <Ul>Declination (degrees & minutes): {constellation.declination_degs_mins}</Ul>
            <Ul>Area (in square degrees): {constellation.area_sq_deg}</Ul>
            <Ul>Percentage of Sky Area: {constellation.percentage_of_sky_area}</Ul>
            <Ul>Quadrant: {constellation.quadrant}</Ul>
            <Ul>Number of primary stars: {constellation.main_stars}</Ul>
            <H2>Stars:</H2>
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href=`http://localhost:4000/constellations/${id}/stars`;
                }}>
                    Add a star to {constellation.name}
            </button>
            {starList}
        </Card>
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

const H1 = styled.h1`
color:lightblue;
font-style:oblique;
text-transform:uppercase;
font-family:Lucida;
margin-left:auto;
margin-right:auto;
text-decoration:none;
`

const H2 = styled.h2`
color:lightblue;
font-style:oblique;
text-transform:uppercase;
font-family:Lucida;
margin-left:auto;
margin-right:auto;
text-decoration:none;
`

const Ul = styled.ul`
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


export default Constellation;