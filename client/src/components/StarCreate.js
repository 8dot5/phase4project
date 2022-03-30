import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"


function StarCreate( {constellations}) {
    // TODO: fix persistence of constellation ID - I THINK WE CAN DELETE THIS?
    let history = useHistory();
    let { id } = useParams();
    
    const [name, setName] = useState('');
    const [constellation, setConstellation] = useState('');
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

    useEffect(() => {
        fetch(`/constellations/${id}`)
        .then(r => r.json())
        .then(data => setConstellation(data))
    }, [id])

    let formData = {
        "name": name,
        "constellation_id": constellation.id,
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

    // let dropdownItems = constellations.map(constellation => {
    //     return <option value={constellation.id}>{constellation.name}</option>
    // })
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
        fetch("/stars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(star => {
                //     handleAddUpdateStar(star)
            })
            // alert("Submitted!");
            history.push(`/constellations/${id}`)
            setName('');
            setConstellation('');
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

    // let constellation = constellations.find(c => c.id == id)
    let form = (
        <div className='form-container'>
            <form className="star-form">
                <label>Add a star to the constellation {constellation.name}</label>
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
                    placeholder="Star name..."
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                {/* <label htmlFor='Form'>Opened:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="opened"
                    value={opened}
                    placeholder="Year..."
                    onChange={e => setOpened(e.target.value)}
                /> */}

                <br></br>
                <label htmlFor='Form'>Image:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={imageUrl}
                    placeholder="Image URL..."
                    onChange={e => setImageUrl(e.target.value)}
                />
                <br></br>
                {/* <label htmlFor='Form'>Description:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="description"
                    value={description}
                    placeholder="Description..."
                    onChange={e => setDescription(e.target.value)}
                />
                <br></br> */}
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

export default StarCreate;


