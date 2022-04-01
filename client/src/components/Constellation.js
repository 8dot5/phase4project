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
        <Card className="star-details" key={star.name}>
            <H3><b>{star.name}</b></H3>
            <Img src={star.image_url ? star.image_url : 'https://upload.wikimedia.org/wikipedia/commons/5/57/Betelgeuse_captured_by_ALMA.jpg'}
            height="300"
            width="300">
            </Img>
            <br></br>
            <Ul><em>Apparent Magnitude:</em> {star.apparent_magnitude}</Ul>
            {/* TODO: edit button should only render if user is authenticated */}
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href=`http://localhost:4000/constellations/${id}/stars/${star.id}`;
                }}>
                    Edit star info
            </Button>
            <Button onClick={(e) => {
                e.preventDefault();
                handleDelete(star.id);
                alert("Deleted!");
                }}>
                    Delete star
            </Button>
        </Card>

        )
    })
    return (
        <Card className="constellation-details">
            <H1>{constellation.name}</H1>
            <Img alt="constellation_image" src={constellation.image_url}/>
            <Ul><b>Meaning:</b> {constellation.meaning}</Ul>
            <Ul><b>Origin:</b> {constellation.origin}</Ul>
            <Ul><b>Abbreviation:</b> {constellation.abbreviation}</Ul>
            <Ul><b>Right Ascension (hours & minutes):</b> {constellation.right_ascension_hrs_mins}</Ul>
            <Ul><b>Declination (degrees & minutes):</b> {constellation.declination_degs_mins}</Ul>
            <Ul><b>Area (in square degrees):</b> {constellation.area_sq_deg}</Ul>
            <Ul><b>Percentage of Sky Area:</b> {constellation.percentage_of_sky_area}</Ul>
            <Ul><b>Quadrant:</b> {constellation.quadrant}</Ul>
            <Ul><b>Number of primary stars:</b> {constellation.main_stars}</Ul>
            <H2>Stars:</H2>
            {starList}
            <Button onClick={(e) => {
                e.preventDefault();
                window.location.href=`http://localhost:4000/constellations/${id}/stars`;
                }}>
                    Add a star to {constellation.name}
            </Button>
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

const H3 = styled.h3`
color:orange;
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
padding-top:3vw;
text-decoration:none;
`

const Ul = styled.ul`
color:white;
display:inline;
font-family:Arial;
margin-bottom:-10px;
text-align:center;
margin-left:auto;
margin-right:auto;
text-decoration:none;
padding:0;
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

// const Button = styled.button`

// `
const Button = styled.button`
    position:flex;
    display:flex;
    margin-left:auto;
    margin-right:auto;
    margin-top: 15px;
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 8px 16px;
    text-decoration: none;
    background: transparent;
    color: red;
    &:hover,
    &:focus {
    background: yellow;
    color: black;
    }
    &:active {
    color: black;
    }
`;

const FillButton = styled(Button)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    opacity: 0.9;
  }
`;


export default Constellation;