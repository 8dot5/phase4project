import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

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
            <ul><em>Apparent Magnitude:</em> {star.apparent_magnitude}</ul>
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
        <div className="constellation-details">

            <h1>{constellation.name}</h1>
            <img alt="constellation_image" src={constellation.image_url}/>
            <ul>Meaning: <em>{constellation.meaning}</em></ul>
            <ul>Origin: {constellation.origin}</ul>
            <ul>Abbreviation: <em>{constellation.abbreviation}</em></ul>
            <ul>Right Ascension (hours & minutes): {constellation.right_ascension_hrs_mins}</ul>
            <ul>Declination (degrees & minutes): {constellation.declination_degs_mins}</ul>
            <ul>Area (in square degrees): {constellation.area_sq_deg}</ul>
            <ul>Percentage of Sky Area: {constellation.percentage_of_sky_area}</ul>
            <ul>Quadrant: {constellation.quadrant}</ul>
            <ul>Number of primary stars: {constellation.main_stars}</ul>
            <h2>Stars:</h2>
            <button onClick={(e) => {
                e.preventDefault();
                window.location.href=`http://localhost:4000/constellations/${id}/stars`;
                }}>
                    Add a star to {constellation.name}
            </button>
            {starList}
        </div>
    )
}

export default Constellation;