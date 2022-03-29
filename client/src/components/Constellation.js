import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Constellation ({ constellations }) {

    let { id } = useParams();

    let c = constellations.find(constellation => constellation.id == id);
    console.log(c)
    // useEffect(() => {
    //     setConstellation(constellations.find(constellation => constellation.id == id))
    // }, [id])
    // TODO: add edit button for authenticated users
    // TODO: add star(s) belonging to this constellation



    return (
        <div className="constellation-details">
            <h1>{c.name}</h1>
            <img src={c.image_url}/>
            <ul>Meaning: <em>{c.meaning}</em></ul>
            <ul>Abbreviation: <em>{c.meaning}</em></ul>
            <ul>Right Ascension (hours & minutes): {c.right_ascension_hrs_mins}</ul>
            <ul>Declination (degrees & minutes): {c.declination_degs_mins}</ul>
            <ul>Area (in square degrees): {c.area_sq_deg}</ul>
            <ul>Percentage of Sky Area: {c.percentage_of_sky_area}</ul>
            <ul>Quadrant: {c.quadrant}</ul>
            <ul>Number of primary stars: {c.main_stars}</ul>
            <ul>Origin: {c.origin}</ul>
        </div>
    )

}

export default Constellation;