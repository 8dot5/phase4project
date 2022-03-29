import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"


function StarUpdate( {constellations, handleUpdateStar}) {
    // TODO: fix persistence of constellation ID
    const [name, setName] = useState('');
    const [star, setStar] = useState('');
    // const [constellationId, setConstellationId] = useState('');
    const [brightStar, setBrightstar] = useState(false);
    const [rightAscension, setRightAscension] = useState('');
    const [declination, setDeclination] = useState('');
    const [apparentMagnitude, setApparentMagnitude] = useState('');
    const [age, setAge] = useState('');
    const [massKg, setMassKg] = useState('');
    const [radiusKm, setRadiusKm] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [distanceFromSun, setDistanceFromSun] = useState('');
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/stars/${id}`)
        .then(r => r.json())
        .then(data => setStar(data))
    }, [id])
    
    let formData = {
        "name": name,
        "bright_star": brightStar, 
        "right_ascension_hrs_mins": rightAscension,
        "declination_degs_mins": declination,
        "apparent_magnitude": apparentMagnitude, 
        "age": age,
        "mass_kg": massKg,
        "radius_km": radiusKm,
        "image_url": imageUrl ? imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/57/Betelgeuse_captured_by_ALMA.jpg',
        "distance_from_sun": distanceFromSun
    }

    function handleSubmit(e) {
        e.preventDefault()
        // switch (true) {
            // case (formData.name.length < 1):
            //     alert("Please enter the star name.");
            //     break;
            // case (!formData.architect_id || formData.architect_id === "select"):
            //     alert("Please select an architect.");
            //     break;
            // case (!formData.city_id || formData.city_id === "select"):
            //     alert("Please select the city.");
            //     break;
            // case (formData.opened.length < 1):
            //     alert("Please enter the building's date of completion.");
            //     break;
            // case (formData.description.length < 1):
            //     alert("Please enter a description.");
            //     break;
            // default:
        fetch("http://localhost:3000/stars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(newItem => {
            })
            handleUpdateStar()
            alert("Submitted!");

            setName('');
            setStar('');
            setBrightstar('');
            setRightAscension('');
            setDeclination('');
            setApparentMagnitude('');
            setAge('');
            setMassKg('');
            setRadiusKm('');
            setImageUrl('');
            setDistanceFromSun('');
        }

        console.log(star)

    let form = (
        <div className='form-container'>
            <form className="star-form">
                <label>Edit the information for {star.name}</label>
                <br></br>
                    {/* <select name="constellations" className="constellations-dropdown" value={constellationId} onChange={(e) => setConstellationId(e.target.value)}>
                       {dropdownItems}
                    </select> */}
                <br></br>
                
            </form>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='Form'>Star Name:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="name"
                    value={name}
                    placeholder={star.name}
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                
                <br></br>
                <label htmlFor='Form'>Image:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={imageUrl}
                    placeholder={star.image_url}
                    onChange={e => setImageUrl(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Right ascension (hours & minutes):</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={imageUrl}
                    placeholder={star.right_ascension_hrs_mins}
                    onChange={e => setRightAscension(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Declination (degrees & minutes):</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={declination}
                    placeholder={star.declination_degs_mins}
                    onChange={e => setDeclination(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Apparent Magnitude:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={apparentMagnitude}
                    placeholder={star.apparent_magnitude}
                    onChange={e => setApparentMagnitude(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Age:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={imageUrl}
                    placeholder={star.age}
                    onChange={e => setAge(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Mass (kg): </label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={massKg}
                    placeholder={star.mass_kg}
                    onChange={e => setMassKg(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Radius (km)</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={radiusKm}
                    placeholder={star.radius_km}
                    onChange={e => setRadiusKm(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Distance from the Sun</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={distanceFromSun}
                    placeholder={star.distance_from_sun}
                    onChange={e => setDistanceFromSun(e.target.value)}
                />
                <br></br>
                <input className="button-35" type="submit"></input>
            </form>
        </div>
    )

    return (
        <div className="star-form">
            {form}
        </div>
    )
}

export default StarUpdate;


