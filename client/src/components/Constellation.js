import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Constellation ({ constellations }) {
    const [constellation, setConstellation] = useState({});
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/constellations/${id}`)
        .then(r => r.json())
        .then(data => setConstellation(data))

        // localStorage.setItem('constellation', JSON.stringify(constellation))

    }, [])
    // TODO: add edit button for authenticated users
    // TODO: add star(s) belonging to this constellation

    // function useSetConstellation() {
    //     setConstellation(constellations.find(c => c.id == id))
    // }

    return (
        <div className="constellation-details">

            <h1>{constellation.name}</h1>
            <img src={constellation.image_url}/>
            <ul>Meaning: <em>{constellation.meaning}</em></ul>
            <ul>Abbreviation: <em>{constellation.abbreviation}</em></ul>
            <ul>Right Ascension (hours & minutes): {constellation.right_ascension_hrs_mins}</ul>
            <ul>Declination (degrees & minutes): {constellation.declination_degs_mins}</ul>
            <ul>Area (in square degrees): {constellation.area_sq_deg}</ul>
            <ul>Percentage of Sky Area: {constellation.percentage_of_sky_area}</ul>
            <ul>Quadrant: {constellation.quadrant}</ul>
            <ul>Number of primary stars: {constellation.main_stars}</ul>
            <ul>Origin: {constellation.origin}</ul>
        </div>
    )
}

export default Constellation;